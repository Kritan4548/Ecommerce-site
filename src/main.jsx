import React from "react";
import  ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "./assests/css/main.css"
import "bootstrap";
import LoginPage from "./pages/home/auth/login";
import RegisterPage from "./pages/home/auth/register/index";
import ForgetPassword from "./pages/home/auth/forget-password";
import Routing from "../src/router/routing.config";

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<React.StrictMode>
<Routing />
</React.StrictMode>)