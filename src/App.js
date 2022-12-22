import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./About";
import Cart from "./Cart";
import Contact from "./Contact";
import ErrorPage from "./ErrorPage";
import Home from "./Home";
import Products from "./Products";
import SingleProduct from "./SingleProduct";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route
          path="/singleproduct/:id"
          element={<SingleProduct></SingleProduct>}
        ></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </Router>
  );
};

export default App;
