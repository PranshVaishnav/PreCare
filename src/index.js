import React from "react";
import ReactDOM from "react-dom/client";
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(<Auth0Provider
    domain="dev-ptyjbgizko1ut1f0.us.auth0.com"
    clientId="W9RseG7vmQ3GGT4ctRjI7gtPqDu0Juhh"
    redirectUri={window.location.origin}>
    <App />
</Auth0Provider>);
