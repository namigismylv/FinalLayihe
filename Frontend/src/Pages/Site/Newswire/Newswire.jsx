import React, { useContext } from "react";
import "./Newswire.css";
import Cards from "../../../Components/Site/Sections/newswire_sec/Cards/Cards";
import MainContext from "../../../Context/Context";
import { Link } from "react-router-dom";

const Newswire = () => {
  const { news, getDetailPath } = useContext(MainContext);

  return (
    <main>
      <section className="herosec newswire__herosec">
        <div className="custom-container heroSec__container newswire__herosec__container">
          <div className="row heroSec__row newswire__herosec__row">
            {news.slice(0, 1).map((newsitem, index) => {
              const detailPath = getDetailPath(newsitem.category, newsitem._id);
              return (
                <React.Fragment key={index}>
                  <div className="col-9 heroSec__col1 newswire__herosec__col1">
                    <Link to={detailPath}>
                      <img src={newsitem.image} alt="" />
                    </Link>
                  </div>

                  <div className="col-3 heroSec__col2 newswire__herosec__col2">
                    <Link to={detailPath}>
                      <div className="heroSec__info newswire__herosec__info">
                        <div className="heroSec__title newswire__herosec__title">
                          <p
                            style={{
                              display: "inline-block",
                              paddingRight: "15px",
                            }}
                          >
                            {newsitem.category}
                          </p>
                          <time
                            datetime=""
                            className="newswire__herosec__title__time"
                          >
                            {newsitem.time}
                          </time>
                          <h2>{newsitem.title}</h2>
                        </div>
                      </div>
                    </Link>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>
      <section className="newswire__blog">
        <div className="custom-container">
          <Cards news={news.slice(1)} />
          <div className="row">
            <div className="col-12">
              <div className="viewMore__button morestories__btn">
                <button>More Stories</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Newswire;
