import React from 'react';
import {css} from '@emotion/react';
import MenuLayout from 'src/layout/MenuLayout/MenuLayout.tsx';
import Search from 'src/components/Search/Search.tsx';
import ProductCard from 'src/components/ProductCard/ProductCard.tsx';
import Text from 'src/components/Text.tsx';
import DiscountSvg from 'src/assets/icons/discount.svg';
import Cart from 'src/components/Cart/Cart.tsx';

const Content = () => {
  return (
    <div css={container}>
      <div css={menuWrapper}>
        <MenuLayout />
        <div css={searchAndProductsWrapper}>
          <Search />
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
        <Cart />
      </div>
    </div>
  );
};

const container = theme => css`
  background-color: ${theme.colors.background};
  border-top-left-radius: 80px;
  border-top-right-radius: 80px;
  height: 1900px;
  margin-top: -80px;
  margin-bottom: -80px;
  position: relative;
  z-index: 2;
`;

const menuWrapper = css`
  padding-top: 80px;
  margin-left: 135px;
  display: flex;
`;

const searchAndProductsWrapper = css`
  margin-left: 24px;
`;

const headingWrapper = css`
  display: flex;
  margin-top: 48px;
  margin-bottom: 32px;
  align-items: center;
`;

const productsGrid = css`
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr 1fr 1fr;
`;

export default Content;
