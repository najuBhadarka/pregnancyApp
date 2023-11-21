import React from "react";
import home from "../../../assets/image/nav.jpg"

const Logo = (props) => {
  return (
    <>
      <div className="logo">
        <img
          src={home}
          style={{ width: "50px" }}
          className="img-fluid logo-img"
          alt="img4"
        />
        <svg
          width="40"
          height="43"
          className={`${props.color === true ? "text-primary" : ""}`}
          viewBox="0 0 60 63"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        />
      </div>
      <div className="logo-hover">
        <img
          src={home}
          className="img-fluid logo-img"
          style={{ width: "50px" }}
          alt="img4"
        />
        <span>Admin panel</span>
      </div>
    </>
  );
};

export default Logo;
