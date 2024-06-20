
import SiteRoot from "../Pages/Site/SiteRoot";
import Home from "../Pages/Site/Home/Home";
import Newswire from "../Pages/Site/Newswire/Newswire";
import Shop from "../Pages/Site/Shop/Shop";
import AdminRoot from "../Pages/Admin/AdminRoot";
import AddProducts from "../Pages/Admin/AddProducts/AddProducts";
import AddGames from "../Pages/Admin/AddGames/AddGames";
import AddNews from "../Pages/Admin/AddNews/AddNews";
import Magazine from "../Pages/Admin/Magazine/Magazine";
import News from "../Pages/Admin/News/News";
import Gta5Online_det from "../Pages/Site/Details/Gta5Online_det/Gta5Online_det";
import RdrOnline2_det from "../Pages/Site/Details/RDR2Online_det/RdrOnline2_det";
import Login from "../Pages/Site/Login/Login";
import Signup from "../Pages/Site/SignUp/Signup";
import Gta5Online__category from "../Pages/Site/NewsCategory/Gta5Online__category";
import RDROnline__category from "../Pages/Site/NewsCategory/RDROnline__category";
import NewsEvents from "../Pages/Site/NewsEvents/NewsEvents";

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
      },
      {
        path:"newswire/details/rdronline/:id",
        element:<RdrOnline2_det/>
      },
      {
        path:"newswire/details/gta5online/:id",
        element:<Gta5Online_det/>
      },
      {
        path:"newswire/category/gta5online",
        element:<Gta5Online__category/>
      },
      {
        path:"newswire/category/rdronline",
        element:<RDROnline__category/>
      },
      {
        path:"newswire/events",
        element:<NewsEvents/>
      },
      
      {
        path:"login",
        element:<Login/>
      },
      {
        path:"register",
        element:<Signup/>
      }
    ]
  },
  {
    path:"/admin",
    element:<AdminRoot/>,
    children:[
      {
        path:"magazine",
        element:<Magazine/>
      },
      {
        path:"newswire",
        element:<News/>
      },
      {
        path:"addproducts",
        element:<AddProducts/>
      },
      {
        path:"addgames",
        element:<AddGames/>
      },
      {
        path:"addnews",
        element:<AddNews/>
      }
      
    ]
  }
];
export default ROUTES

