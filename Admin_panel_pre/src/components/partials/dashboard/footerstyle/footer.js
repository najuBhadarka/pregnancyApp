import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-body" style={{ zIndex: "910" }}>
        <div className="right-panel">
          © {new Date().getFullYear()} &nbsp;
          <img
            src={""}
            className="img-fluid logo-img "
            style={{ height: "26px" }}
            alt="img4"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
