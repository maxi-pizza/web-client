import React, {useState} from 'react';
import BannerImg from 'src/assets/banner.png';
import {css} from '@emotion/react';
import ArrowSvg from 'src/assets/icons/arrow-left.svg';
import {useIsMobile, useIsTablet} from 'src/common/hooks/useMedia.ts';
import BannerMobileImg from 'src/assets/banner-mobile.png';
import {motion, AnimatePresence} from 'framer-motion';
import {wrap} from 'motion';
import Banner1 from 'src/assets/banner.png';
import Banner2 from 'src/assets/banner2.png';
import Banner3 from 'src/assets/banner3.png';
import Banner4 from 'src/assets/banner4.png';
import Banner5 from 'src/assets/banner5.png';

const images = [
  'src/assets/banner.png',
  'src/assets/banner2.png',
  'src/assets/banner3.png',
  'src/assets/banner4.png',
  'src/assets/banner5.png',
];

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
  const [[page, direction], setPage] = useState([0, 0]);
  const mobile = useIsMobile();
  const tablet = useIsTablet();

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };
  // setTimeout(() => paginate(1), 10000);
  console.log(imageIndex);
  return (
    <div css={bannerContainer}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial={'enter'}
          animate={'center'}
          exit={'exit'}
          transition={{
            x: {type: 'spring', stiffness: 300, damping: 30},
            opacity: {duration: 0.2},
          }}
          drag={'x'}
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
          <div css={activeIndicator({isActive: i === imageIndex})}>
            <div
              css={pageIndicator({isActive: i === imageIndex})}
              key={image}
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

const bannerContainer = css`
  margin-top: -92px;
  z-index: 1;
  position: relative;
  height: 800px;
  img {
    position: absolute;
  }
`;

const imageStyles = css`
  user-select: none;
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
  z-index: 2;
  :hover {
    svg {
      color: ${theme.colors.accent};
    }
  }
  @media (min-width: ${theme.media.mobile}) {
    display: none;
  }
  @media (min-width: ${theme.media.laptop}) {
    display: block;
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
  z-index: 2;
  svg {
    transform: rotate(180deg);
  }
  :hover {
    svg {
      color: ${theme.colors.accent};
    }
  }
  @media (min-width: ${theme.media.mobile}) {
    display: none;
  }
  @media (min-width: ${theme.media.laptop}) {
    display: block;
  }
`;

export default Banner;
