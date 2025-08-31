import React, {ForwardedRef, forwardRef, useRef} from 'react';
import {css, useTheme} from '@emotion/react';
import Text from 'src/components/Text.tsx';
import {WhiteTheme} from 'src/styles/theme.ts';
import {Link} from 'react-router-dom';
import {composeRefs} from 'src/utils/ref.ts';
import {categoryRoute} from 'src/routes.ts';

type Category = {
  id: number;
  name: string;
  slug: string;
};
const CategoryCard = forwardRef(
  (
    {
      backgroundImg,
      text,
      category,
      svg,
      onClick,
      activeCategory,
    }: {
      backgroundImg: string;
      text: string;
      category: Category;
      svg?: React.ReactNode;
      onClick: () => void;
      activeCategory: string;
    },
    ref: ForwardedRef<HTMLAnchorElement>,
  ) => {
    const theme = useTheme() as WhiteTheme;
    const innerRef = useRef<HTMLAnchorElement>(null);
    // useEffect(() => {
    //   if(category.slug === activeCategory) {
    //     innerRef.current?.scrollIntoView({behavior: 'smooth', });
    //   }
    // }, [activeCategory, category]);
    return (
      <Link
        ref={composeRefs(ref, innerRef)}
        css={categoryCard({isActive: activeCategory === category.slug})}
        onClick={onClick}
        to={categoryRoute.replace(':slug', category.slug)}>
        <div css={redRectangle} />
        <img src={backgroundImg} alt={'discount'} css={imgWrapper} />
        {svg && (
          <div
            css={css`
              height: 18px;
              width: 18px;
              margin-left: 12px;
            `}>
            {svg}
          </div>
        )}
        <div
          css={css`
            margin-left: 12px;
            white-space: nowrap;
          `}>
          <Text
            type={'h5'}
            color={
              activeCategory === category.slug
                ? theme.colors.textWhite
                : theme.colors.textPrimary
            }>
            {text}
          </Text>
        </div>
      </Link>
    );
  },
);

const categoryCard =
  ({isActive}) =>
  theme => css`
    background-color: ${isActive
      ? theme.colors.accent
      : theme.colors.container};
    border: 1px solid ${theme.colors.stroke};
    border-radius: 8px;
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    user-select: none;

    height: 48px;
    padding-right: 50px;
    width: auto;
    margin-right: 8px;

    @media (min-width: ${theme.media.laptop}) {
      width: 223px;
      height: 53px;
      margin-right: 0;
    }
  `;

const redRectangle = theme => css`
  width: 3px;
  height: 21px;
  background-color: ${theme.colors.accent};
  position: absolute;
  left: -3px;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
`;

const imgWrapper = css`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 40px;
  width: 40px;
`;

export default CategoryCard;
