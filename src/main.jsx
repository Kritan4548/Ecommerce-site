import React from "react";
import  ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "./assests/css/main.css"
import "bootstrap";

import Routing from "../src/router/routing.config";
import  ThemeProvider  from "./config/theme.context";

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<React.StrictMode>
<ThemeProvider>
    <Routing />
</ThemeProvider>


</React.StrictMode>)