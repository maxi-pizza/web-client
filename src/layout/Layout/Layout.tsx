import React from 'react';
import Header from 'src/layout/Header/Header.tsx';
import Footer from 'src/layout/Footer/Footer.tsx';
import Banner from 'src/layout/Banner/Banner.tsx';
import {css} from '@emotion/react';

const Layout = () => {
  return (
    <div>
      <Header />
      <div
        css={css`
          height: 800px;
        `}>
        <Banner />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
