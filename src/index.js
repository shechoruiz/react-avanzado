import React from 'react'
import ReactDOM from "react-dom";
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'
import {App} from './App'
import Context from './Context'

const client = new ApolloClient({
  uri: "https://petgram-server-sergio.vercel.app/graphql"
});

ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById("app")
);
