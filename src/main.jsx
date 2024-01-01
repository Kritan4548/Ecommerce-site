import React from "react";
import  ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "./assests/css/main.css"
import LoginPage from "./pages/home/auth/login";
import RegisterPage from "./pages/home/auth/register/index";

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<React.StrictMode>
  <RegisterPage />
</React.StrictMode>)