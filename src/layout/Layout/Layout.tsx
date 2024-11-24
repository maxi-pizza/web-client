import React from 'react';
import Header from 'src/layout/Header/Header.tsx';
import Footer from 'src/layout/Footer/Footer.tsx';
import Banner from 'src/layout/Banner/Banner.tsx';
import Content from 'src/layout/Content/Content.tsx';
import OrderPage from 'src/layout/OrderPage/OrderPage.tsx';
import ThankYou from 'src/domains/ThankYou/pages/ThankYou.tsx';
import DeliveryAndPaymentPage from 'src/domains/DeliveryAndPayment/pages/DeliveryAndPaymentPage/DeliveryAndPaymentPage.tsx';
import {css} from '@emotion/react';
import Favorite from 'src/domains/Favorite/pages/Favorite.tsx';

const Layout = () => {
  return (
    <div>
      <Header />
      <div css={main}>
        {/*<ThankYou />*/}
        {/*<OrderPage />*/}
        {/*<Banner />*/}
        {/*<Content />*/}
        {/*<DeliveryAndPaymentPage />*/}
        <Favorite />
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
