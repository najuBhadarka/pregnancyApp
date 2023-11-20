import React from "react";

const Card = (props) => (
  <div
    className={`card ${props.className ? props.className : ""}`}
    style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
  >
    {props.children}
  </div>
);

Card.Header = (props) => (
  <div
    className={`card-header d-flex justify-content-between ${
      props.className ? props.className : ""
    }`}
  >
    {props.children}
  </div>
);

Card.Body = (props) => (
  <div className={`card-body ${props.className ? props.className : ""}`}>
    {props.children}
  </div>
);

Card.Footer = (props) => (
  <div className={`card-footer ${props.className ? props.className : ""}`}>
    {props.children}
  </div>
);

Card.Header.Title = (props) => (
  <div className={`header-title ${props.className ? props.className : ""}`}>
    {props.children}
  </div>
);

Card.Header.Action = (props) => (
  <div className={`header-action ${props.className ? props.className : ""}`}>
    {props.children}
  </div>
);

export default Card;
