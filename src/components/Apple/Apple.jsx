import React, { useEffect, useState } from "react";

const API = "https://6631e14cc51e14d69562ac56.mockapi.io/statistika";

import "./Apple.scss";
import axios from "axios";
import { Link } from "react-router-dom";

function Apple() {
  const [isma, setIsma] = useState([]);

  async function handleClick() {
    try {
      const res = await axios.get(API);
      setIsma(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div className="apple">
      <div className="container">
        <div className="apple__content">
          <div>
            <tr>
              <th>№</th>
              <th>Имя</th>
              <th>ID</th>
              <th>Общий шт</th>
              <th>Алуу</th>
              <th>Сатуу</th>
              <th>Remove</th>
            </tr>
            <div className="apple__block">
              {isma.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.codeId}</td>
                  <td>{item.number}</td>
                  <td>{item.price} c</td>
                  <td>{item.Reprice} c</td>
                  <td>
                    <Link to={`${"/ubdate"}/${item.id}`}>
                      <button>Оңдо</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Apple;
