import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./roots/Nav.jsx";
import Home from "./roots/Home.jsx";
import Card from "./components/Card.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
