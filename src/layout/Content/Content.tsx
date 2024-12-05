import React from 'react';
import {css} from '@emotion/react';
import MenuLayout from 'src/layout/MenuLayout/MenuLayout.tsx';
import Search from 'src/components/Search/Search.tsx';
import ProductCard from 'src/components/ProductCard/ProductCard.tsx';
import Text from 'src/components/Text.tsx';
import DiscountSvg from 'src/assets/icons/discount.svg';
import Cart from 'src/components/Cart/Cart.tsx';
import Banner from 'src/layout/Banner/Banner.tsx';

const Content = () => {
  return (
    <div>
      <Banner />
      <div css={container}>
        <div css={menuWrapper}>
          <MenuLayout />
          <div css={searchAndProductsWrapper}>
            <div css={searchWrapper}>
              <Search />
            </div>
            <div css={headingWrapper}>
              <DiscountSvg
                css={css`
                  height: 36px;
                  width: 36px;
                  margin-right: 16px;
                `}
              />
              <Text type={'h2'}>Акційні пропозиції</Text>
            </div>
            <div css={productsGrid}>
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
          <div css={cartWrapper}>
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
};

const container = theme => css`
  background-color: ${theme.colors.background};
  border-top-left-radius: 80px;
  border-top-right-radius: 80px;
  margin-top: -80px;
  margin-bottom: -80px;
  position: relative;
  z-index: 2;
  padding-bottom: 182px;
  @media (min-width: ${theme.media.mobile}) {
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
  }
  @media (min-width: ${theme.media.laptop}) {
    border-top-left-radius: 80px;
    border-top-right-radius: 80px;
  }
`;

const menuWrapper = theme => css`
  padding-top: 80px;
  margin-left: 135px;
  display: flex;
  @media (min-width: ${theme.media.mobile}) {
    flex-direction: column;
    align-items: center;
    margin-left: 0;
  }
  @media (min-width: ${theme.media.laptop}) {
    flex-direction: row;
    align-items: normal;
    justify-content: center;
  }
`;

const searchAndProductsWrapper = theme => css`
  margin-left: 24px;
  @media (min-width: ${theme.media.mobile}) {
    margin-left: 0;
    width: 343px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media (min-width: ${theme.media.tablet}) {
    width: 653px;
  }
  @media (min-width: ${theme.media.pc}) {
    width: 986px;
  }
`;

const headingWrapper = theme => css`
  display: flex;
  align-items: center;
  width: 100%;
  @media (min-width: ${theme.media.mobile}) {
    display: flex;
    justify-content: flex-start;
    margin-top: 15px;
    margin-bottom: 15px;
    svg {
      height: 24px;
      width: 24px;
    }
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
  grid-template-columns: 1fr 1fr 1fr;
  @media (min-width: ${theme.media.mobile}) {
    grid-template-columns: 1fr;
  }
  @media (min-width: ${theme.media.tablet}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: ${theme.media.pc}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const cartWrapper = theme => css`
  margin-left: 24px;
  @media (min-width: ${theme.media.mobile}) {
    display: none;
  }
  @media (min-width: ${theme.media.laptop}) {
    display: block;
  }
`;

const searchWrapper = theme => css`
  @media (min-width: ${theme.media.mobile}) {
    display: none;
  }
  @media (min-width: ${theme.media.laptop}) {
    display: block;
    width: 100%;
  }
`;

export default Content;
