import React from "react";

import { IoSearch } from "react-icons/io5";
import { MdOutlineExitToApp } from "react-icons/md";

import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header__content">
          <h1>Logo</h1>
          <ul>
            <Link to="/main">
              <li>Продук</li>
            </Link>
            <Link to="/apple">
              <li>Товары</li>
            </Link>
            <Link to="/images">
              <li>Фото</li>
            </Link>
            <Link to="/">
              <li>Бюджет</li>
            </Link>
          </ul>
          <div className="header__search">
            <input type="text" placeholder="Напишите ID" />
            <IoSearch className="header__icon1" />
            <MdOutlineExitToApp className="header__icon2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
