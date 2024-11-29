import React from 'react';
import ErrorBackgroundLayout from 'src/layout/ErrorBackgroundLayout/ErrorBackgroundLayout.tsx';
import Text from 'src/components/Text.tsx';
import {css, useTheme} from '@emotion/react';
import NoRouteSvg from '/src/assets/icons/404.svg';
import Arrow from 'src/assets/icons/arrow-left.svg';
import {WhiteTheme} from 'src/styles/theme.ts';

const Error = () => {
  const theme = useTheme() as WhiteTheme;
  return (
    <ErrorBackgroundLayout>
      <NoRouteSvg
        css={css`
          position: absolute;
          bottom: 100px;
          right: 102px;
          @media (min-width: ${theme.media.mobile}) {
            width: 312px;
            height: 112px;
            bottom: 112px;
            left: 45px;
          }
        `}
      />
      <div
        css={css`
          width: 1656px;
          position: relative;
          z-index: 1;
          height: 500px;
          @media (min-width: ${theme.media.mobile}) {
            width: 100%;
            margin-top: 104px;
          }
        `}>
        <Text type={'h1'}>Щось пішло не так</Text>
        <div
          css={css`
            margin-top: 24px;
            margin-bottom: 40px;
            width: 536px;
            @media (max-width: ${theme.media.mobile}) {
              width: 343px;
            }
          `}>
          <Text type={'bigBody'} opacity={'60%'}>
            Упс! Схоже, ви натрапили на мертве посилання, давайте повернемося до
            відомого маршруту!
          </Text>
        </div>
        <button css={backButton}>
          <Text type={'h5'} color={theme.colors.textWhite}>
            На головну
          </Text>
          <Arrow color={theme.colors.textWhite} />
        </button>
      </div>
    </ErrorBackgroundLayout>
  );
};

const backButton = theme => css`
  background-color: ${theme.colors.accent};
  width: 201px;
  height: 51px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  svg {
    transform: rotate(180deg);
    width: 18px;
    height: 18px;
    margin-left: 6px;
  }
  @media (min-width: ${theme.media.mobile}) {
    width: 100%;
    height: 48px;
  }
`;

export default Error;
