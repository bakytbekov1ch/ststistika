import React, { useEffect, useState } from "react";

import { MdOutlineDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

const API = "https://6631e14cc51e14d69562ac56.mockapi.io/statistika";

import "./Main.scss";
import axios from "axios";

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
                <td className="main__icon">
                  <MdOutlineDelete className="main__delete" />
                  <CiEdit className="main__edit" />
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
