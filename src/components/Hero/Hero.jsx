import React from "react";

import "./Hero.scss";

function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero__content">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="CodeID" />
          <input type="text" placeholder="Общий шт" />
          <input type="text" placeholder="Продал шт" />
          <input type="text" placeholder="Цена" />
          <input type="text" placeholder="Алуу" />
          <input type="text" placeholder="Баштапкы сумма" />
          <input type="text" placeholder="Түшкөн сумма" />
          <input type="text" placeholder="Түшкөн даход" />
          <input className="input" type="file" placeholder="Img" />
          <input className="input" type="file" placeholder="Images" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
