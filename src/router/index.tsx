import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "../views/login";
import { Welcome } from "../views/welcome";
import NotFound from "@/views/notFound";

import Layout from "@/layout";
import { Home } from "@/views/home";

const router = [
  {
    element: <Layout />,
    children: [
      {
        path: "/welcome",
        element: <Welcome />,
      },
      {
        path: "/home",
        element: <Home />,
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
