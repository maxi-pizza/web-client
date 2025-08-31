import React, {useState} from 'react';
import Modal from 'src/components/Modal/Modal.tsx';
import modalsStore from 'src/stores/modalsStore.ts';
import {css, useTheme} from '@emotion/react';
import {observer} from 'mobx-react-lite';
import Search from 'src/components/Search/Search.tsx';
import {useSearchParams} from 'react-router-dom';
import {useQuery} from '@tanstack/react-query';
import {productsQuery} from 'src/domains/Home/products.query.ts';
import {fuzzySearch} from 'src/utils/fuzzySearch.ts';
import ProductCard from 'src/components/ProductCard/ProductCard.tsx';
import Text from 'src/components/Text.tsx';
import EmptyCartSvg from 'src/assets/icons/emtyCart.svg?react';
import {WhiteTheme} from 'src/styles/theme.ts';

type Product = {
  name: string;
  id: number;
  slug: string;
  image: string;
  description: string;
  price: string;
  weight: string;
  unit: string;
};

const SearchModal = observer(() => {
  const theme = useTheme() as WhiteTheme;
  const {data: productsData} = useQuery(productsQuery);
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState<string>(searchParams.get('q') || '');
  const items: Product[] = (productsData || []).flatMap(
    category => category.products,
  );

  const searchedItems =
    search.length > 2
      ? fuzzySearch(items || [], search, product => product.name, {
          maxAllowedModifications: 1,
        })
      : [];
  const onSearch = s => {
    setSearch(s);
    setSearchParams({q: search});
  };
  return (
    <Modal
      handleModal={() =>
        modalsStore.handleSearchModal(!modalsStore.searchModal)
      }
      isVisible={modalsStore.searchModal}>
      <div css={container}>
        <div css={searchWrapper}>
          <Search onSearch={onSearch} value={search} />
          {search.length < 3 && <Text type={'caption'}>Введіть 3 символи</Text>}
        </div>
        <div css={productsGrid}>
          {search.length > 0 && searchedItems.length > 0 ? (
            searchedItems.map(product => <ProductCard product={product} />)
          ) : (
            <div css={nothingFound}>
              <EmptyCartSvg color={theme.colors.pageIndicator} />
              <Text type={'bigBody'}>Нічого не знайдено</Text>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
});

const container = css`
  width: 350px;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const productsGrid = css`
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  height: 62vh;
  overflow-y: scroll;
`;

const searchWrapper = css`
  width: 90%;
  margin-top: 40px;
`;

const nothingFound = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
`;
export default SearchModal;
