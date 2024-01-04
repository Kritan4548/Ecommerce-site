import { BrowserRouter,Routes,Route, Outlet } from "react-router-dom";
import HomePage from "../pages/home/landing/home.page"
import LoginPage from "../pages/home/auth/login";
import RegisterPage from "../pages/home/auth/register";
import { Error404 } from "../pages/common/error.page";
import ForgetPassword from "../pages/home/auth/forget-password";
import HomeHeader from "../component/home/header/home-header.component";
import CategoryDetailPage from "../pages/home/category/category.detail";
import CategoryDetailLayout from "../pages/home/category/category-detail.layout.page";
import CMSLayout from "../pages/layouts/cms/cms.layout";
import HomeLayout from "../pages/layouts/home/home.layout";
import AdminDashBoard from "../pages/cms/dashboard/dashboard.page";
import BannerLayout from "../pages/cms/banner/banner.layout";
import BannerList from "../pages/cms/banner/banner-list.page";
import PermissionCheck from "../pages/common/checkPermission.page";
const Routing =()=>{
return(<>
    <BrowserRouter >
    
        <Routes>
            <Route path="/" element={<HomeLayout />}>
            <Route index element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="forget-password" element={<ForgetPassword />} />


            <Route path="/category/:slug" element={<CategoryDetailLayout />} >
                <Route index element={<CategoryDetailPage />}></Route>
                <Route path="childCat" element={<CategoryDetailPage />}></Route>
            </Route>
            <Route path="*" element={<Error404 />} />
            </Route>

            <Route path="/admin" element={<PermissionCheck accessBy={"admin"} Component={<CMSLayout />}/>}>
                <Route index element={<AdminDashBoard />}></Route>
                <Route path="banner" element={<BannerLayout />}>
                <Route index element={<BannerList />}></Route>
                
                <Route path="create" element={<>Create Component</>}></Route>
                 </Route> 
                 <Route path="*" element={<Error404 />} />
            </Route>

            
            
           
        </Routes>
    </BrowserRouter>
</>
)
}
export default Routing;