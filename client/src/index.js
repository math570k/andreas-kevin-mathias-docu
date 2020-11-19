import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './resources/styles/css/main.css';
import "./resources/styles/site.scss"
import AppProviders from "./resources/js/services/providers/AppProviders";

ReactDOM.render(
    <AppProviders>
        <App/>
    </AppProviders>,
    document.getElementById("root")
);