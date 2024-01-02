import { BrowserRouter,Routes,Route } from "react-router-dom";
import HomePage from "../pages/home/landing/home.page"
import LoginPage from "../pages/home/auth/login";
import RegisterPage from "../pages/home/auth/register";
import { Error404 } from "../pages/common/error.page";
import ForgetPassword from "../pages/home/auth/forget-password";
import HomeHeader from "../component/home/header/home-header.component";
const Routing =()=>{
return(<>
    <BrowserRouter >
    <HomeHeader />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forget-password" element={<ForgetPassword />} />

            
            
            <Route path="*" element={<Error404 />} />
        </Routes>
    </BrowserRouter>
</>
)
}
export default Routing;