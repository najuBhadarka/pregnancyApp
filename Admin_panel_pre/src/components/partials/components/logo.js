import React from "react";

const Logo = (props) => {
  return (
    <>
      <div className="logo">
        <img
          src={""}
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
          src={""}
          className="img-fluid logo-img"
          style={{ width: "50px" }}
          alt="img4"
        />
        <span>Aanch</span>
      </div>
    </>
  );
};

export default Logo;
