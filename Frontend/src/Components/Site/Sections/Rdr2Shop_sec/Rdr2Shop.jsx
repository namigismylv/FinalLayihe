import React from "react";
import "./Rdr2shop.css";
import { Link } from "react-router-dom";
const Rdr2Shop = ({ products }) => {
  return (
    <section className="RDR2__shop">
      <div className="custom-container">
        <div className="row" style={{ margin: "0 auto" }}>
          <div className="col-12">
            <h2>Red Dead Redemption Essentials</h2>
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

export default Rdr2Shop;
