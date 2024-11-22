import React from 'react';

import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/500.css';
import {css} from '@emotion/react';

const Text = ({
  children,
  type,
  color,
}: {
  children: string;
  type:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'subscribe'
    | 'bigBody'
    | 'caption'
    | 'title'
    | 'bodyText';
  color?: string;
}) => {
  const styleMap = {
    h1,
    h2,
    h3,
    h4,
    h5,
    subscribe,
    bigBody,
    caption,
    title,
    bodyText,
  };
  const textStyle = styleMap[type];
  return (
    <p
      css={[
        textStyle,
        css`
          color: ${color};
        `,
      ]}>
      {children}
    </p>
  );
};

const h1 = theme => css`
  font-family: ${theme.fontFamily};
  font-weight: ${theme.fontWeights.semiBold};
  font-size: 46px;
  color: ${theme.colors.textPrimary};
  line-height: 50px;
`;

const h2 = theme => css`
  font-family: ${theme.fontFamily};
  font-weight: ${theme.fontWeights.semiBold};
  font-size: 34px;
  color: ${theme.colors.textPrimary};
  line-height: 39px;
`;

const h3 = theme => css`
  font-family: ${theme.fontFamily};
  font-weight: ${theme.fontWeights.semiBold};
  font-size: 24px;
  color: ${theme.colors.textPrimary};
  line-height: 27px;
`;

const h4 = theme => css`
  font-family: ${theme.fontFamily};
  font-weight: ${theme.fontWeights.semiBold};
  font-size: 20px;
  color: ${theme.colors.textPrimary};
  line-height: 24px;
`;

const h5 = theme => css`
  font-family: ${theme.fontFamily};
  font-weight: ${theme.fontWeights.semiBold};
  font-size: 16px;
  color: ${theme.colors.textPrimary};
  line-height: 20px;
`;

const subscribe = theme => css`
  font-family: ${theme.fontFamily};
  font-weight: ${theme.fontWeights.semiBold};
  font-size: 14px;
  color: ${theme.colors.textPrimary};
  line-height: 18px;
`;

const bigBody = theme => css`
  font-family: ${theme.fontFamily};
  font-weight: ${theme.fontWeights.regular};
  font-size: 16px;
  color: ${theme.colors.textPrimary};
  line-height: 22px;
`;

const caption = theme => css`
  font-family: ${theme.fontFamily};
  font-weight: ${theme.fontWeights.medium};
  font-size: 14px;
  color: ${theme.colors.textPrimary};
  line-height: 19px;
`;

const title = theme => css`
  font-family: ${theme.fontFamily};
  font-weight: ${theme.fontWeights.medium};
  font-size: 14px;
  color: ${theme.colors.textPrimary};
  line-height: 19px;
`;

const bodyText = theme => css`
  font-family: ${theme.fontFamily};
  font-weight: ${theme.fontWeights.regular};
  font-size: 16px;
  color: ${theme.colors.textPrimary};
  line-height: 22px;
`;

export default Text;
