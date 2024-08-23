import React from "react";

import "./Menu.scss";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="menu">
      <div className="container">
        <div className="menu__content">
          <ul>
            <li>
              <Link style={{ color: "yellow" }} to="/main">
                Продук
              </Link>
            </li>
            <li>
              <Link style={{ color: "yellow" }} to="/apple">
                Товары
              </Link>
            </li>
            <li>
              <Link style={{ color: "yellow" }} to="/images">
                Фото
              </Link>
            </li>
            <li>
              <Link style={{ color: "yellow" }} to="/">
                Бюджет
              </Link>
            </li>

            <li style={{ color: "red", boxShadow: "0 0 10px red" }}>
              <Link style={{ color: "yellow" }} to="/">
                Выход
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Menu;
