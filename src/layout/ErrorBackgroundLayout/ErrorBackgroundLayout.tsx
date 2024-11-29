import React from 'react';
import {css, useTheme} from '@emotion/react';
import {WhiteTheme} from 'src/styles/theme.ts';
import Rectangle from 'src/assets/icons/Rectangle.svg';
import RectangleMobileSvg from 'src/assets/icons/rectanglemobile.svg';
import NigiriSvg from 'src/assets/icons/nigiri.svg';
import NoodlesSvg from 'src/assets/icons/noodles.svg';
import FriedPotatoesSvg from 'src/assets/icons/fried-potatoes.svg';
import PizzaSvg from 'src/assets/icons/pizza.svg';
import RightRectangle from 'src/assets/icons/RectangleRight.svg';
import SodaSvg from 'src/assets/icons/soda.svg';

const ErrorBackgroundLayout = ({children}: {children: React.ReactNode}) => {
  const theme = useTheme() as WhiteTheme;
  return (
    <div css={container}>
      <Rectangle
        css={css`
          transform: rotate(90deg);
          position: absolute;
          top: 0;
          right: 4px;
          @media (min-width: ${theme.media.mobile}) {
            display: none;
          }
        `}
        color={theme.colors.accent}
      />
      <RectangleMobileSvg
        css={css`
          display: none;
          @media (min-width: ${theme.media.mobile}) {
            display: block;
            position: absolute;
            bottom: 0;
            left: 0;
          }
        `}
      />
      <SodaSvg
        css={css`
          position: absolute;
          top: 433px;
          left: 524px;
          @media (max-width: ${theme.media.mobile}) {
            display: none;
          }
        `}
      />
      <NigiriSvg
        css={css`
          position: absolute;
          right: 328px;
          top: 188px;
          @media (max-width: ${theme.media.mobile}) {
            top: 336px;
            right: 43px;
            width: 60px;
            height: 60px;
          }
        `}
        color={theme.colors.stroke}
      />
      <NoodlesSvg
        css={css`
          position: absolute;
          top: 186px;
          left: 839px;
          @media (max-width: ${theme.media.mobile}) {
            top: 340px;
            left: 35px;
            width: 60px;
            height: 60px;
          }
        `}
        color={theme.colors.stroke}
      />
      <FriedPotatoesSvg
        css={css`
          position: absolute;
          top: 300px;
          right: 637px;
          @media (max-width: ${theme.media.mobile}) {
            top: 430px;
            right: 148px;
            width: 60px;
            height: 60px;
          }
        `}
        color={theme.colors.stroke}
      />
      <PizzaSvg
        css={css`
          position: absolute;
          bottom: 258px;
          left: 317px;
          @media (max-width: ${theme.media.mobile}) {
            display: none;
          }
        `}
        color={theme.colors.stroke}
      />
      <RightRectangle
        css={css`
          position: absolute;
          left: 0;
          bottom: 0;
          transform: rotate(90deg);
          @media (max-width: ${theme.media.mobile}) {
            display: none;
          }
        `}
        color={theme.colors.accent}
      />
      <div>{children}</div>
    </div>
  );
};

const container = theme => css`
  background-color: ${theme.colors.background};
  height: 100vh;
  margin-top: -92px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: ${theme.media.mobile}) {
    align-items: flex-start;
  }
`;

export default ErrorBackgroundLayout;
