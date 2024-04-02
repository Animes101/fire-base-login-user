import { createBrowserRouter } from "react-router-dom";
import Root from "../components/layout/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Order from "../pages/Order";
import PrivetRoute from "../components/layout/PrivetRoute";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children:[
        {
            path:'/',
            element:<Home />
        },
        {
          path:'/login',
          element:<Login />
        },
        {
          path:'/signUp',
          element:<SignUp />
        },
        {
          path:'/order',
          element:<PrivetRoute><Order /></PrivetRoute>
        }
      ]
    },
  ]);