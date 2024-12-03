import React from 'react';
import {css} from '@emotion/react';
import BackgroundError from 'src/assets/BackgroundError.png';
import BackgroundErrorMobile from 'src/assets/BackgroundErrorMobile.png';

const ErrorBackgroundLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div css={container}>
      <div>{children}</div>
    </div>
  );
};

const container = theme => css`
  background-color: ${theme.colors.background};
  background-image: url(${BackgroundErrorMobile});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  margin-top: -92px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: ${theme.media.tablet}) {
    background-image: url(${BackgroundError});
    justify-content: flex-start;
    width: 100%;
  }
`;

export default ErrorBackgroundLayout;
