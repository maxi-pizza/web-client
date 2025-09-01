import {css, Global} from '@emotion/react';
import React from 'react';

export const GlobalStyles = () => {
  return <Global styles={globalStyles} />;
};

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
