import React from 'react';
import ErrorBackgroundLayout from 'src/layout/ErrorBackgroundLayout/ErrorBackgroundLayout.tsx';
import Text from 'src/components/Text.tsx';
import {css, useTheme} from '@emotion/react';
import NoRouteSvg from '/src/assets/icons/404.svg?react';
import Arrow from 'src/assets/icons/arrow-left.svg?react';
import {WhiteTheme} from 'src/styles/theme.ts';
import {Link} from 'react-router-dom';
import {rootRoute} from 'src/routes.ts';

const Error = () => {
  const theme = useTheme() as WhiteTheme;
  return (
    <ErrorBackgroundLayout>
      <NoRouteSvg
        css={css`
          position: absolute;
          width: 312px;
          height: 112px;
          bottom: 112px;
          left: 45px;
          @media (min-width: ${theme.media.tablet}) {
            left: unset;
            bottom: 100px;
            right: 102px;
          }
        `}
      />
      <div
        css={css`
          width: 100%;
          height: 400px;

          @media (min-width: ${theme.media.tablet}) {
            margin-left: 110px;
          }
          @media (min-width: ${theme.media.pc}) {
            margin-left: 132px;
            width: 1656px;
            position: relative;
            height: 500px;
          }
        `}>
        <Text type={'h1'}>Щось пішло не так</Text>
        <div
          css={css`
            margin-top: 24px;
            margin-bottom: 40px;
            width: 343px;
            @media (min-width: ${theme.media.tablet}) {
              width: 536px;
            }
          `}>
          <Text type={'bigBody'} opacity={'60%'}>
            Упс! Схоже, ви натрапили на мертве посилання, давайте повернемося до
            відомого маршруту!
          </Text>
        </div>
        <Link to={rootRoute} css={backButton}>
          <Text type={'h5'} color={theme.colors.textWhite}>
            На головну
          </Text>
          <Arrow color={theme.colors.textWhite} />
        </Link>
      </div>
    </ErrorBackgroundLayout>
  );
};

const backButton = theme => css`
  background-color: ${theme.colors.accent};
  height: 48px;
  width: 343px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  svg {
    transform: rotate(180deg);
    width: 18px;
    height: 18px;
    margin-left: 6px;
  }
  @media (min-width: ${theme.media.laptop}) {
    width: 201px;
    height: 51px;
  }
`;

export default Error;
