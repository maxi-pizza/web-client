import React, {useEffect, useRef} from 'react';
import Header from 'src/components/Header/Header.tsx';
import Footer from 'src/components/Footer/Footer.tsx';
import {css} from '@emotion/react';
import RestaurantCloseModal from 'src/components/modals/RestaurantClosedModal/RestaurantCloseModal.tsx';
import {
  Location,
  Outlet,
  RouterState,
  RouterSubscriber,
  ScrollRestoration,
} from 'react-router-dom';
import CartModal from 'src/components/modals/CartModal/CartModal.tsx';
import ContactInformationModal from 'src/components/modals/ContactInformationModal/ContactInformationModal.tsx';
import SearchModal from 'src/components/modals/SearchModal/SearchModal.tsx';
import {categoryRoute, rootRoute} from 'src/routes.ts';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {CART_QUERY_KEY, cartQuery, setItem} from 'src/queries/cart.query.ts';
import {productsQuery} from 'src/queries/products.query.ts';
import {router} from 'src/router.tsx';
import modalsStore from 'src/stores/modalsStore.ts';
import Error505 from 'src/pages/505Error/505Error.tsx';
import {ModalEnum} from 'src/contants.ts';
import {Category, Product} from 'src/types.ts';
import {reaction} from 'mobx';

const Layout = () => {
  const {data: cart} = useQuery(cartQuery);
  const {data: productsData} = useQuery(productsQuery);
  const restaurantClosedLastTimeShown = useRef<number | null>(null);
  const queryClient = useQueryClient();
  const {mutate: removeFromCart} = useMutation({
    mutationKey: [CART_QUERY_KEY],
    mutationFn: ({id}: {id: number}) => setItem(id, 0, 0),
    onSuccess: () =>
      queryClient.invalidateQueries({queryKey: [CART_QUERY_KEY]}),
  });
  useEffect(() => {
    return reaction(
      () => modalsStore.modals,
      modals => {
        if (modals.includes(ModalEnum.RestaurantClosed)) {
          restaurantClosedLastTimeShown.current = Date.now();
        }
      },
    );
  }, []);
  useEffect(() => {
    if (!productsData) {
      return;
    }
    const staleItems = Object.keys(cart || {}).filter(id => {
      const item = cart[id];
      const products = (productsData || []).flatMap(
        (category: Category) => category.products,
      );
      const product = products.find((product: Product) => +id === product.id);

      if (!product) {
        // product doesn't exist in catalog anymore
        return true;
      }

      if (+product.price !== +item.price) {
        // product  price doesn't match product price in cart
        return true;
      }

      return false;
    });

    staleItems.forEach(id => {
      removeFromCart({id: +id});
    });
  }, [productsData, cart, removeFromCart]);

  useEffect(() => {
    const routerSubscriber: RouterSubscriber = (state: RouterState) => {
      if (state.navigation.location) {
        return;
      }

      const closed = isClosed({
        start: [10, 0],
        end: [22, 0],
      });

      const showCloseWarning =
        restaurantClosedLastTimeShown.current == null ||
        Date.now() - restaurantClosedLastTimeShown.current >
          SHOW_RESTAURANT_CLOSE_WARNING_INTERVAL;

      if (closed && showCloseWarning) {
        modalsStore.open(ModalEnum.RestaurantClosed);
      }
    };
    // run immediately
    routerSubscriber(router.state, {
      deletedFetchers: [],
      flushSync: false,
    });

    return router.subscribe(routerSubscriber);
  }, [restaurantClosedLastTimeShown]);

  return (
    <div>
      <ScrollRestoration getKey={getKey} />

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

const getKey = (location: Location<any>) => {
  if (
    location.pathname.startsWith(categoryRoute.replace(':slug', '')) ||
    location.pathname === rootRoute
  ) {
    return 'category';
  }
  return location.key;
};

const isClosed = ({start, end}) => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  return (
    hours < start[0] ||
    (start[0] === hours && minutes < start[1]) ||
    hours > end[0] ||
    (end[0] === hours && minutes > end[1])
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

const SHOW_RESTAURANT_CLOSE_WARNING_INTERVAL = 30_000;

export const Component = Layout;
export const ErrorBoundary = Error505;
