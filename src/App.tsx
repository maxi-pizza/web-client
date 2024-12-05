import {css, Global, ThemeProvider} from '@emotion/react';
import {theme} from 'src/styles/theme.ts';
import {RouterProvider} from 'react-router-dom';
import {router} from 'src/router.tsx';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <RouterProvider router={router} />
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
    font-family: Arial, sans-serif;
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
