import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Navbar />  {/* Navbar will be shown on all pages */}
      <Outlet />  {/* This renders the page content */}
      <Footer />  {/* Footer will be shown on all pages */}
    </>
  );
};

export default Layout;
