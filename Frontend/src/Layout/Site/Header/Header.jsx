import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <div className="rockstar__burger">
      <button>
        <span className="rockstar__burgerLine1"></span>
        <span className="rockstar__burgerLine2"></span>
        <span className="rockstar__burgerLine3"></span>
      </button>
      </div>
      <div className="header__left">
        <Link to="/">
          <div className="rockstarGames__home--logo"></div>
        </Link>
      </div>
      <div className="header__middle">
        <ul>
          <li>
            <button>
              Games <i class="fa-solid fa-chevron-down"></i>
            </button>
          </li>
          <li>
            <Link to="">Newswire</Link>
          </li>
          <li>
            <Link to="" target="_blank">
              Store
              <img
                src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9db08c7809308ca2fa4614f3c2d45a91.svg"
                alt=""
              />
            </Link>
          </li>
        </ul>
      </div>
      <div className="header__right">
        <div className="rockstar__games--search">
        <button>
          <img
            src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/902006563577748c7d58ac9c2bf5e6df.svg"
            alt=""
          />
        </button>
        </div>
        <div className="rockstar__games--profile">
          <button>
          <img src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a29e26aa160e7be7e845708c335b3c39.svg" alt="" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
