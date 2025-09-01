import {ThemeProvider} from '@emotion/react';
import {theme} from 'src/theme.ts';
import {RouterProvider} from 'react-router-dom';
import {router} from 'src/router.tsx';
import {QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import {queryClient} from 'src/queryClient.ts';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import {ToastContainer} from 'react-toastify';
import {GlobalStyles} from 'src/components/GlobalStyles.tsx';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <GlobalStyles />
        <RouterProvider router={router} />
        <ReactQueryDevtools buttonPosition={'bottom-left'} position="bottom" />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
