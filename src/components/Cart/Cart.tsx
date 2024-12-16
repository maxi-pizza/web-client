import React from 'react';
import {css, useTheme} from '@emotion/react';
import Text from 'src/components/Text.tsx';
import {WhiteTheme} from 'src/styles/theme.ts';
import ProductInCart from 'src/components/ProductInCart/ProductInCart.tsx';
import {Link} from 'react-router-dom';
import {orderRoute} from 'src/routes.ts';

const Cart = ({
  withOrderButton = true,
  modal = false,
}: {
  withOrderButton?: boolean;
  modal?: boolean;
}) => {
  const theme = useTheme() as WhiteTheme;
  return (
    <div css={cart({isModal: modal})}>
      <div
        css={css`
          margin-top: 32px;
        `}>
        <Text type={'h3'}>Ваше замовлення</Text>
      </div>
      <div css={cartWrapper}>
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
          <Link css={orderButton} to={orderRoute}>
            <Text type={'h5'} color={theme.colors.textWhite}>
              Замовити
            </Text>
          </Link>
        )}
      </div>
    </div>
  );
};

const cartWrapper = css`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const cart =
  ({isModal}) =>
  theme => css`
    background-color: ${isModal
      ? theme.colors.background
      : theme.colors.container};
    border: ${isModal ? 'none' : `1px solid ${theme.colors.stroke}`};
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 343px;

    @media (min-width: ${theme.media.laptop}) {
      width: 396px;
    }
  `;

const dottedLine = theme => css`
  height: 1px;
  border-top: 1px dashed ${theme.colors.stroke};
  width: 313px;

  @media (min-width: ${theme.media.laptop}) {
    width: 348px;
  }
`;

const horizontalLine = theme => css`
  height: 1px;
  background-color: ${theme.colors.stroke};
  width: 313px;

  @media (min-width: ${theme.media.laptop}) {
    width: 348px;
  }
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
  width: 313px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 24px;

  @media (min-width: ${theme.media.laptop}) {
    width: 348px;
    height: 53px;
  }
`;

export default Cart;
