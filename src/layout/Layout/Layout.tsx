import React from 'react';
import Header from 'src/layout/Header/Header.tsx';
import Footer from 'src/layout/Footer/Footer.tsx';
import Banner from 'src/layout/Banner/Banner.tsx';
import Content from 'src/layout/Content/Content.tsx';
import Order from 'src/domains/Order/view/Order.tsx';
import ThankYou from 'src/domains/ThankYou/view/ThankYou.tsx';
import DeliveryAndPayment from 'src/domains/DeliveryAndPayment/view/DeliveryAndPayment.tsx';
import {css} from '@emotion/react';
import Favorite from 'src/domains/Favorite/view/Favorite.tsx';
import Error from 'src/domains/Error/view/Error.tsx';
import Modal from 'src/components/Modal/Modal.tsx';
import RestaurantCloseModal from 'src/components/modals/RestaurantClosedModal/RestaurantCloseModal.tsx';
import {Outlet} from 'react-router-dom';
import CartModal from 'src/components/modals/CartModal/CartModal.tsx';

const Layout = () => {
  return (
    <div>
      <Header />
      <div css={main}>
        <RestaurantCloseModal />
        <CartModal />
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
