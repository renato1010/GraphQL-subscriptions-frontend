import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider, ApolloClient, HttpLink, split, InMemoryCache } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws';
import './index.css';
import { App } from './App';

const wsLink = new WebSocketLink({
  uri: 'ws://renato-pickfu.herokuapp.com/',
  options: {
    reconnect: true,
  },
});
const httpLink = new HttpLink({ uri: 'https://renato-pickfu.herokuapp.com/' });
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
  },
  wsLink,
  httpLink
);
const client = new ApolloClient({ link: splitLink, cache: new InMemoryCache() });

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
