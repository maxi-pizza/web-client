import {createBrowserRouter} from 'react-router-dom';
import Layout from 'src/layout/Layout/Layout.tsx';
import Content from 'src/layout/Content/Content.tsx';
import Favorite from 'src/domains/Favorite/view/Favorite.tsx';
import DeliveryAndPayment from 'src/domains/DeliveryAndPayment/view/DeliveryAndPayment.tsx';
import ThankYou from 'src/domains/ThankYou/view/ThankYou.tsx';
import Order from 'src/domains/Order/view/Order.tsx';
import {
  deliveryAndPaymentRoute,
  favoriteRoute,
  homeRoute,
  orderRoute,
  thankYouRoute,
} from 'src/routes.ts';
import Error from 'src/domains/Error/view/Error.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: deliveryAndPaymentRoute,
        element: <DeliveryAndPayment />,
      },
      {
        path: homeRoute,
        element: <Content />,
      },
      {
        path: favoriteRoute,
        element: <Favorite />,
      },
      {
        path: thankYouRoute,
        element: <ThankYou />,
      },
      {
        path: orderRoute,
        element: <Order />,
      },
      {
        path: '*',
        element: <Error />,
      },
    ],
  },
]);
