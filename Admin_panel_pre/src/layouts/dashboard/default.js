import React from "react";
import { Navigate, Outlet } from "react-router-dom";

//header
import Header from "../../components/partials/dashboard/headerstyle/header";

//sidebar
import Sidebar from "../../components/partials/dashboard/sidebarstyle/sidebar";

//footer
import Footer from "../../components/partials/dashboard/footerstyle/footer";

//default
// import DefaultRouter from "../../router/default-router";
// import { Outlet } from "react-router-dom";

const Default = () => {
  const token = document?.cookie
    ?.split("; ")
    ?.find((row) => row.startsWith("token="))
    ?.split("=")[1];

  return (
    <>
      <div className="position-relative">
      </div>
      <Sidebar />
      <main className="main-content" style={{ backgroundColor: "#fbfbfb" }}>
        <div className="position-relative header-section">
          <Header />
        </div>
        <div className="conatiner-fluid content-inner mt-5 py-0">
          {token ? <Outlet /> : <Navigate to="/auth/sign-in" />}
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Default;
