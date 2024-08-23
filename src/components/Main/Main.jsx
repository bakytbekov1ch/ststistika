import React, { useEffect, useState } from "react";
import axios from "axios";
import { CiEdit } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";

const API = "https://6631e14cc51e14d69562ac56.mockapi.io/statistika";
import { Link } from "react-router-dom";
import "./Main.scss";

function Main() {
  const [name, setName] = useState([]);

  async function handleClick() {
    try {
      const res = await axios.get(API);
      setName(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div className="main">
      <div className="container">
        <div className="main__content">
          <div>
            <tr>
              <th>№</th>
              <th>Имя</th>
              <th>ID</th>
              <th>Общий шт</th>
              <th>Продал шт</th>
              <th>Цена</th>
              <th>Remove</th>
            </tr>
            <div className="main__block">
              {name.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.codeId}</td>
                  <td>{item.number}</td>
                  <td>{item.array}</td>
                  <td>{item.price} c</td>
                  <td>
                    <Link to={`/ubdate/${item.id}`}>
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
            {name.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.codeId}</td>
                <td>
                  <Link to={`${"/ubdate"}/${item.id}`}>
                    <CiEdit
                      style={{
                        color: "white",
                        marginLeft: "5px",
                      }}
                    />
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

export default Main;
