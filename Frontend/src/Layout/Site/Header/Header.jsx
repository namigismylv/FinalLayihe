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
            <Link to="newswire">Newswire</Link>
          </li>
          <li>
            <Link to="shop">
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
        <div className="rockstar__games--basket">
          <Link to="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="white"
              viewBox="0 0 24 24"
              class="text-[24px]"
              aria-label="cart"
            >
              <path
                fill="#FFFFFF"
                fill-rule="evenodd"
                d="M7 21a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm11 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM0 1a1 1 0 0 1 1-1h4a1 1 0 0 1 .98.804L6.82 5H23a1 1 0 0 1 .982 1.187l-1.601 8.398A3 3 0 0 1 19.39 17h-9.7a3 3 0 0 1-2.99-2.414L5.03 6.239a.994.994 0 0 1-.017-.084L4.18 2H1a1 1 0 0 1-1-1Zm7.22 6 1.44 7.195a1 1 0 0 0 1 .805h9.76a1 1 0 0 0 .998-.802L21.792 7H7.221Z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
        <div className="rockstar__games--profile">
          <button>
            <img
              src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a29e26aa160e7be7e845708c335b3c39.svg"
              alt=""
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
