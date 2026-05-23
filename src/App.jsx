import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Content from "./pages/Content";
import Footer from "./pages/Footer";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import { Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/cartContext";
function App() {
  return (
    <>
      <CartProvider>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Content></Content>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/menu" element={<Menu></Menu>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
        </Routes>
      </CartProvider>

      <Footer></Footer>
    </>
  );
}

export default App;
