import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {AuthProvider} from "../resources/js/services/contexts/AuthenticationContext";
import '../resources/styles/css/main.css';
import "../resources/styles/site.scss"

const client = new ApolloClient({
    uri: 'http://localhost:8000/graphql',
    cache: new InMemoryCache()
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <AuthProvider>
            <App/>
        </AuthProvider>
    </ApolloProvider>, 
    document.getElementById("root")
);