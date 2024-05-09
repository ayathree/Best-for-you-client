import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Queries from "../pages/Queries";
import Recommendation from "../pages/Recommendation";
import MyQueries from "../pages/MyQueries";
import MyRecommend from "../pages/MyRecommend";
import Register from "../pages/Register";


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
            element:<Recommendation></Recommendation>
        },
        {
            path:'/myQue',
            element:<MyQueries></MyQueries>
        },
        {
            path:'/myRecommend',
            element:<MyRecommend></MyRecommend>
        },

      ]
    },
    

  ]);

export default router;