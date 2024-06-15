import SiteRoot from "../Pages/Site/SiteRoot";
import Home from "../Pages/Site/Home/Home";
import Newswire from "../Pages/Site/Newswire/Newswire";
import Shop from "../Pages/Site/Shop/Shop";

const ROUTES = [
  {
    path: "/",
    element: <SiteRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "newswire",
        element: <Newswire />,
      },
      {
        path: "shop",
        element: <Shop/>,
      }
    ]
  },
];
export default ROUTES