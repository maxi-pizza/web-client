import React from 'react';
import {css, useTheme} from '@emotion/react';
import MenuLayout from 'src/layout/MenuLayout/MenuLayout.tsx';
import Search from 'src/components/Search/Search.tsx';
import ProductCard from 'src/components/ProductCard/ProductCard.tsx';
import Text from 'src/components/Text.tsx';
import DiscountSvg from 'src/assets/icons/discount.svg';
import MinusSvg from 'src/assets/icons/minus.svg';
import PlusSvg from 'src/assets/icons/plus.svg';
import TrashSvg from 'src/assets/icons/trash.svg';
import {WhiteTheme} from 'src/styles/theme.ts';

const Content = () => {
  const theme = useTheme() as WhiteTheme;
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
        <div css={cart}>
          <div css={cartWrapper}>
            <Text type={'h3'}>Ваше замовлення</Text>
            <div css={cartItemWrapper}>
              <div css={cartItemTextWrapper}>
                <Text type={'h5'}>Піца "Прошутто</Text>
                <Text type={'h5'}>399 грн</Text>
              </div>
              <div css={buttonsWrapper}>
                <div css={counterWrapper}>
                  <button css={minusButton}>
                    <MinusSvg color={theme.colors.accent} />
                  </button>
                  <Text type={'h5'}>2</Text>
                  <button css={addButton}>
                    <PlusSvg color={theme.colors.accent} />
                  </button>
                </div>
                <div css={deleteButtonWrapper}>
                  <button css={deleteButton} />
                  <TrashSvg
                    css={css`
                      position: absolute;
                    `}
                    color={theme.colors.accent}
                  />
                </div>
              </div>
            </div>
            <div css={dottedLine} />
            <div css={cartItemWrapper}>
              <div css={cartItemTextWrapper}>
                <Text type={'h5'}>Піца "Прошутто</Text>
                <Text type={'h5'}>399 грн</Text>
              </div>
              <div css={buttonsWrapper}>
                <div css={counterWrapper}>
                  <button css={minusButton}>
                    <MinusSvg color={theme.colors.accent} />
                  </button>
                  <Text type={'h5'}>2</Text>
                  <button css={addButton}>
                    <PlusSvg color={theme.colors.accent} />
                  </button>
                </div>
                <div css={deleteButtonWrapper}>
                  <button css={deleteButton} />
                  <TrashSvg
                    css={css`
                      position: absolute;
                    `}
                    color={theme.colors.accent}
                  />
                </div>
              </div>
            </div>
          </div>
          <div css={cartFooter}>
            <div css={horizontalLine} />
            <div css={sumWrapper}>
              <Text type={'h4'}>Всього:</Text>
              <Text type={'h4'}>1399 грн</Text>
            </div>
            <button css={orderButton}>
              <Text type={'h5'} color={theme.colors.textWhite}>
                Замовити
              </Text>
            </button>
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

const cartWrapper = css`
  padding-top: 32px;
  flex-direction: column;
  align-items: center;
`;

const cart = theme => css`
  background-color: ${theme.colors.container};
  width: 396px;
  height: 500px;
  border: 1px solid ${theme.colors.stroke};
  border-radius: 12px;
  margin-left: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const cartItemWrapper = css`
  width: 348px;
  margin-top: 32px;
`;

const cartItemTextWrapper = css`
  display: flex;
  justify-content: space-between;
`;

const buttonsWrapper = css`
  margin-top: 14px;
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
`;

const counterWrapper = css`
  display: flex;
  align-items: center;
  width: 130px;
  justify-content: space-between;
`;

const minusButton = theme => css`
  background-color: transparent;
  width: 36px;
  height: 36px;
  border-radius: 6px;
  border: 1px solid ${theme.colors.stroke};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const addButton = theme => css`
  background-color: transparent;
  width: 36px;
  height: 36px;
  border-radius: 6px;
  border: 1px solid ${theme.colors.stroke};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const deleteButton = theme => css`
  background-color: ${theme.colors.accent};
  width: 36px;
  height: 36px;
  border-radius: 6px;
  border: 1px solid ${theme.colors.stroke};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 20%;
`;
const deleteButtonWrapper = css`
  position: relative;
  display: flex;
  justify-content: center;
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
`;

const sumWrapper = css`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  margin-bottom: 24px;
`;

const orderButton = theme => css`
  width: 348px;
  height: 53px;
  border-radius: 8px;
  background-color: ${theme.colors.accent};
  display: flex;
  border: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export default Content;
