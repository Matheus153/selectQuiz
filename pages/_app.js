
import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
    background: rgb(26,32,44);
background: radial-gradient(circle, rgba(26,32,44,1) 0%, rgba(16,19,24,1) 65%, rgba(4,17,32,1) 100%);
  }

  h1 {
    margin: 0;
    font-size: 2em;
    line-height: 1.15;
    font-weight: 700;
    margin-bottom: 20px;
    opacity: .95;
  }

  p {
    margin: 0;
    line-height: 1.5;
    opacity: .9
  }


  a {
    color: inherit;
    text-decoration: none;
  }

  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const { theme } = db;

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
        <Head>
          <title>Escolha seu Quiz</title>
          <link rel="icon" href="favicon.ico" />
        </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

