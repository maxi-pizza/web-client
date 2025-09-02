import {createBrowserRouter} from 'react-router-dom';
import {
  deliveryAndPaymentRoute,
  favoriteRoute,
  checkoutRoute,
  thankYouRoute,
  categoryRoute,
  rootRoute,
} from 'src/routes.ts';
import Error404 from 'src/pages/404Error/404Error.tsx';

export const router = createBrowserRouter([
  {
    path: rootRoute,
    lazy: () => import('src/components/Layout/Layout.tsx'),
    children: [
      {
        index: true,
        lazy: () => import('src/pages/Home/Home.tsx'),
      },
      {
        path: deliveryAndPaymentRoute,
        lazy: () =>
          import('src/pages/DeliveryAndPayment/DeliveryAndPayment.tsx'),
      },
      {
        path: categoryRoute,
        lazy: () => import('src/pages/Home/Home.tsx'),
      },
      {
        path: favoriteRoute,
        lazy: () => import('src/pages/Favorite/Favorite.tsx'),
      },
      {
        path: thankYouRoute,
        lazy: () => import('src/pages/ThankYou/ThankYou.tsx'),
      },
      {
        path: checkoutRoute,
        lazy: () => import('src/pages/Order/Order.tsx'),
      },
      {
        path: '*',
        element: <Error404 />,
      },
    ],
  },
]);
