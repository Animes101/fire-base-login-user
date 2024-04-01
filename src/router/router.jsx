import { createBrowserRouter } from "react-router-dom";
import Root from "../components/layout/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

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
        }
      ]
    },
  ]);