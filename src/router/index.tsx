import {
  Navigate,
  createHashRouter,
  createBrowserRouter,
} from "react-router-dom";
import Login from "../views/login";
import Welcome from "../views/welcome";
import NotFound from "@/views/notFound";

const router = [
  {
    path: "/",
    element: <Welcome />,
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
