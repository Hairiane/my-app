import "./App.css";
import "./scss/app.scss";

import React from "react";
import Header from "./Components/Header";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";

function App() {
  const [SearchValue, SetSearchValue] = React.useState("");

  return (
    <div className="wrapper">
      <Header SearchValue={SearchValue} SetSearchValue={SetSearchValue} />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home SearchValue={SearchValue} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
