import React from "react";
import "./Newswire.css";
import Cards from "../../../Components/Site/Sections/newswire_sec/Cards/Cards";
import GTA5OnlineContract from '../../../assets/img/GTA5ONLINE_Contract.png'
const Newswire = () => {
  return (
    <main>
      <section className="herosec newswire__herosec">
                <div className="custom-container heroSec__container newswire__herosec__container">
                    <div className="row heroSec__row newswire__herosec__row">
                        <div className="col-9 heroSec__col1 newswire__herosec__col1">
                            <img src={GTA5OnlineContract} alt="" />
                        </div>
                        <div className="col-3 heroSec__col2 newswire__herosec__col2">
                            <div className="heroSec__info newswire__herosec__info">
                                <div className="heroSec__title newswire__herosec__title">
                                    <p style={{display:"inline-block",paddingRight:"15px"}}>GTA Online</p>
                                    <time datetime="" className="newswire__herosec__title__time">June 13, 2024</time>
                                    <h2>Solve The Data Leaks and Embark on Short Trips to Earn 2X GTA$ and RP</h2>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
      <section className="newswire__blog">
        <div className="custom-container">
          <Cards />
          <div className="row">
            <div className="col-12">
              <div className="viewMore__button morestories__btn">
                <button>
                  More Stories
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Newswire;
