import React from "react";
import { useState } from "react";

const Header = () => {
  const [changeHeader, setChangeHeader] = useState(false);

  const changeHeaderColor = () => {
    if (window.scrollY >= 50) {
      setChangeHeader(true);
    } else {
      setChangeHeader(false);
    }
  };

  window.addEventListener(`scroll`, changeHeaderColor);

  return (
    <header className={`header ${changeHeader && `scroll-header`}`} id="header">
      <nav className="nav container">
        <a href="#home" class="nav__logo">
          Fitness<span>Hub</span>{" "}
        </a>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" class="nav__link active-link">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#classes" class="nav__link">
                Classes
              </a>
            </li>
            <li className="nav__item">
              <a href="#Rules and Regulations" class="nav__link">
                Rules And Regulations
              </a>
            </li>
            <li className="nav__item">
              <a href="#blog" class="nav__link">
                Blog
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact us" class="nav__link">
                Contact us
              </a>
            </li>
          </ul>

          <div className="nav__close" id="nav-close">
            <i className="bx bx-x"></i>
          </div>
        </div>

        <div className="nav__toggle" id="nav-toggle">
          <i className="bx bx-grid-alt"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
