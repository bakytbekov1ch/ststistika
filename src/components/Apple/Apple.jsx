import React, { useEffect, useState } from "react";

import { MdOutlineDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

const API = "https://6631e14cc51e14d69562ac56.mockapi.io/statistika";

import "./Apple.scss";
import axios from "axios";

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
                <td className="apple__icon">
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

export default Apple;
