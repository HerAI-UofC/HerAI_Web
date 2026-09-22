import React from "react";
import ReactDOM from "react-dom/client";
import { Amplify } from "aws-amplify";
import amplifyconfig from "./amplifyconfiguration.json";
import "./index.css";
import App from "./App";

Amplify.configure(amplifyconfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);