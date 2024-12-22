import React, {useEffect, useRef} from 'react';
import Banner from 'src/layout/Banner/Banner.tsx';
import MenuLayout from 'src/layout/MenuLayout/MenuLayout.tsx';
import Search from 'src/components/Search/Search.tsx';
import DiscountSvg from 'src/assets/icons/discount.svg';
import {css} from '@emotion/react';
import Text from 'src/components/Text.tsx';
import ProductCard, {Product} from 'src/components/ProductCard/ProductCard.tsx';
import Cart from 'src/components/Cart/Cart.tsx';
import {useQuery} from '@tanstack/react-query';
import {productsQuery} from 'src/domains/Home/products.query.ts';
import {InView} from 'react-intersection-observer';
import {observer} from 'mobx-react-lite';
import categoryStore from 'src/stores/categoryStore.ts';
import {useParams} from 'react-router-dom';
import {cartQuery} from 'src/domains/Cart/cart.query.ts';

export type Category = {
  id: string;
  name: string;
  slug: string;
  products: Product[] | null;
};

const ProductsByCategory = observer(({item}: {item: Category}) => {
  const setInView = (inView, entry) => {
    if (inView) {
      window.history.replaceState({}, '', `${entry.target.id}`);
      categoryStore.changeCategory(entry.target.id);
    }
  };

  return (
    <div>
      <InView onChange={setInView} threshold={1}>
        {({ref}) => {
          return <div ref={ref} id={item.slug}></div>;
        }}
      </InView>
      <div key={item.id}>
        {!item.products || item.products.length > 0 ? (
          <>
            <div css={headingWrapper}>
              <Text type={'h2'}>{item.name}</Text>
            </div>
            <div css={productsGrid} id={item.slug}>
              {item.products?.map(product => (
                <div
                  key={product.id}
                  css={css`
                    position: relative;
                  `}>
                  <ProductCard product={product} />
                  <InView onChange={setInView} threshold={1}>
                    {({ref}) => {
                      return (
                        <div
                          ref={ref}
                          id={item.slug}
                          css={css`
                            position: absolute;
                          `}
                        />
                      );
                    }}
                  </InView>
                </div>
              ))}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
});

const Home = observer(() => {
  const {data: productsData} = useQuery(productsQuery);
  const {data: cartData} = useQuery(cartQuery);
  console.log(cartData);
  const categoryRefs = useRef({});
  const p = useParams();

  useEffect(() => {
    const category = categoryRefs.current[categoryStore.categorySlug];
    if (category) {
      category.scrollIntoView({block: 'start'});
    }
  }, [p]);

  const items: Category[] = (productsData || []).map(
    categoryWithProducts => categoryWithProducts,
  );

  return (
    <div>
      <Banner />
      <div css={container}>
        <div css={menuWrapper}>
          <div css={stickyCategories}>
            <MenuLayout />
          </div>
          <div css={searchAndProductsWrapper}>
            <div css={searchWrapper}>
              <Search />
            </div>
            {/*<div css={headingWrapper}>*/}
            {/*  <DiscountSvg*/}
            {/*    css={css`*/}
            {/*      height: 36px;*/}
            {/*      width: 36px;*/}
            {/*      margin-right: 16px;*/}
            {/*    `}*/}
            {/*  />*/}
            {/*  <Text type={'h2'}>Акційні пропозиції</Text>*/}
            {/*</div>*/}
            {items.map(item => (
              <div
                ref={el => (categoryRefs.current[item.slug] = el)}
                key={item.slug}>
                <ProductsByCategory item={item} key={item.slug} />
              </div>
            ))}
          </div>
          <div css={cartWrapper}>
            <Cart cart={cartData} />
          </div>
        </div>
      </div>
    </div>
  );
});

const container = theme => css`
  background-color: ${theme.colors.background};
  margin-top: -80px;
  margin-bottom: -80px;
  position: relative;
  z-index: 2;
  padding-bottom: 182px;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  @media (min-width: ${theme.media.laptop}) {
    border-top-left-radius: 80px;
    border-top-right-radius: 80px;
  }
`;

const menuWrapper = theme => css`
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 0;

  @media (min-width: ${theme.media.laptop}) {
    flex-direction: row;
    align-items: normal;
    justify-content: center;
  }
`;

const searchAndProductsWrapper = theme => css`
  margin-left: 0;
  width: 343px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: ${theme.media.tablet}) {
    width: 653px;
  }
  @media (min-width: ${theme.media.pc}) {
    width: 986px;
    display: flex;
    justify-content: flex-start;
  }
`;

const headingWrapper = theme => css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 15px;
  margin-bottom: 15px;
  svg {
    height: 24px;
    width: 24px;
  }
  @media (min-width: ${theme.media.laptop}) {
    display: flex;
    margin-top: 48px;
    margin-bottom: 32px;
    align-items: center;
    width: 100%;
    svg {
      height: 36px;
      width: 36px;
    }
  }
`;

const productsGrid = theme => css`
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr;

  @media (min-width: ${theme.media.tablet}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: ${theme.media.pc}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const cartWrapper = theme => css`
  display: none;

  @media (min-width: ${theme.media.laptop}) {
    display: block;
    margin-left: 24px;
    height: 100%;
    position: sticky;
    top: 0;
  }
`;

const searchWrapper = theme => css`
  display: none;

  @media (min-width: ${theme.media.laptop}) {
    display: flex;
    width: 100%;
  }
`;

const stickyCategories = theme => css`
  position: sticky;
  top: 78px;
  z-index: 1;
  margin-right: 8px;
  background-color: ${theme.colors.background};
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 65px;
  @media (min-width: ${theme.media.laptop}) {
    display: block;
    margin-right: 24px;
    overflow-y: scroll;
    height: 95vh;
    top: 0;
    width: unset;
    align-items: unset;
    justify-content: unset;
  }
`;

export default Home;
