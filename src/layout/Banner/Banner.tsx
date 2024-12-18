import React, {useEffect, useState} from 'react';
import {css} from '@emotion/react';
import ArrowSvg from 'src/assets/icons/arrow-left.svg';
import {useIsMobile, useIsTablet} from 'src/common/hooks/useMedia.ts';

import {motion, AnimatePresence} from 'framer-motion';
import {wrap} from 'motion';

import Banner1 from 'src/assets/banner.png';
import Banner2 from 'src/assets/banner2.png';
import Banner3 from 'src/assets/banner3.png';
import Banner4 from 'src/assets/banner4.png';
import Banner5 from 'src/assets/banner5.png';

import BannerMobile1 from 'src/assets/banner-mobile.png';
import BannerMobile2 from 'src/assets/banner-mobile2.png';
import BannerMobile3 from 'src/assets/banner-mobile3.png';
import BannerMobile4 from 'src/assets/banner-mobile4.png';
import BannerMobile5 from 'src/assets/banner-mobile5.png';

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 1000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};
const Banner = () => {
  const preloadImage = src => {
    const img = new Image();
    img.src = src;
  };

  const images = [Banner1, Banner2, Banner3, Banner4, Banner5];
  const mobileImages = [
    BannerMobile1,
    BannerMobile2,
    BannerMobile3,
    BannerMobile4,
    BannerMobile5,
  ];

  useEffect(() => {
    images.forEach(preloadImage);
  }, []);

  const [[page, direction], setPage] = useState([0, 0]);
  const mobile = useIsMobile();
  const tablet = useIsTablet();

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };
  // setTimeout(() => paginate(1), 7000);
  return (
    <div css={bannerContainer}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={mobile ? mobileImages[imageIndex] : images[imageIndex]}
          custom={direction}
          variants={variants}
          initial={'enter'}
          animate={'center'}
          exit={'exit'}
          transition={{
            opacity: {duration: 0.2},
          }}
          drag="x"
          dragConstraints={{left: 0, right: 0}}
          dragElastic={1}
          onDragEnd={(e, {offset, velocity}) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      {/*<img*/}
      {/*  css={imageStyles}*/}
      {/*  src={mobile || tablet ? String(BannerMobileImg) : String(BannerImg)}*/}
      {/*  alt={'baner'}*/}
      {/*/>*/}
      <div css={pageControlWrapper({slidesCount: images.length})}>
        {images.map((image, i) => (
          <div css={activeIndicator({isActive: i === imageIndex})} key={i}>
            <div
              css={pageIndicator({isActive: i === imageIndex})}
              onClick={() => paginate(i - imageIndex)}
            />
          </div>
        ))}
      </div>
      <button css={leftArrowBtn} onClick={() => paginate(-1)}>
        <ArrowSvg />
      </button>
      <button css={rightArrowBtn} onClick={() => paginate(1)}>
        <ArrowSvg />
      </button>
    </div>
  );
};

const bannerContainer = theme => css`
  margin-top: -92px;
  z-index: 1;
  position: relative;
  width: 100%;
  padding-top: calc(700 / 350 * 100%);
  @media (min-width: ${theme.media.tablet}) {
    padding-top: calc(1000 / 1800 * 100%);
  }
  @media (min-width: ${theme.media.laptop}) {
    padding-top: calc(800 / 1920 * 100%);
  }
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    top: 0;
    left: 0;
    user-select: none;
  }
`;

const pageControlWrapper =
  ({slidesCount}) =>
  theme => css`
    position: absolute;
    bottom: 0;
    margin-bottom: 96px;
    transform: translate(-50%, -50%);
    left: 50%;
    height: 24px;
    padding-right: 8px;
    padding-left: 8px;
    width: ${slidesCount * 25}px;
    border-radius: 100px;
    background-color: ${theme.colors.background};
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    z-index: 2;
  `;

const pageIndicator =
  ({isActive}: {isActive: boolean}) =>
  theme => css`
    height: 8px;
    width: 8px;
    border-radius: 50%;
    margin: 1px;
    background-color: ${theme.colors.pageIndicator};
    cursor: pointer;
    ${isActive ? {backgroundColor: theme.colors.accent} : null}
  `;

const activeIndicator =
  ({isActive}: {isActive: boolean}) =>
  theme => css`
  ${
    isActive &&
    `background-color: transparent;
     border: 1px solid ${theme.colors.accent};
     border-radius: 50%;`
  }
}
    
  `;

const leftArrowBtn = theme => css`
  display: none;

  @media (min-width: ${theme.media.laptop}) {
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
    left: 132px;
    cursor: pointer;
    z-index: 2;
    :hover {
      svg {
        color: ${theme.colors.accent};
      }
    }
  }
`;

const rightArrowBtn = theme => css`
  display: none;

  @media (min-width: ${theme.media.laptop}) {
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
    right: 132px;
    cursor: pointer;
    z-index: 2;
    svg {
      transform: rotate(180deg);
      :hover {
        color: ${theme.colors.accent};
      }
    }
  }
`;

export default Banner;
