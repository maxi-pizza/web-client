import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/500.css';
import {css} from '@emotion/react';

const fontFamily = 'Montserrat, sans-serif';
export const colors = {
  textPrimary: '#000000',
  background: '#FFFCF9',
  accent: '#E12B17',
  blockAccent: '#FFD86B',
  container: '#FFFFFF',
  stroke: '#EEEEF5',
};

const fontWeights = {
  semiBold: 600,
  medium: 500,
  regular: 400,
};

export const h1 = css`
  font-family: ${fontFamily};
  font-weight: ${fontWeights.semiBold};
  font-size: 46px;
  color: ${colors.textPrimary};
  line-height: 50px;
`;

export const h2 = css`
  font-family: ${fontFamily};
  font-weight: ${fontWeights.semiBold};
  font-size: 34px;
  color: ${colors.textPrimary};
  line-height: 39px;
`;

export const h3 = css`
  font-family: ${fontFamily};
  font-weight: ${fontWeights.semiBold};
  font-size: 24px;
  color: ${colors.textPrimary};
  line-height: 27px;
`;

export const h4 = css`
  font-family: ${fontFamily};
  font-weight: ${fontWeights.semiBold};
  font-size: 20px;
  color: ${colors.textPrimary};
  line-height: 24px;
`;

export const h5 = css`
  font-family: ${fontFamily};
  font-weight: ${fontWeights.semiBold};
  font-size: 16px;
  color: ${colors.textPrimary};
  line-height: 20px;
`;

export const subscribe = css`
  font-family: ${fontFamily};
  font-weight: ${fontWeights.semiBold};
  font-size: 14px;
  color: ${colors.textPrimary};
  line-height: 18px;
`;

export const bigBody = css`
  font-family: ${fontFamily};
  font-weight: ${fontWeights.regular};
  font-size: 16px;
  color: ${colors.textPrimary};
  line-height: 22px;
`;

export const caption = css`
  font-family: ${fontFamily};
  font-weight: ${fontWeights.medium};
  font-size: 14px;
  color: ${colors.textPrimary};
  line-height: 19px;
`;

export const title = css`
  font-family: ${fontFamily};
  font-weight: ${fontWeights.medium};
  font-size: 14px;
  color: ${colors.textPrimary};
  line-height: 19px;
`;

export const bodyText = css`
  font-family: ${fontFamily};
  font-weight: ${fontWeights.regular};
  font-size: 16px;
  color: ${colors.textPrimary};
  line-height: 22px;
`;
