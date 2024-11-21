import React from 'react';
import {css} from '@emotion/react';
import {colors, bigBody, subscribe} from '../../style.ts';
import logo from 'src/assets/logo.png';
import DistanceSvg from 'src/assets/icons/distance.svg';
import PaceSvg from 'src/assets/icons/pace.svg';
import PhoneSvg from 'src/assets/icons/phone.svg';
import FavouriteSvg from 'src/assets/icons/favorite.svg';

const Header = () => {
  return (
    <div css={headerContainer}>
      <div css={wrapper}>
        <img css={logoStyles} src={logo} alt={'logo'} />
        <div css={contentWrapper}>
          <div css={textNSvgWrapper}>
            <DistanceSvg color={colors.accent} />
            <p css={bigBody}>ЖК Артвилль, вул. Спрейса 1, Одеса</p>
          </div>
          <div css={verticalBar} />
          <div css={textNSvgWrapper}>
            <PaceSvg color={colors.accent} />
            <p css={bigBody}>10:00-22:00</p>
          </div>
          <div css={verticalBar} />
          <div css={textNSvgWrapper}>
            <PhoneSvg color={colors.accent} />
            <p css={bigBody}>066-98-98-095</p>
          </div>
          <div css={verticalBar} />
          <div css={textNSvgWrapper}>
            <PhoneSvg color={colors.accent} />
            <p css={bigBody}>098 98 98 095</p>
          </div>
        </div>
      </div>
      <button css={button}>
        <FavouriteSvg color={colors.accent} />
        <p css={subscribe}>Улюблені страви</p>
      </button>
    </div>
  );
};

const headerContainer = css`
  background-color: ${colors.background};
  height: 92px;
  border: 1px solid ${colors.stroke};
  border-bottom-left-radius: 80px;
  border-bottom-right-radius: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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

const button = css`
  width: 194px;
  height: 48px;
  background-color: ${colors.container};
  border: 1px solid ${colors.stroke};
  border-radius: 8px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  margin-right: 132px;
  :hover {
    border: 1px solid ${colors.accent};
  }
`;

export default Header;
