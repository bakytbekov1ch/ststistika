import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Hero.scss";

const API = "https://6631e14cc51e14d69562ac56.mockapi.io/statistika";

function Hero() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    codeId: "",
    number: "",
    array: "",
    price: "",
    Reprice: "",
    img: "",
    images: "",
    first: "",
    second: "",
    third: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${API}`, values)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="hero">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="hero__content">
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
            <input
              type="text"
              name="codeId"
              placeholder="CodeID"
              onChange={(e) => setValues({ ...values, codeId: e.target.value })}
            />
            <input
              type="text"
              name="number"
              placeholder="Общий шт"
              onChange={(e) => setValues({ ...values, number: e.target.value })}
            />
            <input
              type="text"
              name="array"
              placeholder="Продал шт"
              onChange={(e) => setValues({ ...values, array: e.target.value })}
            />
            <input
              type="text"
              name="price"
              placeholder="Цена"
              onChange={(e) => setValues({ ...values, price: e.target.value })}
            />
            <input
              type="text"
              name="Reprice"
              placeholder="Алуу"
              onChange={(e) =>
                setValues({ ...values, Reprice: e.target.value })
              }
            />
            <input
              type="text"
              name="first"
              placeholder="Баштапкы сумма"
              onChange={(e) => setValues({ ...values, first: e.target.value })}
            />
            <input
              type="text"
              name="second"
              placeholder="Түшкөн сумма"
              onChange={(e) => setValues({ ...values, second: e.target.value })}
            />
            <input
              type="text"
              name="third"
              placeholder="Түшкөн даход"
              onChange={(e) => setValues({ ...values, third: e.target.value })}
            />
            <input
              className="input"
              type="file"
              name="img"
              placeholder="Img"
              onChange={(e) => setValues({ ...values, img: e.target.value })}
            />
            <input
              className="input"
              type="file"
              name="images"
              placeholder="Images"
              onChange={(e) => setValues({ ...values, images: e.target.value })}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Hero;
