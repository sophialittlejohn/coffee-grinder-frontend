import { ApolloProvider } from "@apollo/client";
import { AppProps } from "next/app";
import { COLORS } from "../materials/colors";
import { ContextUser } from "../lib/userContext";
import React from "react";
import { createGlobalStyle } from "styled-components";
import { useApollo } from "../lib/apolloClient";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

  body {
    font-family: "Roboto", sans-serif;
    box-sizing: border-box;
    background-color: ${COLORS.lightYellow};
  }
  button, 
  a {
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: black;
  }
  input[type="submit"] {
    cursor: pointer;
  }
  input {
    outline: 0;
  }

  /* A reset of styles, including removing the default dropdown arrow */
  select {
    appearance: none;
    /* Additional resets for further consistency */
    background-color: transparent;
    border: none;
    padding: 0 1em 0 0;
    margin: 0;
    width: 100%;
    font-family: inherit;
    font-size: inherit;
    cursor: inherit;
    line-height: inherit;
  }

  /* Remove arrows/spinners from number inputs on Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /*  Remove arrows/spinners from number inputs on Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
`;

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider client={apolloClient}>
      <GlobalStyle />
      <ContextUser>
        <Component {...pageProps} />
      </ContextUser>
    </ApolloProvider>
  );
};

export default App;
