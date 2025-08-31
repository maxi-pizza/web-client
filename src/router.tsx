import {createBrowserRouter, redirect} from 'react-router-dom';
import {
  deliveryAndPaymentRoute,
  favoriteRoute,
  checkoutRoute,
  thankYouRoute,
  categoryRoute,
  rootRoute,
} from 'src/routes.ts';
import Error404 from 'src/domains/404Error/404Error.tsx';

import {queryClient} from 'src/queryClient.ts';
import {productsQuery} from 'src/domains/Home/products.query.ts';

const layoutLoader = async () => {
  const data = (await queryClient.ensureQueryData(productsQuery)) as {
    id: string;
    name: string;
    slug: string;
    products: {
      id: string;
    }[];
  }[];
  const categories = data.filter(category => !!category.products.length);
  return redirect(categoryRoute.replace(':slug', categories[0].slug));
};

export const router = createBrowserRouter([
  {
    path: rootRoute,
    lazy: () => import('src/layout/Layout/Layout.tsx'),
    children: [
      {
        index: true,
        loader: layoutLoader,
      },
      {
        path: deliveryAndPaymentRoute,
        lazy: () =>
          import('src/domains/DeliveryAndPayment/view/DeliveryAndPayment.tsx'),
      },
      {
        path: categoryRoute,
        lazy: () => import('src/domains/Home/view/Home.tsx'),
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
