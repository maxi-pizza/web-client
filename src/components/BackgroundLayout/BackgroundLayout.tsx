import React from 'react';
import {css} from '@emotion/react';
import BackgroundThankYou from 'src/assets/BackgroundThankYou.png';

const BackgroundLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div css={container}>
      <div>{children}</div>
    </div>
  );
};

const container = theme => css`
  background-color: ${theme.colors.background};
  background-image: url(${BackgroundThankYou});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  margin-top: -92px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default BackgroundLayout;
