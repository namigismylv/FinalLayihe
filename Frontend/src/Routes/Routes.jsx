
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
        path:"details/rdronline/:id",
        element:<RdrOnline2_det/>
      },
      {
        path:"details/gta5online/:id",
        element:<Gta5Online_det/>
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

