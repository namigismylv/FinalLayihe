import React, { useContext } from "react";
import MainContext from "../../../../../Context/Context";
import { Link } from "react-router-dom";

const Hero__sec = ({ item }) => {
  const { addToBasket } = useContext(MainContext);
  const userLocal = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="shop__games__heroSec">
      <div className="container-fluid">
        <div className="row">
          <div className="col-4">
            <div className="heroSec__text">
              <img src={item.nameImg} />
              <p>{item.title}</p>
              <p>Price: €{item.price}</p>
              {userLocal.id ? (
                <button
                  className="shop__basketBtn games__basketBtn"
                  onClick={() => addToBasket(item)}
                >
                  ADD TO CART
                </button>
              ) : (
                <Link to="/register">
                  <button
                    className="shop__basketBtn games__basketBtn"
                    
                  >
                    ADD TO CART
                  </button>
                </Link>
              )}
            </div>
          </div>
          <div className="col-8">
            <div
              className="heroSec__img"
              style={{ backgroundImage: `url(${item.bigImg})` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero__sec;
