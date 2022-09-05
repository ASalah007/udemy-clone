import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

function Nav() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen max-w-[1500px] mx-auto overflow-x-hidden ">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
export default Nav;
