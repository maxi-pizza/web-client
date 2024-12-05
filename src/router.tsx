import {createBrowserRouter} from 'react-router-dom';
import {
  deliveryAndPaymentRoute,
  favoriteRoute,
  homeRoute,
  orderRoute,
  thankYouRoute,
} from 'src/routes.ts';
import Error from 'src/domains/Error/view/Error.tsx';
import {lazy} from 'react';

const Layout = lazy(() => import('src/layout/Layout/Layout.tsx'));
const ThankYou = lazy(() => import('src/domains/ThankYou/view/ThankYou.tsx'));
const Order = lazy(() => import('src/domains/Order/view/Order.tsx'));
const DeliveryAndPayment = lazy(
  () => import('src/domains/DeliveryAndPayment/view/DeliveryAndPayment.tsx'),
);
const Content = lazy(() => import('src/layout/Content/Content.tsx'));
const Favorite = lazy(() => import('src/domains/Favorite/view/Favorite.tsx'));

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
