import React from "react";
import "./NewArrivals.css";
import { Link } from "react-router-dom";

const NewArrivals = ({ products }) => {
  return (
    <section className="newarrivals">
      <div className="custom-container sliderContainer">
        <div className="row" style={{ margin: "0 auto" }}>
          <div className="col-6">
            <div className="shop__card__title">
              <h2>New Arriwals</h2>
            </div>
          </div>
          <div className="col-6 seeAllCol">
            <Link >
              See all <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
        <div className="row">
          {products.map((product, index) => {
            return (
              <div className="col-3" key={index}>
                <Link to={`/shop/products/details/${product._id}`}>
                  <div class="card" style={{ width: "100%" }}>
                    <img src={product.image} class="card-img-top" alt="..." />
                    <div class="card-body" style={{ padding: "20px" }}>
                      <h3 class="card-title">{product.title}</h3>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
