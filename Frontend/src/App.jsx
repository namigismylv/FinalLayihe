import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import ROUTES from "./Routes/Routes";
import MainContext from "./Context/Context";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const routes = createBrowserRouter(ROUTES);
  const [modal, setModal] = useState(false);
  const [news, setNews] = useState([]);
  const [products, setProducts] = useState([]);
  const [games, setGames] = useState([]);

  function clickModal() {
    setModal(!modal);
  }

  useEffect(() => {
    const axiosdata = async () => {
      try {
        const responses = await axios.all([
          axios.get("http://localhost:3000/newswire"),
          axios.get("http://localhost:3000/products"),
          axios.get("http://localhost:3000/games"),
        ]);
        const [res1, res2, res3] = responses;
        setNews(res1.data);
        setProducts(res2.data);
        setGames(res3.data);
      } catch (error) {
        console.log("Fetching problem", error);
      }
    };
    axiosdata();
  }, []);
  const getDetailPath = (category, id) => {
    if(category === "Red Dead Online"){
      return `/newswire/details/rdronline/${id}`
    }
    else if(category=== "Gta Online"){
      return `/newswire/details/gta5online/${id}`
    }
     else{
      return "Error page"
     }
  };
  const contextData = { modal, setModal, clickModal, news, setNews, games, setGames, products, setProducts, getDetailPath };

  return (
    <MainContext.Provider value={contextData}>
      <RouterProvider router={routes} />
    </MainContext.Provider>
  );
}

export default App;
