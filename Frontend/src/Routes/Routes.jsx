import { Children } from "react";
import SiteRoot from "../Pages/Site/SiteRoot";
import Home from "../Pages/Site/Home/Home";

const ROUTES = [
  {
    path: "/",
    element: <SiteRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      }
    ]
  },
];
export default ROUTES