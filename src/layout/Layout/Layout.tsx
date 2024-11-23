import React from 'react';
import Header from 'src/layout/Header/Header.tsx';
import Footer from 'src/layout/Footer/Footer.tsx';
import Banner from 'src/layout/Banner/Banner.tsx';
import Content from 'src/layout/Content/Content.tsx';

const Layout = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Content />
      <Footer />
    </div>
  );
};

export default Layout;
