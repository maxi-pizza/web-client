import React from 'react';
import BannerImg from 'src/assets/banner.png';
import {css} from '@emotion/react';
import {theme} from 'src/styles/theme.ts';
import ArrowSvg from 'src/assets/icons/arrow-left.svg';

const Banner = () => {
  return (
    <div css={bannerContainer}>
      <img src={String(BannerImg)} alt="banner" />
      <div css={pageControlWrapper}>
        <div css={pageIndicator}></div>
        <div css={activeIndicator}>
          <div css={pageIndicator(theme, true)}></div>
        </div>
        <div css={pageIndicator}></div>
      </div>
      <button css={leftArrowBtn}>
        <ArrowSvg />
      </button>
    </div>
  );
};

const bannerContainer = css`
  height: 800px;
  margin-top: -92px;
  z-index: 1;
  position: relative;
`;

const pageControlWrapper = theme => css`
  position: absolute;
  bottom: 0;
  margin-bottom: 96px;
  left: 50%;
  width: 76px;
  height: 24px;
  border-radius: 100px;
  background-color: ${theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const pageIndicator = (theme, isActive) => css`
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background-color: ${theme.colors.pageIndicator};
  margin: 1px;
  ${isActive ? {backgroundColor: theme.colors.accent} : null}
`;

const activeIndicator = theme => css`
  background-color: transparent;
  border: 1px solid ${theme.colors.accent};
  border-radius: 50%;
`;

const leftArrowBtn = theme => css`
  background-color: ${theme.colors.background};
  width: 53px;
  height: 53px;
  border: none;
  color: black;
  border-radius: 8px;
`;

export default Banner;
