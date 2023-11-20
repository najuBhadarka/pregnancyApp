import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

// img
import error03 from "../../assets/images/error/03.png";
import error04 from "../../assets/images/error/04.png";
import error06 from "../../assets/images/error/06.png";

const Error500 = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <Container className="text-center mt-5">
        <img src={error03} className="img-fluid w-25" alt="" />
        <img src={error06} className="img-fluid w-25" alt="" />
        <img src={error04} className="img-fluid cookie-1" alt="" />
        <h2 className="mb-0 mt-4">Internal Server Error</h2>
        <p className="mt-2">
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
          laying out print, graphic or web designs.
        </p>
        <div className="d-flex justify-content-center">
          <Link to="/" className="btn btn-primary rounded">
            Back to Home
          </Link>
        </div>
      </Container>
      <div className="box">
        <div className="c xl-circle">
          <div className="c lg-circle">
            <div className="c md-circle">
              <div className="c sm-circle">
                <div className="c xs-circle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error500;
