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
        <Navbar />

        <Routes>
          <Route index element={<Content />} />
          <Route path="about" element={<About />} />
          <Route path="menu" element={<Menu />} />
          <Route path="cart" element={<Cart />} />
        </Routes>

        <Footer />
      </CartProvider>
    </>
  );
}

export default App;
