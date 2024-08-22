import React, { useEffect, useState } from "react";

import "./Product.scss";
import axios from "axios";
import { useParams } from "react-router-dom";

const API = "https://6631e14cc51e14d69562ac56.mockapi.io/statistika";

function Product() {
  const [data, setData] = useState();
  const { id } = useParams();

  async function handleClick() {
    try {
      const res = await axios.get(`${API}/${id}`);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleClick();
  }, [id]);

  return (
    <div className="product">
      <div className="container">
        <div className="product__content">
          {data.images.map((item) => (
            <img src={item.images} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
