import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./roots/Nav.jsx";
import Home from "./roots/Home.jsx";
import Course from "./roots/Course.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="course/:courseId" element={<Course />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
