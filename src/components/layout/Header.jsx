import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header id="header" className={props.color}>
      <div className="header__port">
        <Link to="/portfolio">portfolio</Link>
      </div>
      <div className="header__logo">
        <Link to="/">Cheonwoojin</Link>
      </div>
      <div className="header__menu">
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/reference">Reference</Link>
          </li>
          <li>
            <Link to="/youtube">Youtube</Link>
          </li>
          <li>
            <Link to="/movie">Movie</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <input class="burger-check" type="checkbox" id="burger-check" />
      <label class="burger-icon" for="burger-check">
        <span class="burger-sticks"></span>
      </label>
      <div class="menu">
        <div Style="width: 200px;">
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/reference">Reference</Link>
            </li>
            <li>
              <Link to="/youtube">Youtube</Link>
            </li>
            <li>
              <Link to="/movie">Movie</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/portfolio">portfolio</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
