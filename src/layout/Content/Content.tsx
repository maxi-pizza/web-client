import React from 'react';
import {css} from '@emotion/react';
import MenuLayout from 'src/layout/MenuLayout/MenuLayout.tsx';

const Content = () => {
  return (
    <div css={container}>
      <div css={menuWrapper}>
        <MenuLayout />
      </div>
    </div>
  );
};

const container = theme => css`
  background-color: ${theme.colors.background};
  border-top-left-radius: 80px;
  border-top-right-radius: 80px;
  height: 800px;
  margin-top: -80px;
  margin-bottom: -80px;
  position: relative;
  z-index: 2;
`;

const menuWrapper = css`
  padding-top: 80px;
  margin-left: 135px;
`;

export default Content;
