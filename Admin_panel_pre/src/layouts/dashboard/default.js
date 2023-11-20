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
        <div className="user-img1">
          <svg
            width="1857"
            viewBox="0 0 1857 327"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.05078 189.348C86.8841 109.514 348.951 -25.2523 734.551 74.3477C1120.15 173.948 1641.22 91.181 1853.55 37.3477"
              stroke="#EA6A12"
              strokeOpacity="0.3"
            />
            <path
              d="M0.99839 152.331C90.9502 80.6133 364.495 -28.9952 739.062 106.31C1113.63 241.616 1640.16 208.056 1856.6 174.363"
              stroke="#EA6A12"
              strokeOpacity="0.3"
            />
          </svg>
        </div>
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
