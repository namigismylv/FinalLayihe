import { Link, useLocation } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import "./Header.css";
import MainContext from "../../../Context/Context";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../Services/Redux/Slices/userSlice";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
import rdr2Logo from "../../../assets/img/rdr2__logo.svg";

const Header = () => {
  const {
    isDropdownVisible,
    toggleDropdown,
    closeDropdown,
    buttonRef,
    dropdownRef,
  } = useContext(MainContext);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const location = useLocation();
  const [headerImage, setHeaderImage] = useState(null);
  useEffect(() => {
    switch (location.pathname) {
      case "/reddeadredemption2":
        setHeaderImage(rdr2Logo);
        break;
      // case '/contact':
      //   setHeaderImage('/images/contact.jpg');  // Contact səhifəsində xüsusi şəkil
      //   break;
      default:
        setHeaderImage(null); 
        break;
    }
  }, [location]);
  return (
    <header className={headerImage ? 'special-header' : ''}>
      <div className="rockstar__burger">
        <button>
          <span className="rockstar__burgerLine1"></span>
          <span className="rockstar__burgerLine2"></span>
          <span className="rockstar__burgerLine3"></span>
        </button>
      </div>
      <div className="header__left">
        {headerImage ? (
          <>
            <Link to="/" >
              <div className="rockstarGames__home--logo"></div>
            </Link>
            <div className="rockstarGames__sub__page--line">
            </div>
            <div className="rockstarGames__sub__page--logo" >
              <img src={headerImage}  alt="" />
            </div>
          </>
        ) : (
          <Link to="/">
            <div className="rockstarGames__home--logo"></div>
          </Link>
        )}
      </div>
      <div className="header__middle">
        <ul>
          <li>
            <button>
              Games <i className="fa-solid fa-chevron-down"></i>
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
          <Link to="/basket">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="white"
              viewBox="0 0 24 24"
              className="text-[24px]"
              aria-label="cart"
            >
              <path
                fill="#FFFFFF"
                fillRule="evenodd"
                d="M7 21a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm11 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM0 1a1 1 0 0 1 1-1h4a1 1 0 0 1 .98.804L6.82 5H23a1 1 0 0 1 .982 1.187l-1.601 8.398A3 3 0 0 1 19.39 17h-9.7a3 3 0 0 1-2.99-2.414L5.03 6.239a.994.994 0 0 1-.017-.084L4.18 2H1a1 1 0 0 1-1-1Zm7.22 6 1.44 7.195a1 1 0 0 0 1 .805h9.76a1 1 0 0 0 .998-.802L21.792 7H7.221Z"
                clipRule="evenodd"
              ></path>
            </svg>
            <sup>0</sup>
          </Link>
        </div>

        <div className="rockstar__games--profile" ref={dropdownRef}>
          {user.id && (
            <>
              <button
                className="rockstar__games--profile--btn"
                ref={buttonRef}
                onClick={toggleDropdown}
              >
                <p style={{ color: "white" }}>Image</p>
              </button>
              <div
                className={`dropdown__users ${isDropdownVisible ? "show" : ""}`}
              >
                <Link to="/user">USER</Link>
                <button
                  className="signOut"
                  style={{ color: "white" }}
                  onClick={() => {
                    Swal.fire({
                      title: "Are you sure?",
                      text: "You won't be able to revert this!",
                      icon: "warning",
                      showCancelButton: true,
                      confirmButtonColor: "#3085d6",
                      cancelButtonColor: "#d33",
                      confirmButtonText: "Yes, delete it!",
                    }).then((result) => {
                      if (result.isConfirmed) {
                         dispatch(logout());
                        Cookies.remove("token");
                        closeDropdown();
                        Swal.fire({
                          title: "Signed Out",
                          icon: "success",
                        });
                      }
                    });
                  }}
                >
                  Log Out
                </button>
              </div>
            </>
          )}
          {!user.id && (
            <>
              <button
                ref={buttonRef}
                className="rockstar__games--profile--btn"
                onClick={toggleDropdown}
              >
                <img
                  src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a29e26aa160e7be7e845708c335b3c39.svg"
                  alt=""
                />
              </button>
              <div
                className={`dropdown__users ${isDropdownVisible ? "show" : ""}`}
              >
                <Link onClick={closeDropdown} to="/register">
                  Sign Up
                </Link>
                <Link onClick={closeDropdown} to="/login">
                  Sign In
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
