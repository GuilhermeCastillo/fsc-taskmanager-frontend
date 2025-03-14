import React from "react";
import ReactDOM from "react-dom";
import { positions, transitions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import "./index.scss";

import App from "./App";

// optional configuration
const options = {
    // you can also just use 'bottom center'
    position: positions.BOTTOM_CENTER,
    timeout: 2500,
    offset: "30px",
    // you can also just use 'scale'
    transition: transitions.SCALE,
};

ReactDOM.render(
    <React.StrictMode>
        <AlertProvider template={AlertTemplate} {...options}>
            <App />
        </AlertProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
