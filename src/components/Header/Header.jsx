import React from "react";

import { IoSearch } from "react-icons/io5";
import { MdOutlineExitToApp } from "react-icons/md";
import { HiOutlineMenu } from "react-icons/hi";

import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header__content">
          <Link to="/">
            <h1>Logo</h1>
          </Link>
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
            <div className="header__input">
              <input type="text" placeholder="Напишите ID" />
              <IoSearch className="header__icon1" />
            </div>
            <Link to="/menu">
              <HiOutlineMenu className="header__menu" />
            </Link>
            <Link to="/">
              <MdOutlineExitToApp className="header__icon2" />
            </Link>
          </div>
        </div>
        <input className="header__ser" type="text" placeholder="Напишите ID" />
      </div>
    </div>
  );
}

export default Header;
