import {css, Global, ThemeProvider} from '@emotion/react';
import {theme} from 'src/styles/theme.ts';
import {RouterProvider, ScrollRestoration} from 'react-router-dom';
import {router} from 'src/router.tsx';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';

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
