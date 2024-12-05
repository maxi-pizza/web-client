import React from 'react';
import Header from 'src/layout/Header/Header.tsx';
import Footer from 'src/layout/Footer/Footer.tsx';
import {css} from '@emotion/react';
import RestaurantCloseModal from 'src/components/modals/RestaurantClosedModal/RestaurantCloseModal.tsx';
import {Outlet} from 'react-router-dom';
import CartModal from 'src/components/modals/CartModal/CartModal.tsx';
import ContactInformationModal from 'src/components/modals/ContactInformationModal/ContactInformationModal.tsx';

const Layout = () => {
  return (
    <div>
      <Header />
      <div css={main}>
        <RestaurantCloseModal />
        <CartModal />
        <ContactInformationModal />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

const main = css`
  margin-top: -92px;
  margin-bottom: -92px;
`;

export default Layout;
