import React from "react";

const CategoryMenu = (props) => {
  return (
    <div className="card card-white dish-card profile-img mb-0">
      <div className="profile-img21">
        <img
          src={props.categoryImg1}
          className="img-fluid rounded-pill avatar-170 blur-shadow position-bottom"
          alt="profileImage"
        />
        <img
          src={props.categoryImg2}
          className="img-fluid rounded-pill avatar-170 hover-image "
          alt="profileImage"
          data-iq-gsap="onStart"
          data-iq-opacity="0"
          data-iq-scale=".6"
          data-iq-rotate="180"
          data-iq-duration="1"
          data-iq-delay=".6"
          data-iq-trigger="scroll"
          data-iq-ease="none"
        />
      </div>
      <div className="card-body menu-image">
        <h6 className="heading-title fw-bolder mt-4 mb-0">
          {props.categoryTitle}
        </h6>
        <div className="card-rating stars-ratings"></div>
        <div className="d-flex justify-content-between mt-3">
          <div className="d-flex align-items-center">
            <span className="text-primary fw-bolder me-2">
              {props.oldPrice}
            </span>
            <small className="text-decoration-line-through">
              {props.categoryPrice}
            </small>
          </div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              className="circle-1"
              width="24"
              height="24"
              rx="12"
              fill="currentColor"
            />
            <rect
              className="circle-2"
              x="11.168"
              y="7"
              width="1.66667"
              height="10"
              rx="0.833333"
              fill="currentColor"
            />
            <rect
              className="circle-3"
              x="7"
              y="12.834"
              width="1.66666"
              height="10"
              rx="0.833332"
              transform="rotate(-90 7 12.834)"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CategoryMenu;
