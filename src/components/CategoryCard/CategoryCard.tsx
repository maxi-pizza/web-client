import React from 'react';
import {css, useTheme} from '@emotion/react';
import Text from 'src/components/Text.tsx';
import {WhiteTheme} from 'src/styles/theme.ts';

const CategoryCard = ({
  backgroundImg,
  text,
  svg,
}: {
  backgroundImg: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >;
  text: string;
  svg?: React.ReactNode;
}) => {
  const theme = useTheme() as WhiteTheme;
  return (
    <div css={categoryCard}>
      <div css={redRectangle} />
      <img src={String(backgroundImg)} alt={'discount'} css={imgWrapper} />
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
        <Text type={'h5'} color={theme.colors.textWhite}>
          {text}
        </Text>
      </div>
    </div>
  );
};

const categoryCard = theme => css`
  width: 223px;
  height: 53px;
  background-color: ${theme.colors.accent};
  border: 1px solid ${theme.colors.stroke};
  border-radius: 8px;
  display: flex;
  align-items: center;
  position: relative;
  @media (max-width: ${theme.media.mobile}) {
    height: 48px;
    padding-right: 50px;
    width: auto;
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
