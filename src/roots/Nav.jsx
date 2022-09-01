import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

function Nav() {
  return (
    <>
      <Navigation />
      <Outlet />
      <div className="min-h-screen">ahmed</div>
      <Footer />
    </>
  );
}
export default Nav;
