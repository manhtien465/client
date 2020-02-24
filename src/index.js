import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store1 from './store';
//Graphql
import {ApolloProvider} from "react-apollo";
import ApolloClient from "apollo-boost";
import {gql} from 'apollo-boost'
import{graphql} from 'react-apollo'
const client =new ApolloClient({
  uri:"/graphql"
})
ReactDOM.render(<Provider store={store1}>
	<ApolloProvider client={client}>
	<App/>
	</ApolloProvider>
	</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
