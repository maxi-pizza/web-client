import React, {useCallback, useRef, useState} from 'react';
import Banner from 'src/layout/Banner/Banner.tsx';
import MenuLayout from 'src/layout/MenuLayout/MenuLayout.tsx';
import Search from 'src/components/Search/Search.tsx';
// import DiscountSvg from 'src/assets/icons/discount.svg';
import {css} from '@emotion/react';
import Text from 'src/components/Text.tsx';
import ProductCard, {Product} from 'src/components/ProductCard/ProductCard.tsx';
import Cart from 'src/components/Cart/Cart.tsx';
import {useQuery} from '@tanstack/react-query';
import {productsQuery} from 'src/domains/Home/products.query.ts';
import {InView} from 'react-intersection-observer';
import {observer} from 'mobx-react-lite';
import categoryStore from 'src/stores/categoryStore.ts';
import {useSearchParams} from 'react-router-dom';
import {fuzzySearch} from 'src/utils/fuzzySearch.ts';
import {useWindowVirtualizer} from '@tanstack/react-virtual';
import {
  useIsLaptop,
  useIsMobile,
  useIsTablet,
} from 'src/common/hooks/useMedia.ts';
import LoadingSpinner from 'src/layout/LoadingSpinner/LoadingSpinner.tsx';

export type Category = {
  id: string;
  name: string;
  slug: string;
  products: Product[] | null;
};

export const ProductsByCategory = observer(({item}: {item: Category}) => {
  const setInView = (inView, entry) => {
    if (inView) {
      const categorySlug = entry.target.id;
      const previousCategorySlug = categoryStore.categorySlug;
      if(previousCategorySlug !== categorySlug) {
        window.history.replaceState({}, '', `${categorySlug}`);
        categoryStore.changeCategory(categorySlug);
      }
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
  const {data: productsData, isLoading: isProductsLoading} =
    useQuery(productsQuery);
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('q') || '');
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isLaptop = useIsLaptop();

  const onSearch = s => {
    setSearch(s);
    setSearchParams({q: search});
  };

  const items: Category[] = (productsData || []).map(
    categoryWithProducts => categoryWithProducts,
  );
  const searchedItems =
    search.length > 2
      ? items.map(c => ({
          id: c.id,
          name: c.name,
          slug: c.slug,
          products: fuzzySearch(
            c.products || [],
            search,
            product => product.name,
            {
              maxAllowedModifications: 1,
            },
          ),
        }))
      : items;

  const heightRef = useRef<HTMLDivElement | null>(null);
  const howMuchRows = (length: number, columns: number) => {
    return Math.ceil(length / columns);
  };
  const pcAndLaptopProductCardHeight = 482;
  const tabletAndMobileProductCardHeight = 382;
  const pcColumns = 3;
  const tabletAndLaptopColumns = 2;
  const mobileColumns = 1;
  const mobileAndTabletHeadingHeight = 69;
  const pcAndLaptopHeadingHeight = 119;

  const estSizeForResolutions = length => {
    if (isMobile) {
      return (
        howMuchRows(length, mobileColumns) * tabletAndMobileProductCardHeight +
        mobileAndTabletHeadingHeight +
        howMuchRows(length, mobileColumns) * 16 -
        16
      );
    }
    if (isTablet) {
      return (
        howMuchRows(length, tabletAndLaptopColumns) *
          tabletAndMobileProductCardHeight +
        mobileAndTabletHeadingHeight +
        howMuchRows(length, tabletAndLaptopColumns) * 16 -
        16
      );
    }
    if (isLaptop) {
      return (
        howMuchRows(length, tabletAndLaptopColumns) *
          pcAndLaptopProductCardHeight +
        pcAndLaptopHeadingHeight +
        howMuchRows(length, tabletAndLaptopColumns) * 16 -
        16
      );
    }
    return (
      howMuchRows(length, pcColumns) * pcAndLaptopProductCardHeight +
      pcAndLaptopHeadingHeight +
      howMuchRows(length, pcColumns) * 16 -
      16
    );
  };

  const estSize = searchedItems.map(item =>
    item.products?.length ? estSizeForResolutions(item.products.length) : 0,
  );

  const categoryVirtualizer = useWindowVirtualizer({
    count: searchedItems.length,
    estimateSize: i => estSize[i],
    scrollMargin: heightRef?.current?.offsetHeight
      ? heightRef.current?.offsetHeight + (isMobile ? -90 : isTablet ? -70 : 80)
      : 0,
  });

  const handleScrollToCategory = useCallback((i: number) =>
    categoryVirtualizer.scrollToIndex(i, {
      align: 'start',
    }), [categoryVirtualizer])

  return (
    <LoadingSpinner isLoading={isProductsLoading}>
      <>
        <div>
          <div ref={heightRef}>
            <Banner />
          </div>
          <div css={container}>
            <div css={menuWrapper}>
              <div css={stickyCategories}>
                <MenuLayout
                  onScrollToCategory={handleScrollToCategory}
                />
              </div>
              <div css={searchAndProductsWrapper}>
                <div css={searchWrapper}>
                  <Search onSearch={onSearch} value={search} />
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

                <div>
                  <div
                    css={css`
                      height: ${categoryVirtualizer.getTotalSize()}px;
                      position: relative;
                    `}>
                    {categoryVirtualizer.getVirtualItems().map(item => (
                      <div
                        // ref={el => {
                        //   categoryRefs.current[searchedItems[item.index].slug] = el;
                        // }}
                        css={css`
                          position: absolute;
                          height: ${item.size}px;
                          top: 0;
                          left: 0;
                          width: 100%;
                          transform: translateY(
                            ${item.start -
                            categoryVirtualizer.options.scrollMargin}px
                          );
                        `}
                        key={item.key}>
                        <ProductsByCategory item={searchedItems[item.index]} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div css={cartWrapper}>
                <Cart />
              </div>
            </div>
          </div>
        </div>
      </>
    </LoadingSpinner>
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

  @media (min-width: ${theme.media.tablet}) {
    width: 702px;
  }
  @media (min-width: ${theme.media.laptop}) {
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
  padding-top: 15px;
  margin-bottom: 15px;

  svg {
    height: 24px;
    width: 24px;
  }

  @media (min-width: ${theme.media.laptop}) {
    display: flex;
    padding-top: 48px;
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
    top: 10px;
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
    overflow-y: auto;
    height: 95vh;
    top: 10px;
    width: unset;
    align-items: unset;
    justify-content: unset;
  }
`;

export default Home;
