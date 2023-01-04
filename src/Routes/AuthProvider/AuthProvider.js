import Blog from "../../Pages/Blog/Blog";
import Destination from "../../Pages/Destination/Destination";
import Login from "../../Pages/Login/Login";
import News from "../../Pages/News/News";
import Register from "../../Pages/Register/Register";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import Profile from "../../Pages/Shared/Others/Profile/Profile";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../layout/Main");
const { default: Home } = require("../../Pages/Home/Home");

export const routes = createBrowserRouter([
    {
        path:'/',
        errorElement:<ErrorPage></ErrorPage>,
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/home',
                element:<Home/>
            },
            {
                path:'/news',
                element:<News/>
            },
            {
                path:'/distination',
                element:<Destination/>
            },
            {
                path:'/blog',
                element:<Blog/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            },
            {
                path:'/profile',
                element:<Profile/>
            }
            
        ]
    }
])