import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import './index.css';
import { App } from './App';

const httpLink = createHttpLink({ uri: 'http://localhost:4000' });
const client = new ApolloClient({ link: httpLink, cache: new InMemoryCache() });

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
