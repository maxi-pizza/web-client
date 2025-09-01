import {createBrowserRouter} from 'react-router-dom';
import {
  deliveryAndPaymentRoute,
  favoriteRoute,
  checkoutRoute,
  thankYouRoute,
  categoryRoute,
  rootRoute,
} from 'src/routes.ts';
import Error404 from 'src/domains/404Error/404Error.tsx';

export const router = createBrowserRouter([
  {
    path: rootRoute,
    lazy: () => import('src/layout/Layout/Layout.tsx'),
    children: [
      {
        index: true,
        lazy: () => import('src/domains/Home/view/Home2.tsx'),
      },
      {
        path: deliveryAndPaymentRoute,
        lazy: () =>
          import('src/domains/DeliveryAndPayment/view/DeliveryAndPayment.tsx'),
      },
      {
        path: categoryRoute,
        lazy: () => import('src/domains/Home/view/Home2.tsx'),
      },
      {
        path: favoriteRoute,
        lazy: () => import('src/domains/Favorite/view/Favorite.tsx'),
      },
      {
        path: thankYouRoute,
        lazy: () => import('src/domains/ThankYou/view/ThankYou.tsx'),
      },
      {
        path: checkoutRoute,
        lazy: () => import('src/domains/Order/view/Order.tsx'),
      },
      {
        path: '*',
        element: <Error404 />,
      },
    ],
  },
]);
