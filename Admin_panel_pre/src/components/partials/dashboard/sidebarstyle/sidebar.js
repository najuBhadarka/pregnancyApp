import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Scrollbar from "smooth-scrollbar";

import Logo from "../../components/logo";
import VerticalNav from "../sidebarstyle/vertical-nav";
import "./style.css";

const Sidebar = () => {
  useEffect(() => {
    Scrollbar.init(document.querySelector("#my-scrollbar"));
  });

  const minisidebar = () => {
    document.getElementsByTagName("ASIDE")[0].classList.toggle("sidebar-mini");
  };

  return (
    <aside className="sidebar sidebar-default sidebar-hover sidebar-mini navs-pill-all {{ sidebarVariants }} sidebar-section">
      <div
        className="sidebar-header d-flex align-items-center justify-content-start"
        style={{ marginBottom: "0px" }}
      >
        <Link to="/" className="navbar-brand">
          <Logo />
        </Link>
        <div
          className="sidebar-toggle"
          data-toggle="sidebar"
          data-active="true"
          onClick={minisidebar}
        >
          <i className="icon">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.25 12.2744L19.25 12.2744"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M10.2998 18.2988L4.2498 12.2748L10.2998 6.24976"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </i>
        </div>
      </div>
      <div
        className="sidebar-body pt-0 data-scrollbar"
        id="my-scrollbar"
        style={{ paddingBottom: "70px" }}
      >
        <div className="navbar-collapse collapse" id="sidebar">
          <VerticalNav closeSidebar={minisidebar} />
        </div>
      </div>
      <div className="sidebar-footer"></div>
    </aside>
  );
};

export default Sidebar;
