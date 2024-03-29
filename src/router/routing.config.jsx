import { BrowserRouter,Routes,Route, Outlet } from "react-router-dom";
import HomePage from "../pages/home/landing/home.page"

import{LoginPage,RegisterPage,ForgetPassword,SetPasswordPage} from "../pages/home/auth"

import { Error404 } from "../pages/common/error.page";

import CategoryDetailPage from "../pages/home/category/category.detail";
import CategoryDetailLayout from "../pages/home/category/category-detail.layout.page";
import * as Layout from "../pages/layouts";
// import CMSLayout from "../pages/layouts/cms/cms.layout";
// import HomeLayout from "../pages/layouts/home/home.layout";
import AdminDashBoard from "../pages/cms/dashboard/dashboard.page";
import { BannerCreate,BannerLayout,BannerList,BannerEdit } from "../pages/cms/banner";
import { BrandCreate,BrandLayout,BrandList,BrandEdit } from "../pages/cms/brand";
import { CategoryCreate,CategoryLayout,CategoryList,CategoryEdit } from "../pages/cms/category";


import PermissionCheck from "../pages/common/checkPermission.page";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css"

const Routing =()=>{
return(<>
    <ToastContainer

     />
    <BrowserRouter >
    
        <Routes>
            <Route path="/" element={<Layout.HomeLayout />}>
            <Route index element={<HomePage />} />
            
            <Route path="register" element={<RegisterPage />} />
            <Route path="activate/:token" element={<SetPasswordPage />} />
            <Route path="forget-password" element={<ForgetPassword />} />

            <Route path="login" element={<LoginPage />} />


            <Route path="/category/:slug" element={<CategoryDetailLayout />} >
                <Route index element={<CategoryDetailPage />}></Route>
                <Route path="childCat" element={<CategoryDetailPage />}></Route>
            </Route>
            <Route path="*" element={<Error404 />} />
            </Route>

            <Route path="/admin" element={<PermissionCheck accessBy={"admin"} Component={<Layout.CMSLayout />}/>}>
                <Route index element={<AdminDashBoard />}></Route>
                
                <Route path="banner" element={<BannerLayout />}>
                <Route index element={<BannerList />}></Route>
                <Route path="create" element={<BannerCreate />}></Route>
                <Route path=":id" element={<BannerEdit />}></Route>
                 </Route> 

                 <Route path="brand" element={<BrandLayout />}>
                <Route index element={<BrandList />}></Route>
                <Route path="create" element={<BrandCreate />}></Route>
                <Route path=":id" element={<BrandEdit />}></Route>
                 </Route> 

                 <Route path="category" element={<CategoryLayout />}>
                <Route index element={<CategoryList />}></Route>
                <Route path="create" element={<CategoryCreate />}></Route>
                <Route path=":id" element={<CategoryEdit />}></Route>
                 </Route> 
                
                 <Route path="*" element={<Error404 />} />
            </Route>

            
            
           
        </Routes>
    </BrowserRouter>
</>
)
}
export default Routing;