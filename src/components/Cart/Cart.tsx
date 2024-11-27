import React from 'react';
import {css, useTheme} from '@emotion/react';
import Text from 'src/components/Text.tsx';
import {WhiteTheme} from 'src/styles/theme.ts';
import ProductInCart from 'src/components/ProductInCart/ProductInCart.tsx';

const Cart = ({withOrderButton = true}: {withOrderButton?: boolean}) => {
  const theme = useTheme() as WhiteTheme;
  return (
    <div css={cart}>
      <div css={cartWrapper}>
        <Text type={'h3'}>Ваше замовлення</Text>
        <ProductInCart />
        <div css={dottedLine} />
        <ProductInCart />
      </div>
      <div css={cartFooter}>
        <div css={horizontalLine} />
        <div css={sumWrapper}>
          <Text type={'h4'}>Всього:</Text>
          <Text type={'h4'}>1399 грн</Text>
        </div>
        {withOrderButton && (
          <button css={orderButton}>
            <Text type={'h5'} color={theme.colors.textWhite}>
              Замовити
            </Text>
          </button>
        )}
      </div>
    </div>
  );
};

const cartWrapper = css`
  padding-top: 32px;
  flex-direction: column;
  align-items: center;
`;

const cart = theme => css`
  background-color: ${theme.colors.container};
  width: 396px;
  border: 1px solid ${theme.colors.stroke};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const dottedLine = theme => css`
  height: 1px;
  width: 348px;
  border-top: 1px dashed ${theme.colors.stroke};
`;

const horizontalLine = theme => css`
  height: 1px;
  width: 348px;
  background-color: ${theme.colors.stroke};
`;

const cartFooter = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  margin-bottom: 24px;
  margin-top: 40px;
`;

const sumWrapper = css`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
`;

const orderButton = theme => css`
  background-color: ${theme.colors.accent};
  width: 348px;
  height: 53px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 24px;
`;

export default Cart;
