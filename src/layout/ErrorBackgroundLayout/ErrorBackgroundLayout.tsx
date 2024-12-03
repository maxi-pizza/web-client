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
          display: none;
          @media (min-width: ${theme.media.tablet}) {
            display: flex;
            transform: rotate(90deg);
            position: absolute;
            top: 0;
            right: 0;
          }
        `}
        color={theme.colors.accent}
      />
      <RectangleMobileSvg
        css={css`
          position: absolute;
          bottom: 0;
          left: 0;
          @media (min-width: ${theme.media.tablet}) {
            display: none;
          }
        `}
      />
      <SodaSvg
        css={css`
          display: none;
          @media (min-width: ${theme.media.tablet}) {
            display: block;
            position: absolute;
            top: 433px;
            left: 524px;
          }
        `}
      />
      <NigiriSvg
        css={css`
          position: absolute;
          top: 336px;
          right: 43px;
          width: 60px;
          height: 60px;
          @media (min-width: ${theme.media.tablet}) {
            right: 328px;
            top: 188px;
            width: 120px;
            height: 120px;
          }
        `}
        color={theme.colors.stroke}
      />
      <NoodlesSvg
        css={css`
          position: absolute;
          top: 340px;
          left: 35px;
          width: 60px;
          height: 60px;
          @media (min-width: ${theme.media.tablet}) {
            top: 186px;
            left: 600px;
            width: 120px;
            height: 120px;
          }
        `}
        color={theme.colors.stroke}
      />
      <FriedPotatoesSvg
        css={css`
          position: absolute;
          top: 430px;
          right: 148px;
          width: 60px;
          height: 60px;
          @media (min-width: ${theme.media.tablet}) {
            top: 300px;
            right: 637px;
            width: 120px;
            height: 120px;
          }
        `}
        color={theme.colors.stroke}
      />
      <PizzaSvg
        css={css`
          display: none;
          @media (min-width: ${theme.media.tablet}) {
            display: block;
            position: absolute;
            bottom: 150px;
            left: 317px;
          }
        `}
        color={theme.colors.stroke}
      />
      <RightRectangle
        css={css`
          display: none;
          @media (min-width: ${theme.media.tablet}) {
            display: block;
            position: absolute;
            left: 0;
            bottom: 0;
            transform: rotate(90deg);
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
  justify-content: center;
  align-items: center;
  @media (min-width: ${theme.media.tablet}) {
    justify-content: flex-start;
  }
`;

export default ErrorBackgroundLayout;
