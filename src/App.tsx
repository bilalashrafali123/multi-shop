import { Route, Routes } from "react-router-dom";
import "./App.scss"
import Home from "./components/Home";
import Shop from "./components/Shop";
import ShopDetail from "./components/ShopDetail";
import Login from "./components/Login";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/shopdetail" element={<ShopDetail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  </>
);

export default App;