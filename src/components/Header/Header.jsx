import React, {  useState } from "react";

import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/cars",
    display: "Cars",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  // const menuRef = useRef(null);
  const [click, setClick] = useState(false);
  // const toggleMenu = () =>
  //   menuRef.current.classList.toggle("menu__active open");

    

  return (
    <header className="header">
      <div className="back">
        <span className="mobile__menu">
          <i
            className={click ? "hamburger open" : "hamburger"}
            onClick={() => setClick(!click)}
          >
            <span></span>
          </i>
        </span>
        <div className="phone">
          <div className="search__box">
            <input type="text" placeholder="Search" />
            <span>
              <i class="ri-search-line"></i>
            </span>
          </div>
        </div>
      </div>
      <div className="main__navbar">
        <Container >
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <div className={click ? "change menu" : ""}>
              {navLinks.map((item, index) => (
                <NavLink
                  to={item.path}
                  className={(navClass) =>
                    navClass.isActive ? "nav__active nav__item" : "nav__item"
                  }
                  key={index}
                >
                  {item.display}
                </NavLink>
              ))}
            </div>

            <div className="nav__right">
              <div className="search__box">
                <input type="text" placeholder="Search" />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Container>
       
      </div>
    </header>
  );
};

export default Header;
