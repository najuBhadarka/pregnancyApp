import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// img
import error01 from "../../assets/images/error/01.png";
import error02 from "../../assets/images/error/02.png";

const Error404 = () => {
  const navigate = useNavigate();
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <Container className="text-center mt-5">
        <Row>
          <Col lg="12">
            <img src={error01} className="img-fluid w-25" alt="" />
            <img src={error02} className="img-fluid w-25 px-5" alt="" />
            <img src={error01} className="img-fluid w-25" alt="" />
            <h2 className="mb-0 mt-4">Page Not Found.</h2>
            <div className="d-flex justify-content-center">
              <Button
                className="btn btn-btn btn-primary "
                style={{
                  marginTop: "30px",
                  zIndex: "90",
                }}
                onClick={() => navigate(-1)}
              >
                Back to Previous Page
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Error404;
