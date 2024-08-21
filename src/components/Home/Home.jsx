import React, { useEffect, useState } from "react";

import { MdOutlineDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

const API = "https://6631e14cc51e14d69562ac56.mockapi.io/statistika";

import "./Home.scss";
import axios from "axios";

function Home() {
  const [phomen, setPhomen] = useState([]);

  async function nameClick() {
    try {
      const res = await axios.get(API);
      setPhomen(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    nameClick();
  }, []);

  return (
    <div className="home">
      <div className="container">
        <div className="home__content">
          <tr>
            <th>№</th>
            <th>Имя</th>
            <th>ID</th>
            <th>Баштапкы сумма</th>
            <th>Түшкөн сумма</th>
            <th>Түшкөн даход</th>
            <th>Remove</th>
          </tr>
          <div className="home__block">
            {phomen.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.codeId}</td>
                <td>{item.first} с</td>
                <td>{item.second} с</td>
                <td>{item.third} с</td>
                <td className="home__icon">
                  <MdOutlineDelete className="home__delete" />
                  <CiEdit className="home__edit" />
                </td>
              </tr>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
