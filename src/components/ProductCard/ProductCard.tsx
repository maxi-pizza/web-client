import React from 'react';
import ProductImg from 'src/assets/product.png';
import {css, useTheme} from '@emotion/react';
import {WhiteTheme} from 'src/styles/theme.ts';
import Text from 'src/components/Text.tsx';
import VariantImg from 'src/assets/icons/radio_button_partial.svg';
import PlusSvg from 'src/assets/icons/plus.svg';
import FavoriteSvg from 'src/assets/icons/favorite.svg';
import BgDiscountSvg from 'src/assets/icons/bgdiscount.svg';

const ProductCard = () => {
  const theme = useTheme() as WhiteTheme;
  return (
    <div css={container}>
      <div css={discountWrapper}>
        <div
          css={css`
            position: absolute;
          `}>
          <Text type={'subscribe'}>20 %</Text>
        </div>
        <BgDiscountSvg />
      </div>
      <img src={String(ProductImg)} alt={'product'} css={imgStyles} />
      <div css={wrapper}>
        <Text type={'h4'}>Прошутто</Text>
        <div css={textWrapper}>
          <Text type={'caption'}>
            Склад: прошутто, фета, моцарелла, каперси, орегано.
          </Text>{' '}
        </div>
        <div
          css={css`
            display: flex;
            align-items: center;
            justify-content: space-between;
          `}>
          <div css={variantWrapper}>
            <div css={variantStyle({isActive: true})}>
              <VariantImg color={theme.colors.accent} />
              <Text type={'title'} color={theme.colors.accent}>
                30 см
              </Text>
            </div>
            <div css={variantStyle()}>
              <VariantImg color={theme.colors.textPrimary} />
              <Text type={'title'} color={theme.colors.textPrimary}>
                45 см
              </Text>
            </div>
          </div>
          <div css={weightWrapper}>
            <Text type={'title'} color={theme.colors.textPrimary}>
              350 г.
            </Text>
          </div>
        </div>
        <div css={priceAndButtonsWrapper}>
          <div css={pricesWrapper}>
            <div css={price}>
              <Text type={'h5'}>399 грн</Text>
            </div>
            <Text type={'h4'}>399 грн</Text>
          </div>
          <div css={buttonWrapper}>
            <button css={addToFavorite}>
              <FavoriteSvg color={theme.colors.accent} />
            </button>
            <button css={addButton}>
              <PlusSvg color={theme.colors.textWhite} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const imgStyles = css`
  width: 318px;
  height: 250px;
`;

const container = theme => css`
  width: 318px;
  height: 482px;
  border-radius: 12px;
  border: 1px solid ${theme.colors.stroke};
  background-color: ${theme.colors.container};
  position: relative;
`;

const wrapper = css`
  margin-left: 16px;
  margin-top: 24px;
`;

const textWrapper = css`
  margin-top: 8px;
  margin-bottom: 16px;
`;

const variantWrapper = css`
  display: flex;
`;
const variantStyle = isActive => theme => css`
  height: 32px;
  width: 89px;
  display: flex;
  ${isActive
    ? {
        border: `1px solid ${theme.colors.accent}`,
        borderRadius: '20px',
      }
    : null}
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
  margin-right: 8px;
`;

const weightWrapper = css`
  opacity: 30%;
  margin-right: 16px;
`;

const priceAndButtonsWrapper = css`
  display: flex;
  margin-top: 17px;
`;

const pricesWrapper = css`
  display: flex;
  flex-direction: column;
`;

const price = css`
  opacity: 30%;
  text-decoration: line-through;
`;

const buttonWrapper = css`
  display: flex;
  width: 104px;
  justify-content: space-between;
  margin-left: 103px;
`;

const addButton = theme => css`
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 6px;
  background-color: ${theme.colors.accent};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const addToFavorite = theme => css`
  width: 48px;
  height: 48px;
  border: 1px solid ${theme.colors.stroke};
  border-radius: 6px;
  display: flex;
  background-color: ${theme.colors.container};
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const discountWrapper = css`
  position: absolute;
  right: 0;
  top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default ProductCard;
