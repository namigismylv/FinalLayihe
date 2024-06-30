import React from "react";
import { Link } from "react-router-dom";
const BasketTable = ({ basketItems }) => {
  return (
    <div className="custom-container">
      <div className="row">
        <div className="col-12">
          <h3 className="basket__title">My Cart</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <table class="table">
            <tbody>
              {basketItems.map((basketItem, index) => {
                return(
                  <tr key={index}>
                  <td style={{ width: "160px" }}>
                    <div className="basket__img" style={{ width: "100%" }}>
                      <Link>
                        <img
                          width="100%"
                          src={basketItem.item.image}
                          alt=""
                        />
                      </Link>
                    </div>
                  </td>
                  <td>
                    <div className="basket__info">
                      <div className="basket__text">
                        <div className="basket__text__heading">
                          <Link>{basketItem.item.title}</Link>
                          <p>€{basketItem.item.price}</p>
                        </div>
                        <div className="basket__text__body">
                          <button>
                            <i class="fa-solid fa-caret-left"></i>
                          </button>
                          <p>{basketItem.count}</p>
                          <button>
                            <i class="fa-solid fa-caret-right"></i>
                          </button>
                        </div>
                      </div>
                      <button className="basket__removeBtn">Remove</button>
                    </div>
                  </td>
                </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="row">
        <div
          className="col-12"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <div className="subtotal__title">
            <span>Subtotal </span>
            <span>(4 items):</span>
            <span className=""> €111.96</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketTable;
