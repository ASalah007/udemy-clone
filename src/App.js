import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./roots/Nav.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
