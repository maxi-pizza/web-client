import React, {useEffect, useState} from 'react';
import {css} from '@emotion/react';
import ArrowSvg from 'src/assets/icons/arrow-left.svg?react';

import {motion, AnimatePresence} from 'framer-motion';
import {wrap} from 'motion';

import Banner6 from 'src/assets/banner6.png';
import Banner7 from 'src/assets/banner7.png';

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
const Banner2 = () => {
  const preloadImage = src => {
    const img = new Image();
    img.src = src;
  };

  const images = [
    //   Banner1,
    // Banner2,
    // Banner3,
    // Banner4,
    // Banner5,
    Banner6,
    Banner7,
  ];

  useEffect(() => {
    images.forEach(preloadImage);
  }, [images]);

  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };
  // setTimeout(() => paginate(1), 7000);
  return (
    <div css={root}>
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
              opacity: {duration: 0.2},
            }}
            drag="x"
            dragConstraints={{left: 0, right: 0}}
            dragElastic={1}
            onDragEnd={(_, {offset, velocity}) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          />
        </AnimatePresence>

        <div css={pageControlWrapper({slidesCount: images.length})}>
          {images.map((_, i) => (
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
    </div>
  );
};

const root = theme => css`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 130px;

  @media (min-width: ${theme.media.pc}) {
    width: 1661px;
  }
`;

const bannerContainer = theme => css`
  z-index: 1;
  position: relative;

  padding-top: calc(73 / 130 * 100%);
  border-radius: 40px;

  overflow-x: hidden;

  @media (min-width: ${theme.media.tablet}) {
    border-radius: 40px;
  }

  @media (min-width: ${theme.media.laptop}) {
    border-radius: 80px;
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
    opacity: 0.5;
    :hover {
      opacity: 1;
    }
    margin-bottom: 0;
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

export default Banner2;
