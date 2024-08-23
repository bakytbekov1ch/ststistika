import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import "./Images.scss";
import axios from "axios";

const API = "https://6631e14cc51e14d69562ac56.mockapi.io/statistika";

function Images() {
  const [image, setImage] = useState([]);

  async function handleImage() {
    try {
      const response = await axios.get(API);
      setImage(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleImage();
  }, []);

  return (
    <div className="images">
      <div className="container">
        <div className="images__button">
          <Link to="/hero">
            <button>Добавить товар</button>
          </Link>
        </div>
        <div className="images__content">
          {image.map((item, index) => (
            <div key={index} className="images__block">
              <img src={item.img} alt="" />
              <h1>{item.codeId}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Images;
