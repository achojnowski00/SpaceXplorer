import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import { API_URL } from '../CONSTANTS';

export const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
});

export const AppApolloProvider: React.FC<IProps> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

type IProps = {
  children: React.ReactNode;
};
