import React, { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";

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
        <div className="home__w1">
          <div className="home__w2">
            <tr>
              <th>№</th>
              <th>Name</th>
              <th>ID</th>
              <th style={{ display: "flex", justifyContent: "center" }}>
                <CiSettings />
              </th>
            </tr>
          </div>
          <div className="home__w3">
            {isma.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.codeId}</td>
                <td
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Link to={`${"/ubdate"}/${item.id}`}>
                    <CiEdit style={{ color: "white" }} />
                  </Link>
                </td>
              </tr>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Apple;
