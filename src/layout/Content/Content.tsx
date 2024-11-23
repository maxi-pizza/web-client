import React from 'react';
import {css} from '@emotion/react';
import MenuLayout from 'src/layout/MenuLayout/MenuLayout.tsx';
import Search from 'src/components/Search/Search.tsx';

const Content = () => {
  return (
    <div css={container}>
      <div css={menuWrapper}>
        <MenuLayout />
        <div css={searchAndProductsWrapper}>
          <Search />
        </div>
      </div>
    </div>
  );
};

const container = theme => css`
  background-color: ${theme.colors.background};
  border-top-left-radius: 80px;
  border-top-right-radius: 80px;
  height: 1200px;
  margin-top: -80px;
  margin-bottom: -80px;
  position: relative;
  z-index: 2;
`;

const menuWrapper = css`
  padding-top: 80px;
  margin-left: 135px;
  display: flex;
`;

const searchAndProductsWrapper = css`
  margin-left: 24px;
`;

export default Content;
