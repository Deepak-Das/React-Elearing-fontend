import React from "react";
import { Outlet } from "react-router";
import Header from "../componenet/common/header/Header";
import Footer from "../componenet/common/footer/Footer";
import "../App.css";

const UserPage = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default UserPage;
