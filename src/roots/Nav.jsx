import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

function Nav() {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
}
export default Nav;
