import React, { useEffect, useState } from "react";
import "./Ubdate.scss";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const API = "https://6631e14cc51e14d69562ac56.mockapi.io/statistika";

function Ubdate() {
  const { id } = useParams();
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

  useEffect(() => {
    axios
      .get(`${API}/${id}`)
      .then((res) => setValues(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleUbdate = (event) => {
    event.preventDefault();
    axios
      .put(`${API}/${id}`, values)
      .then((res) => {
        console.log(res);
        navigate("/main");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="ubdate">
      <div className="container">
        <div className="ubdate__content">
          <input
            name="name"
            defaultValue={values.name}
            type="text"
            placeholder="Name"
            onChange={(e) => setValues({ ...values, name: e.target.value })}
          />
          <input
            name="codeId"
            defaultValue={values.codeId}
            type="text"
            placeholder="CodeID"
            onChange={(e) => setValues({ ...values, codeId: e.target.value })}
          />
          <input
            name="number"
            defaultValue={values.number}
            onChange={(e) => setValues({ ...values, number: e.target.value })}
            type="text"
            placeholder="Общий шт"
          />
          <input
            name="array"
            defaultValue={values.array}
            onChange={(e) => setValues({ ...values, array: e.target.value })}
            type="text"
            placeholder="Продал шт"
          />
          <input
            name="price"
            defaultValue={values.price}
            onChange={(e) => setValues({ ...values, price: e.target.value })}
            type="text"
            placeholder="Цена"
          />
          <input
            name="Reprice"
            defaultValue={values.Reprice}
            onChange={(e) => setValues({ ...values, Reprice: e.target.value })}
            type="text"
            placeholder="Алуу"
          />
          <input
            name="first"
            defaultValue={values.first}
            onChange={(e) => setValues({ ...values, first: e.target.value })}
            type="text"
            placeholder="Баштапкы сумма"
          />
          <input
            name="second"
            defaultValue={values.second}
            onChange={(e) => setValues({ ...values, second: e.target.value })}
            type="text"
            placeholder="Түшкөн сумма"
          />
          <input
            name="third"
            defaultValue={values.third}
            onChange={(e) => setValues({ ...values, third: e.target.value })}
            type="text"
            placeholder="Түшкөн даход"
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <button onClick={handleUbdate}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Ubdate;
