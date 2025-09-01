import React from 'react';
import {css, useTheme} from '@emotion/react';
import {WhiteTheme} from 'src/theme.ts';
import CheckedSvg from 'src/assets/icons/checked.svg?react';
import Text from 'src/components/Text.tsx';
import ArrowSvg from 'src/assets/icons/arrow-left.svg?react';
import BackgroundLayout from 'src/components/BackgroundLayout/BackgroundLayout.tsx';
import {Link, useLocation} from 'react-router-dom';

import {rootRoute} from 'src/routes.ts';

const ThankYou = () => {
  const theme = useTheme() as WhiteTheme;
  const location = useLocation();
  console.log(location.state);
  return (
    <BackgroundLayout>
      <div css={wrapper}>
        <CheckedSvg css={checkedSvg} />
        <div
          css={css`
            margin-top: 25px;
            margin-bottom: 15px;
            @media (min-width: ${theme.media.laptop}) {
              margin-top: 32px;
              margin-bottom: 24px;
            }
          `}>
          <Text type={'h1'}>Дякуємо Вам!</Text>
        </div>
        <Text type={'bigBody'}>
          Ваше замовлення успішно отримано та відправлено в роботу. Менеджер
          незабаром зв'яжеться з вами для уточнення деталей.
          {/*Підтвердження*/}
          {/*замовлення надіслано на вашу електронну пошту.*/}
        </Text>
        {/*<div*/}
        {/*  css={css`*/}
        {/*    display: flex;*/}
        {/*    width: 100%;*/}
        {/*    justify-content: space-between;*/}
        {/*    position: relative;*/}
        {/*    margin-top: 40px;*/}
        {/*    @media (min-width: ${theme.media.laptop}) {*/}
        {/*      margin-top: 0;*/}
        {/*    }*/}
        {/*  `}>*/}
        {/*  <div css={circleWrapper}>*/}
        {/*    <div css={activeCircle}>*/}
        {/*      <Text type={'h3'} color={theme.colors.textWhite}>*/}
        {/*        1*/}
        {/*      </Text>*/}
        {/*    </div>*/}
        {/*    <Text type={'h5'}>Приготування</Text>*/}
        {/*  </div>*/}
        {/*  <div*/}
        {/*    css={[*/}
        {/*      horizontalBar,*/}
        {/*      css`*/}
        {/*        position: absolute;*/}
        {/*        top: 16px;*/}
        {/*        left: 79px;*/}
        {/*        @media (min-width: ${theme.media.laptop}) {*/}
        {/*          top: 25px;*/}
        {/*          left: 110px;*/}
        {/*        }*/}
        {/*      `,*/}
        {/*    ]}*/}
        {/*  />*/}
        {/*  <div css={circleWrapper}>*/}
        {/*    <div css={circle}>*/}
        {/*      <Text type={'h3'} color={theme.colors.textPrimary}>*/}
        {/*        2*/}
        {/*      </Text>*/}
        {/*    </div>*/}
        {/*    <Text type={'h5'}>*/}
        {/*      {location.state === DeliveryMethodEnum.Delivery*/}
        {/*        ? 'Доставка'*/}
        {/*        : 'Видача'}*/}
        {/*    </Text>*/}
        {/*  </div>*/}
        {/*  <div*/}
        {/*    css={[*/}
        {/*      horizontalBar,*/}
        {/*      css`*/}
        {/*        position: absolute;*/}
        {/*        top: 16px;*/}
        {/*        right: 92px;*/}
        {/*        @media (min-width: ${theme.media.mobile}) {*/}
        {/*          top: 25px;*/}
        {/*          right: 124px;*/}
        {/*        }*/}
        {/*      `,*/}
        {/*    ]}*/}
        {/*  />*/}
        {/*  <div css={circleWrapper}>*/}
        {/*    <div css={circle}>*/}
        {/*      <Text type={'h3'} color={theme.colors.textPrimary}>*/}
        {/*        3*/}
        {/*      </Text>*/}
        {/*    </div>*/}
        {/*    <Text type={'h5'} color={theme.colors.accent}>*/}
        {/*      Насолоджуйтесь*/}
        {/*    </Text>*/}
        {/*  </div>*/}
        {/*</div>*/}
        <Link css={homeButton} to={rootRoute}>
          <Text type={'h5'} color={theme.colors.textWhite}>
            На головну
          </Text>
          <ArrowSvg
            css={css`
              height: 18px;
              transform: rotate(180deg);
            `}
            color={theme.colors.textWhite}
          />
        </Link>
      </div>
    </BackgroundLayout>
  );
};

const wrapper = theme => css`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  width: 343px;
  align-items: center;
  text-align: center;
  height: 100%;
  @media (min-width: ${theme.media.laptop}) {
    width: 536px;
  }
`;

// const circle = theme => css`
//   margin-bottom: 15px;
//   width: 32px;
//   height: 32px;
//   border-radius: 50%;
//   border: 1px solid ${theme.colors.stroke};
//   background-color: ${theme.colors.background};
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   @media (min-width: ${theme.media.laptop}) {
//     width: 50px;
//     height: 50px;
//   }
// `;
//
// const activeCircle = theme => css`
//   margin-bottom: 15px;
//   width: 32px;
//   height: 32px;
//   border-radius: 50%;
//   background-color: ${theme.colors.accent};
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   @media (min-width: ${theme.media.laptop}) {
//     width: 50px;
//     height: 50px;
//   }
// `;
//
// const circleWrapper = css`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;
// const horizontalBar = theme => css`
//   height: 1px;
//   width: 54px;
//   background-color: ${theme.colors.stroke};
//   @media (min-width: ${theme.media.laptop}) {
//     width: 100px;
//   }
// `;

const homeButton = theme => css`
  padding: 16px 40px;
  background-color: ${theme.colors.accent};
  display: flex;
  border: none;
  border-radius: 8px;

  margin-top: 60px;
  cursor: pointer;
  @media (min-width: ${theme.media.laptop}) {
    margin-top: 80px;
  }
`;

const checkedSvg = theme => css`
  width: 60px;
  height: 60px;
  @media (min-width: ${theme.media.laptop}) {
    width: 120px;
    height: 120px;
  }
`;

export const Component = ThankYou;
