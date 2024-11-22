import React from 'react';
import {css} from '@emotion/react';
import logo from 'src/assets/logo.png';
import DistanceSvg from 'src/assets/icons/distance.svg';
import PaceSvg from 'src/assets/icons/pace.svg';
import PhoneSvg from 'src/assets/icons/phone.svg';
import FavouriteSvg from 'src/assets/icons/favorite.svg';
import Text from 'src/components/Text.tsx';
import {theme} from 'src/styles/theme.ts';

const Header = () => {
  return (
    <div css={headerContainer}>
      <div css={wrapper}>
        <img css={logoStyles} src={String(logo)} alt={'logo'} />
        <div css={contentWrapper}>
          <div css={textNSvgWrapper}>
            <DistanceSvg color={theme.colors.accent} />
            <Text type={'bigBody'}>ЖК Артвилль, вул. Спрейса 1, Одеса</Text>
          </div>
          <div css={verticalBar} />
          <div css={textNSvgWrapper}>
            <PaceSvg color={theme.colors.accent} />
            <Text type={'bigBody'}>10:00-22:00</Text>
          </div>
          <div css={verticalBar} />
          <div css={textNSvgWrapper}>
            <PhoneSvg color={theme.colors.accent} />
            <Text type={'bigBody'}>066-98-98-095</Text>
          </div>
          <div css={verticalBar} />
          <div css={textNSvgWrapper}>
            <PhoneSvg color={theme.colors.accent} />
            <Text type={'bigBody'}>098 98 98 095</Text>
          </div>
        </div>
      </div>
      <button css={button}>
        <FavouriteSvg color={theme.colors.accent} />
        <Text type={'subscribe'}>Улюблені страви</Text>
      </button>
    </div>
  );
};

const headerContainer = theme => css`
  background-color: ${theme.colors.background};
  height: 92px;
  border: 1px solid ${theme.colors.stroke};
  border-bottom-left-radius: 80px;
  border-bottom-right-radius: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 3;
`;

const logoStyles = css`
  width: 81px;
  height: 60px;
  margin-right: 56px;
`;

const verticalBar = css`
  background-color: #d3d3dd;
  width: 1px;
  height: 22px;
`;

const contentWrapper = css`
  display: flex;
`;

const wrapper = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 132px;
`;

const textNSvgWrapper = css`
  display: flex;
  margin-left: 24px;
  margin-right: 24px;
`;

const button = theme => css`
  width: 194px;
  height: 48px;
  background-color: ${theme.colors.container};
  border: 1px solid ${theme.colors.stroke};
  border-radius: 8px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  margin-right: 132px;
  :hover {
    border: 1px solid ${theme.colors.accent};
  }
`;

export default Header;
