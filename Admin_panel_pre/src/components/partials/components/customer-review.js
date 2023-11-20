import React from "react-bootstrap";

const CustomerReview = (props) => {
  return (
    <div className="d-flex">
      <img
        src={props.customerImg}
        className="img-fluid avatar-rounded avatar-40"
        alt="profileimage"
      />
      <div className="ms-2 w-100">
        <div className="d-flex justify-content-between ">
          <h6 className="mb-1 heading-title fw-bolder">
            {props.customerTitle}
          </h6>
          <small className="text-dark">{props.customersubTitle}</small>
        </div>
        <div className="d-flex mb-2">
          <div className="card-rating stars-ratings"></div>
        </div>
        <small className="text-dark">{props.customerText}</small>
      </div>
    </div>
  );
};

export default CustomerReview;
