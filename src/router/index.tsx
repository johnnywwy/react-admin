import { Navigate, createBrowserRouter } from "react-router-dom";
import Layout from "@/layout";
import Login from "../views/login";
import Welcome from "../views/welcome";
import NotFound from "@/views/notFound";
import User from "@/views/user";
import Dept from "@/views/dept";
import Menu from "@/views/menu";
import Role from "@/views/role";
import Dashboard from "@/views/dashboard";

const router = [
  {
    element: <Layout />,
    children: [
      {
        path: "/welcome",
        element: <Welcome />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/userList",
        element: <User />,
      },
      {
        path: "/deptList",
        element: <Dept />,
      },
      {
        path: "/menuList",
        element: <Menu />,
      },
      {
        path: "/roleList",
        element: <Role />,
      },
    ],
  },
  {
    path: "/",
    element: <Navigate to={"/welcome"} />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <Navigate to="/404" />,
  },
  {
    path: "/404",
    element: <NotFound />,
  },
];

export default createBrowserRouter(router);
