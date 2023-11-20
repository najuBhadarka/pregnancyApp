import React from "react";

export const CardBox = (props) => {
  return (
    <div className="cardBox">
      <div className="containerCard">
        <h4>
          <b>{props.title}</b>
        </h4>
        <p>{props.count}</p>
      </div>
    </div>
  );
};
