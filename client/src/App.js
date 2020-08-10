import React from 'react';
import {withRouter} from 'react-router-dom';
import { ApolloProvider } from "react-apollo";

import Layout from './hoc/Layout/Layout';

import route from './route';
import client from './apollo/config';

import './App.css';

function App() {
  return (
      <div>
          <ApolloProvider client={client}>
              <Layout>
                  {route}
              </Layout>
          </ApolloProvider>
      </div>
  );
}

export default withRouter(App);
