import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/css/main.css';
import "./styles/site.scss"
import AppProviders from "./services/providers/AppProviders";

ReactDOM.render(
    <AppProviders>
        <App/>
    </AppProviders>,
    document.getElementById("root")
);