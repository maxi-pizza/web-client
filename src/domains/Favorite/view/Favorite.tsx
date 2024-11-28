import React from 'react';
import {css, useTheme} from '@emotion/react';
import Text from 'src/components/Text.tsx';
import {WhiteTheme} from 'src/styles/theme.ts';
import DeleteSvg from 'src/assets/icons/close.svg';
import ProductCard from 'src/components/ProductCard/ProductCard.tsx';

const Favorite = () => {
  const theme = useTheme() as WhiteTheme;
  return (
    <div css={container}>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          padding-top: 130px;
          width: 1654px;
          margin-bottom: 32px;
          @media (max-width: ${theme.media.mobile}) {
            width: 343px;
            margin-bottom: 25px;
          }
        `}>
        <div
          css={css`
            display: flex;
          `}>
          <div
            css={css`
              margin-right: 8px;
            `}>
            <Text type={'bigBody'}>Головна</Text>
          </div>
          <Text type={'bigBody'} color={theme.colors.accent}>
            / Улюблені страви
          </Text>
        </div>
        {/*<Text type={'h1'}>Хм... тут поки пусто</Text>*/}
        {/*<div*/}
        {/*  css={css`*/}
        {/*    width: 536px;*/}
        {/*    margin-top: 24px;*/}
        {/*  `}>*/}
        {/*  <Text type={'bigBody'} opacity={'60%'}>*/}
        {/*    Ви ще не додали жодної страви до улюблених, але це легко виправити —*/}
        {/*    просто виберіть свої фаворити на головній, і вони з'являться тут!*/}
        {/*  </Text>*/}
        {/*</div>*/}
        {/*<img*/}
        {/*  src={String(TumbleweedImg)}*/}
        {/*  alt={'tumbleweed'}*/}
        {/*  css={css`*/}
        {/*    width: 200px;*/}
        {/*    position: absolute;*/}
        {/*    top: 390px;*/}
        {/*    left: 472px;*/}
        {/*  `}*/}
        {/*/>*/}
        {/*<VectorSvg*/}
        {/*  color={theme.colors.stroke}*/}
        {/*  css={css`*/}
        {/*    position: absolute;*/}
        {/*    top: 473px;*/}
        {/*    left: 0;*/}
        {/*    width: 1900px;*/}
        {/*  `}*/}
        {/*/>*/}
      </div>
      <div css={contentWrapper}>
        <div css={headingWrapper}>
          <Text type={'h1'}>Те, що вам подобається</Text>
          <div
            css={css`
              display: flex;
              align-items: center;
              justify-content: center;
              @media (max-width: ${theme.media.mobile}) {
                margin-top: 10px;
              }
            `}>
            <div css={deleteButtonWrapper}>
              <DeleteSvg color={theme.colors.accent} />
              <Text type={'h5'} color={theme.colors.accent}>
                Очистити все
              </Text>
            </div>
            <button css={deleteButton} />
          </div>
        </div>
        <div css={productsGrid}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

const container = theme => css`
  background-color: ${theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const contentWrapper = theme => css`
  padding-bottom: 172px;
  min-height: 680px;
  width: 1654px;
  @media (max-width: ${theme.media.mobile}) {
    width: 343px;
  }
`;

const headingWrapper = theme => css`
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
  @media (max-width: ${theme.media.mobile}) {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 16px;
  }
`;

const deleteButtonWrapper = theme => css`
  display: flex;
  align-items: center;
  position: absolute;
`;

const deleteButton = theme => css`
  width: 183px;
  height: 53px;
  background-color: ${theme.colors.accent};
  border: none;
  opacity: 20%;
  border-radius: 8px;
  cursor: pointer;
  @media (max-width: ${theme.media.mobile}) {
    width: 343px;
    height: 48px;
  }
`;

const productsGrid = theme => css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 16px;
  @media (max-width: ${theme.media.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export default Favorite;
