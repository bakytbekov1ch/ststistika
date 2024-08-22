import React from "react";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Main from "./components/Main/Main";
import Apple from "./components/Apple/Apple";
import Images from "./components/Images/Images";
import Product from "./components/Product/Product";
import Hero from "./components/Hero/Hero";
import Ubdate from "./components/Ubdate/Ubdate";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/main" element={<Main />} />
        <Route path="/apple" element={<Apple />} />
        <Route path="/images" element={<Images />} />
        <Route path="/ubdate/:id" element={<Ubdate />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
