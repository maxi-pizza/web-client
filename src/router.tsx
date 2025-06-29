import {createBrowserRouter, redirect} from 'react-router-dom';
import {
  deliveryAndPaymentRoute,
  favoriteRoute,
  checkoutRoute,
  thankYouRoute, categoryRoute, rootRoute,
} from 'src/routes.ts';
import Error from 'src/domains/Error/view/Error.tsx';
import {lazy} from 'react';
import {queryClient} from 'src/queryClient.ts';
import {productsQuery} from 'src/domains/Home/products.query.ts';

const Layout = lazy(() => import('src/layout/Layout/Layout.tsx'));
const ThankYou = lazy(() => import('src/domains/ThankYou/view/ThankYou.tsx'));
const Order = lazy(() => import('src/domains/Order/view/Order.tsx'));
const DeliveryAndPayment = lazy(
  () => import('src/domains/DeliveryAndPayment/view/DeliveryAndPayment.tsx'),
);
const Home = lazy(() => import('src/domains/Home/view/Home.tsx'));
const Favorite = lazy(() => import('src/domains/Favorite/view/Favorite.tsx'));

export const router = createBrowserRouter([
  {
    path: rootRoute,
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
       index: true,
        loader: async () => {
          const data = await queryClient.ensureQueryData(productsQuery) as {
            id: string;
            name: string;
            slug: string;
            products: {
              id: string;
            }[];
          }[];
          const categories = data.filter(category => !!category.products.length)
          return redirect(
            categoryRoute.replace(":slug", categories[0].slug)
          )
        },
      },
      {
        path: deliveryAndPaymentRoute,
        element: <DeliveryAndPayment />,
      },
      {

        path: categoryRoute,
        element: <Home />,
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
        path: checkoutRoute,
        element: <Order />,
      },
      {
        path: '*',
        element: <Error />,
      },
    ],
  },
]);
