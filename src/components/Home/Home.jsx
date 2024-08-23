import React, { useEffect, useState } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import axios from "axios";
import "./Home.scss";
import { Link } from "react-router-dom";

const API = "https://6631e14cc51e14d69562ac56.mockapi.io/statistika";

function Home() {
  const [phomen, setPhomen] = useState([]);

  useEffect(() => {
    axios
      .get(API)
      .then((res) => setPhomen(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleRemove = (id) => {
    axios
      .delete(`${API}/${id}`)
      .then(() => {
        setPhomen((prevPhomen) => prevPhomen.filter((item) => item.id !== id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="home">
      <div className="container">
        <div className="home__content">
          <table>
            <thead>
              <tr>
                <th>№</th>
                <th>Имя</th>
                <th>ID</th>
                <th>Баштапкы сумма</th>
                <th>Түшкөн сумма</th>
                <th>Түшкөн даход</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              <div className="home__block">
                {phomen.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.codeId}</td>
                    <td>{item.first} с</td>
                    <td>{item.second} с</td>
                    <td>{item.third} с</td>
                    <td className="home__icon">
                      <MdOutlineDelete
                        onClick={() => handleRemove(item.id)}
                        className="home__delete"
                      />
                      <Link to={`${"/ubdate"}/${item.id}`}>
                        <CiEdit className="home__edit" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </div>
            </tbody>
          </table>
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
            {phomen.map((item) => (
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
                  <MdOutlineDelete onClick={() => handleRemove(item.id)} />
                  <Link to={`${"/ubdate"}/${item.id}`}>
                    <CiEdit style={{ color: "white", marginLeft: "10px" }} />
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

export default Home;
