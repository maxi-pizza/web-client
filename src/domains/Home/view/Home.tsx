import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
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
import {useParams, useSearchParams} from 'react-router-dom';
import {fuzzySearch} from 'src/utils/fuzzySearch.ts';
import {useWindowVirtualizer} from '@tanstack/react-virtual';
import {
  useIsLaptop,
  useIsMobile,
  useIsTablet,
} from 'src/common/hooks/useMedia.ts';
import LoadingSpinner from 'src/layout/LoadingSpinner/LoadingSpinner.tsx';
import {router} from 'src/router.tsx';
import {categoryRoute} from 'src/routes.ts';


export type Category = {
  id: string;
  name: string;
  slug: string;
  products: Product[] | null;
};

export const ProductsByCategory = observer(({item, onCategoryInView}: {item: Category, onCategoryInView: (slug: string) => void;}) => {
  const setInView = (inView, entry) => {
    if (inView) {
      onCategoryInView(entry.target.id);
    }
  };

  if ((item.products || []).length === 0) {
    return null;
  }
  return (
    <div>

      <div key={item.id}>
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
              <InView onChange={setInView} threshold={1}>
                {({ref}) => {
                  return <div style={{
                    position: 'absolute',
                    inset: 0
                  }} ref={ref} id={item.slug}></div>;
                }}
              </InView>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

const PC_COLUMNS = 3;
const TABLET_COLUMNS = 2;
const LAPTOP_COLUMNS = 2;
const MOBILE_COLUMNS = 1;

const PC_PRODUCT_CARD_HEIGHT = 482;
const LAPTOP_PRODUCT_CARD_HEIGHT = 482;

const TABLET_PRODUCT_CARD_HEIGHT = 382;
const MOBILE_PRODUCT_CARD_HEIGHT = 382;

const MOBILE_CATEGORY_HEADING_HEIGHT = 69;
const TABLET_CATEGORY_HEADING_HEIGHT = 69;

const PC_CATEGORY_HEADING_HEIGHT = 119;
const LAPTOP_CATEGORY_HEADING_HEIGHT = 119;

const PC_GRID_GAP = 16;
const LAPTOP_GRID_GAP = 16;
const TABLET_GRID_GAP = 16;
const MOBILE_GRID_GAP = 16;

const CATALOG_TOP_PADDING = 80;

const Home = observer(() => {
  const {data: productsData, isLoading: isProductsLoading, isFetched} =
    useQuery(productsQuery);
  const {slug: categorySlug} = useParams() as {slug: string};
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('q') || '');
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isLaptop = useIsLaptop();
  const stickyMenuContainer = useRef<HTMLDivElement>(null);

  const onSearch = s => {
    setSearch(s);
    setSearchParams({q: search});
  };

  const nonEmptyCategories: Category[] = useMemo(() => (productsData || []).filter(category => !!category.products.length), [productsData]);

  const searchedItems =
    search.length > 2
      ? nonEmptyCategories.map(c => ({
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
      : nonEmptyCategories;

  const bannerContainerRef = useRef<HTMLDivElement | null>(null);
  const getRowsAmount = (length: number, columns: number) => {
    return Math.ceil(length / columns);
  };

  const estSizeForResolutions = useCallback((length: number) => {
    if (isMobile) {
      return (
        MOBILE_CATEGORY_HEADING_HEIGHT +
        getRowsAmount(length, MOBILE_COLUMNS) * MOBILE_PRODUCT_CARD_HEIGHT +
        (getRowsAmount(length, MOBILE_COLUMNS) - 1) * MOBILE_GRID_GAP
      );
    }
    if (isTablet) {
      return (
        TABLET_CATEGORY_HEADING_HEIGHT +
        getRowsAmount(length, LAPTOP_COLUMNS) *
        TABLET_PRODUCT_CARD_HEIGHT +
        (getRowsAmount(length, LAPTOP_COLUMNS) - 1) * TABLET_GRID_GAP
      );
    }
    if (isLaptop) {
      return (
        LAPTOP_CATEGORY_HEADING_HEIGHT +
        getRowsAmount(length, TABLET_COLUMNS) *
        LAPTOP_PRODUCT_CARD_HEIGHT +
        (getRowsAmount(length, TABLET_COLUMNS) - 1) * LAPTOP_GRID_GAP
      );
    }
    return (
      PC_CATEGORY_HEADING_HEIGHT +
      getRowsAmount(length, PC_COLUMNS) * PC_PRODUCT_CARD_HEIGHT +
      (getRowsAmount(length, PC_COLUMNS) -1) * PC_GRID_GAP
    );
  }, [isLaptop, isTablet, isMobile]);

  const estSize = searchedItems.map(item =>
    item.products?.length ? estSizeForResolutions(item.products.length) : 0,
  );

  const scrollMargin = bannerContainerRef?.current?.offsetHeight
    ? bannerContainerRef.current?.offsetHeight + (isMobile ? -90 : isTablet ? -70 : CATALOG_TOP_PADDING)
    : 0

  const categoryVirtualizer = useWindowVirtualizer({
    count: searchedItems.length,
    estimateSize: i => estSize[i],
    scrollMargin: scrollMargin,
  });

  const initiallyScrolled = useRef(false);

  useEffect(() => {
    if(initiallyScrolled.current) {
      return;
    }
    if(!isFetched) {
      return;
    }
    const index = nonEmptyCategories.findIndex(category => category.slug === categorySlug);
     if(index !== -1) {
       categoryVirtualizer.scrollToIndex(index, {
         align: 'start'
       });
     }
    initiallyScrolled.current = true;
  }, [
    categorySlug,
    isFetched,
    nonEmptyCategories,
    categoryVirtualizer
  ]);
  const handleCategoryInView = useCallback((nextCategorySlug: string) => {
    if (nextCategorySlug !== categorySlug) {
      router.navigate(categoryRoute.replace(":slug", nextCategorySlug));
    }
  }, [categorySlug]);

  const handleChangeCategory = useCallback((nextCategorySlug: string) => {
    if (nextCategorySlug !== categorySlug) {
      const index = nonEmptyCategories.findIndex(category => category.slug === nextCategorySlug);
      if(index !== -1) {
        categoryVirtualizer.scrollToIndex(index, {
          align: 'start'
        });
      }

    }
  }, [categorySlug, categoryVirtualizer, nonEmptyCategories]);

  return (
    <LoadingSpinner isLoading={isProductsLoading}>
        <div>
          <div ref={bannerContainerRef}>
            <Banner />
          </div>
          <div css={container}>
            <div css={menuWrapper}>
              <div ref={stickyMenuContainer} css={stickyCategories}>
                <MenuLayout  onChangeCategory={handleChangeCategory} />
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
                        <ProductsByCategory onCategoryInView={handleCategoryInView} item={searchedItems[item.index]} />
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

  background-color: ${theme.colors.background};
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
