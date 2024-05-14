import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Queries from "../pages/Queries";
import Recommendation from "../pages/Recommendation";
import MyQueries from "../pages/MyQueries";
import MyRecommend from "../pages/MyRecommend";
import Register from "../pages/Register";
import PrivateRoute from "../provider/PrivateRoute";
import AddQueries from "../pages/AddQueries";
import QueryDetails from "../pages/QueryDetails";
import UpdateQuery from "../pages/UpdateQuery";
import Error from "../pages/Error";


const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      errorElement:<Error></Error>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch(`${import.meta.env.VITE_API_URL}/products`)
    
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/que',
            element:<Queries></Queries>,
            loader:()=>fetch(`${import.meta.env.VITE_API_URL}/products`)
        },
        {
            path:'/forRecommend',
            element:<PrivateRoute><Recommendation></Recommendation></PrivateRoute>
        },
        {
            path:'/myQue',
            element:<PrivateRoute><MyQueries></MyQueries></PrivateRoute>
        },
        {
            path:'/myRecommend',
            element:<PrivateRoute><MyRecommend></MyRecommend></PrivateRoute>

        },
        {
            path:'/addQue',
            element:<PrivateRoute><AddQueries></AddQueries></PrivateRoute>
        },
        {
            path:'/queDetails/:id',
            element:<PrivateRoute><QueryDetails></QueryDetails></PrivateRoute>,
            loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/product/${params.id}`,{credentials:"include"})
        },
        {
            path:'/updateQue/:id',
            element:<PrivateRoute><UpdateQuery></UpdateQuery></PrivateRoute>,
            loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/product/${params.id}`,{credentials:'include'})
        }

      ]
    },
    

  ]);

export default router;