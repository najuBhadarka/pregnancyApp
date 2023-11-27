import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik } from "formik";
import Card from "../../components/card";
import { actions as user } from "../../redux/auth/authAction";
import TextField from "../../components/controls/TextField";

const SignUp = () => {
  const history = useNavigate();

  const signUpSchema = Yup.object().shape({
    fullName: Yup.string().required().min(3).label("Full Name"),
    lastName: Yup.string().required().min(3).label("Last Name"),
    email: Yup.string()
      .email("Enter a valid email address")
      .required()
      .label("Email"),
    phoneNo: Yup.string().required().min(10).label("Contact Number"),
    password: Yup.string()
      .required()
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,16}$/,
        "Password should contains atleast 8 charaters and containing uppercase,lowercase and numbers !"
      )
      .label("Password"),
    conPassword: Yup.string()
      .required()
      .oneOf([Yup.ref("password"), null], "Passwords doest not match")
      .label("Re-enter password"),
  });

  return (
    <section className="container-fluid bg-circle-login">
      <Row className="align-items-center">
        <Col md="12" lg="7" xl="4">
          <div className="d-flex justify-content-center mb-0">
            <Card.Body className="mt-5">
              <Link to="/">
                <img src={""} className="img-fluid logo-img" alt="img5" />
              </Link>
              <h2 className="mb-2 text-center">Sign Up</h2>
              <p className="text-center">Create your Aanch account.</p>
              <Formik
                initialValues={{
                  fullName: "",
                  lastName: "",
                  email: "",
                  phoneNo: "",
                  password: "",
                  conPassword: "",
                }}
                validationSchema={signUpSchema}
                onSubmit={() => history.push("/")}
              >
                <Form>
                  <Row>
                    <Col lg="6">
                      <TextField
                        id="full-name"
                        name="fullName"
                        type="text"
                        placeholder=""
                        fieldLabel="Full Name"
                        style={{
                          color: "red",
                          fontSize: "smaller",
                        }}
                        classname="form-control form-control-sm"
                      />
                    </Col>
                    <Col lg="6">
                      <TextField
                        id="last-name"
                        name="lastName"
                        type="text"
                        placeholder=""
                        fieldLabel="Last Name"
                        style={{
                          color: "red",
                          fontSize: "smaller",
                        }}
                        classname="form-control form-control-sm"
                      />
                    </Col>
                    <Col lg="6" className="form-group">
                      <TextField
                        id="email"
                        name="email"
                        type="email"
                        placeholder=""
                        fieldLabel="Email"
                        style={{
                          color: "red",
                          fontSize: "smaller",
                        }}
                        classname="form-control form-control-sm"
                      />
                    </Col>
                    <Col lg="6">
                      <TextField
                        id="phone number"
                        name="phoneNo"
                        type="text"
                        placeholder=""
                        fieldLabel="Contact Number"
                        style={{
                          color: "red",
                          fontSize: "smaller",
                        }}
                        classname="form-control form-control-sm"
                        maxLength={10}
                      />
                    </Col>
                    <Col lg="6">
                      <TextField
                        id="password"
                        name="password"
                        type="password"
                        placeholder=""
                        fieldLabel="Password"
                        style={{
                          color: "red",
                          fontSize: "smaller",
                        }}
                        classname="form-control form-control-sm"
                      />
                    </Col>
                    <Col lg="6">
                      <TextField
                        id="conPassword"
                        name="conPassword"
                        type="password"
                        placeholder=""
                        fieldLabel="Confirm password"
                        style={{
                          color: "red",
                          fontSize: "smaller",
                        }}
                        classname="form-control form-control-sm"
                      />
                    </Col>
                    <Col lg="12" className="d-flex justify-content-center">
                      <Form.Check className="form-check mb-3">
                        <Form.Check.Input type="checkbox" id="customCheck1" />
                        <Form.Check.Label htmlFor="customCheck1">
                          I agree with the terms of use
                        </Form.Check.Label>
                      </Form.Check>
                    </Col>
                  </Row>
                  <div className="d-flex justify-content-center">
                    <Button type="submit" variant="primary">
                      Sign Up
                    </Button>
                  </div>
                  <p className="text-center my-3">
                    or sign in with other accounts?
                  </p>
                  <div className="d-flex justify-content-center">
                    <ul className="list-group list-group-horizontal list-group-flush">
                      <li className="list-group-item border-0 pb-0">
                        <Link to="#">
                          <img src={""} alt="gm" />
                        </Link>
                      </li>
                      <li className="list-group-item border-0 pb-0">
                        <Link to="#">
                          <img src={""} alt="fb" />
                        </Link>
                      </li>
                      <li className="list-group-item border-0 pb-0">
                        <Link to="#">
                          <img src={""} alt="im" />
                        </Link>
                      </li>
                      <li className="list-group-item border-0 pb-0">
                        <Link to="#">
                          <img src={""} alt="li" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <p className="mt-3 text-center">
                    Already have an Account{" "}
                    <Link to="/auth/sign-in" className="text-underline">
                      Sign In
                    </Link>
                  </p>
                </Form>
              </Formik>
            </Card.Body>
          </div>
        </Col>
        <Col
          md="12"
          lg="5"
          xl="8"
          className="d-lg-block d-none vh-100 overflow-hidden"
        >
          <img src={""} className="img-fluid sign-in-img" alt="images" />
        </Col>
      </Row>
    </section>
  );
};

export default SignUp;
