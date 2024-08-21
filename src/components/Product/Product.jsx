import React, { useEffect, useState } from "react";

import "./Product.scss";
import axios from "axios";

const API = "https://6631e14cc51e14d69562ac56.mockapi.io/statistika";

function Product() {
  const [data, setData] = useState([]);

  async function handleClick() {
    try {
      const res = await axios.get(API);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div className="product">
      <div className="container">
        <div className="product__content">
          {data.map((item) => (
            <img src={item.images} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
