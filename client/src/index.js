import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "tailwindcss/tailwind.css"
import "./styles/main.css"
import "./helper/webfont";
import AppProviders from "./services/providers/AppProviders";

ReactDOM.render(
    <AppProviders>
        <App/>
    </AppProviders>,
    document.getElementById("root")
);
