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


const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>
    
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
            element:<Queries></Queries>
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

      ]
    },
    

  ]);

export default router;