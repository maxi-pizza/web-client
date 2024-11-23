import React from 'react';
import BannerImg from 'src/assets/banner.png';
import {css} from '@emotion/react';
import ArrowSvg from 'src/assets/icons/arrow-left.svg';

const Banner = () => {
  return (
    <div css={bannerContainer}>
      <img src={String(BannerImg)} css={imageStyles} alt="banner" />
      <div css={pageControlWrapper}>
        <div css={pageIndicator({isActive: false})}></div>
        <div css={activeIndicator}>
          <div css={pageIndicator({isActive: true})}></div>
        </div>
        <div css={pageIndicator({isActive: false})}></div>
      </div>
      <button css={leftArrowBtn}>
        <ArrowSvg />
      </button>
      <button css={rightArrowBtn}>
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

const imageStyles = css`
  height: 800px;
  user-select: none;
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

const pageIndicator =
  ({isActive}: {isActive: boolean}) =>
  theme => css`
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
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  margin-left: 132px;
  cursor: pointer;
  :hover {
    svg {
      color: ${theme.colors.accent};
    }
`;

const rightArrowBtn = theme => css`
  background-color: ${theme.colors.background};
  width: 53px;
  height: 53px;
  border: none;
  color: black;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  right: 0;
  margin-right: 132px;
  cursor: pointer;
  svg {
    transform: rotate(180deg);
  }
  :hover {
    svg {
      color: ${theme.colors.accent};
    }
  }
`;

export default Banner;
