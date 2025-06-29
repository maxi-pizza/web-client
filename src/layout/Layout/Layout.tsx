import React from 'react';
import Header from 'src/layout/Header/Header.tsx';
import Footer from 'src/layout/Footer/Footer.tsx';
import {css} from '@emotion/react';
import RestaurantCloseModal from 'src/components/modals/RestaurantClosedModal/RestaurantCloseModal.tsx';
import {
  Navigate,
  Outlet,
  ScrollRestoration,
} from 'react-router-dom';
import CartModal from 'src/components/modals/CartModal/CartModal.tsx';
import ContactInformationModal from 'src/components/modals/ContactInformationModal/ContactInformationModal.tsx';
import SearchModal from 'src/components/modals/SearchModal/SearchModal.tsx';


const Layout = () => {

  return (
    <div>
      <ScrollRestoration
        getKey={location => {
          if (location.pathname.startsWith('/category')) {
            return 'category';
          }
          return location.key;
        }}
      />

      <div css={stickyHeader}>
        <Header />
      </div>
      <div css={main}>
        <RestaurantCloseModal />
        <CartModal />
        <ContactInformationModal />
        <SearchModal />
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

const stickyHeader = theme => css`
  height: 100%;
  position: sticky;
  top: 0;
  z-index: 5;
  @media (min-width: ${theme.media.laptop}) {
    position: unset;
  }
`;
export default Layout;
