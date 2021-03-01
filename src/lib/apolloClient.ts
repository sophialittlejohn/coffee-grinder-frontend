import { useMemo } from "react";
import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { parseCookies } from "nookies";
import { NextPageContext } from "next";

let apolloClient: ApolloClient<NormalizedCacheObject>;

const authLinkWithNextContext = (context: NextPageContext | null) =>
  new ApolloLink((operation, forward) => {
    operation.setContext(({ headers, ...rest }: Request) => {
      const { token } = parseCookies(context);
      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : "",
        },
      };
    });
    return forward(operation);
  });

const httpLinkProd = new HttpLink({
  uri: "https://coffee-grindr.herokuapp.com/", // Server URL (must be absolute)
  credentials: "same-origin", // Additional fetch() options like `credentials` or `headers`
});

const httpLinkDev = new HttpLink({
  uri: 'http://localhost:4000/',
  credentials: "same-origin",
});

function createApolloClient(context: NextPageContext | null) {
  const authLink = authLinkWithNextContext(context);
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: authLink.split(
      () => process.env.NODE_ENV === "production",
      httpLinkProd,
      httpLinkDev
    ),
    cache: new InMemoryCache(),
  });
}

export function initializeApollo(
  context: NextPageContext | null = null,
  initialState: null | {} = null
) {
  const { token } = parseCookies(context);
  if (!token && context?.res) {
    context.res.writeHead(301, {
      Location: "/login",
    });
    context.res.end();
  }
  const _apolloClient = apolloClient ?? createApolloClient(context);

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();
    // Restore the cache using the data passed from getStaticProps/getServerSideProps
    // combined with the existing cached data
    _apolloClient.cache.restore({ ...existingCache, ...(initialState as {}) });
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(initialState: {}) {
  const store = useMemo(() => initializeApollo(null, initialState), [
    initialState,
  ]);
  return store;
}
