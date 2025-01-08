import {css, Global, ThemeProvider, useTheme} from '@emotion/react';
import {theme} from 'src/styles/theme.ts';
import {RouterProvider, useParams, useSearchParams} from 'react-router-dom';
import {router} from 'src/router.tsx';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import {useWindowVirtualizer} from '@tanstack/react-virtual';
import React, {useEffect, useRef, useState} from 'react';
import {productsQuery} from 'src/domains/Home/products.query.ts';
import {cartQuery} from 'src/domains/Cart/cart.query.ts';
import {wishlistQuery} from 'src/domains/Favorite/wishlist.query.ts';
import categoryStore from 'src/stores/categoryStore.ts';
import {fuzzySearch} from 'src/utils/fuzzySearch.ts';
import {Category, ProductsByCategory} from 'src/domains/Home/view/Home.tsx';
import Header from 'src/layout/Header/Header.tsx';

function App() {
  const queryClient = new QueryClient();
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Global styles={globalStyles} />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

const globalStyles = css`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
    font-size: 100%;
  }

  img {
    max-width: 100%;
    display: block;
  }

  ol,
  ul {
    list-style: none;
  }

  table {
    border-collapse: collapse;
  }

  a {
    text-decoration: unset;
  }
`;

export default App;
