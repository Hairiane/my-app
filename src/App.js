import "./App.css";
import "./scss/app.scss";

import React from "react";
import Header from "./Components/Header";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";

export const MyContext = React.createContext();

function App() {
  const [SearchValue, SetSearchValue] = React.useState("");

  return (
    <MyContext.Provider value={{ SearchValue, SetSearchValue }}>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </MyContext.Provider>
  );
}

export default App;
