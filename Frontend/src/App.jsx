import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import ROUTES from "./Routes/Routes";
import MainContext from "./Context/Context";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

function App() {
  const routes = createBrowserRouter(ROUTES);
  const [modal, setModal] = useState(false);
  const [news, setNews] = useState([]);
  const [products, setProducts] = useState([]);
  const [games, setGames] = useState([]);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [basketItems, setBasketItem] = useState(
    localStorage.getItem("basketItems")
      ? JSON.parse(localStorage.getItem("basketItems"))
      : []
  );
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const [sort, setSort] = useState(null);
  const [isSearchDropdownVisible, setIsSearchDropdownVisible] = useState(false);
  const searchButtonRef = useRef(null);
  const searchDropdownRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [dropdownVisible,setIsDropdownVisible]=useState(false)
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setIsDropdownVisible(e.target.value !== "")
  };
  const filteredNews = news.slice(1).filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) 
  );
  const toggleSearchDropdown = () => {
    setIsSearchDropdownVisible(!isSearchDropdownVisible);
  };


  const handleSortChange = (event) => {
    const value = event.target.value;
    if (value === "low-to-high") {
      setSort({ field: "price", asc: true });
    } else if (value === "high-to-low") {
      setSort({ field: "price", asc: false });
    } else if (value === "a-z") {
      setSort({ field: "title", asc: true });
    } else if (value === "z-a") {
      setSort({ field: "title", asc: false });
    } else {
      setSort(null);
    }
  };
  useEffect(() => {
    localStorage.setItem("basketItems", JSON.stringify(basketItems));
  }, [basketItems]);
  function clickModal() {
    setModal(!modal);
  }
  function addToBasket(item) {
    const target = basketItems.find((x) => x.item._id == item._id);
    if (target) {
      target.count += 1;
      target.totalPrice += item.price;
      setBasketItem([...basketItems]);
    } else {
      let newBasketItem = {
        item: item,
        count: 1,
        totalPrice: item.price,
      };
      setBasketItem([...basketItems, newBasketItem]);
    }
  }

  const increaseBasket = (item) => {
    const target = basketItems.find((x) => x.item._id === item._id);
    target.count += 1;
    target.totalPrice += item.price;
    setBasketItem([...basketItems]);
  };
  const decreaseBasket = (item) => {
    const target = basketItems.find((x) => x.item._id === item._id);
    if (target.count > 1) {
      target.count -= 1;
      target.totalPrice -= item.price;
      setBasketItem([...basketItems]);
    }
  };

  const removeFromBasket = (item) => {
    setBasketItem([...basketItems.filter((x) => x.item._id !== item._id)]);
  };
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
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
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  const closeDropdown = () => {
    setDropdownVisible(false);
  };
  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setDropdownVisible(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const getDetailPath = (category, id) => {
    if (category === "Red Dead Online") {
      return `/newswire/details/rdronline/${id}`;
    } else if (category === "Gta Online") {
      return `/newswire/details/gta5online/${id}`;
    } else {
      return "Error page";
    }
  };
  const contextData = {
    modal,
    setModal,
    clickModal,
    news,
    setNews,
    games,
    setGames,
    products,
    setProducts,
    getDetailPath,
    isDropdownVisible,
    setDropdownVisible,
    dropdownRef,
    buttonRef,
    toggleDropdown,
    handleClickOutside,
    closeDropdown,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    handleClickShowPassword,
    handleClickShowConfirmPassword,
    basketItems,
    addToBasket,
    increaseBasket,
    decreaseBasket,
    removeFromBasket,
    sort,
    setSort,
    handleSortChange,
    isSearchDropdownVisible,
    setIsSearchDropdownVisible,
    searchButtonRef,
    searchDropdownRef,
    toggleSearchDropdown,
    searchTerm, 
    setSearchTerm,
    handleSearchChange,
    filteredNews,
    dropdownVisible
  };

  return (
    <MainContext.Provider value={contextData}>
      <RouterProvider router={routes} />
    </MainContext.Provider>
  );
}

export default App;
