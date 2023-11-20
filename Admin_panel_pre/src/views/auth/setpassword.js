import React, { useEffect } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../components/card";
import TextField from "../../components/controls/TextField";
import * as Yup from "yup";
import { Formik } from "formik";
import { actions } from "../../redux/auth/authAction";

// gsap
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// img
import auth01 from "../../assets/images/auth/01.png";
import auth02 from "../../assets/images/auth/02.png";
import auth03 from "../../assets/images/auth/03.png";
import auth04 from "../../assets/images/auth/04.png";
import auth05 from "../../assets/images/auth/05.png";
import auth06 from "../../assets/images/auth/06.png";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const SetPassword = (props) => {
  useEffect(() => {
    if (typeof gsap !== typeof undefined) {
      if (typeof ScrollTrigger !== typeof undefined) {
        gsap.registerPlugin(ScrollTrigger);
      }

      const gsapAnimate = {
        onStart: (elem) => {
          const option = {
            opacity: 0,
            scale: 1,
            position: {
              x: 0,
              y: 0,
            },
            ease: "",
            duration: 1,
            delay: 0.4,
            rotate: 0,
          };

          option.position.x = gsapAnimate.validValue(
            elem.dataset.iqPositionX,
            0
          );

          option.position.y = gsapAnimate.validValue(
            elem.dataset.iqPositionY,
            0
          );

          option.rotate = gsapAnimate.validValue(elem.dataset.iqRotate, 0);

          option.scale = gsapAnimate.validValue(elem.dataset.iqScale, 1);

          option.opacity = gsapAnimate.validValue(elem.dataset.iqOpacity, 0);

          option.delay = gsapAnimate.validValue(elem.dataset.iqDelay, 0.4);

          option.duration = gsapAnimate.validValue(
            elem.dataset.iqDuration,
            1.5
          );

          option.ease = gsapAnimate.validValue(elem.dataset.iqEase, "");

          const setOption = {
            opacity: option.opacity,
            scale: option.scale,
            x: option.position.x,
            y: option.position.y,
            ease: option.ease,
            rotate: option.rotate,
            duration: option.duration,
            delay: option.delay,
          };

          if (typeof ScrollTrigger !== typeof undefined) {
            if (elem.dataset.iqTrigger === "scroll") {
              const scrub =
                elem.dataset.iqScrollScrub === "true" ? true : false;

              setOption.scrollTrigger = {
                trigger: elem,
                start: () => "top 95%",
                scrub: scrub,
                markers: false,
              };
            }
          }

          gsap.from(elem, setOption);
        },

        validValue: (attr, defaultVal) => {
          if (attr !== undefined && attr !== null) {
            return attr;
          }
          return defaultVal;
        },
      };

      const gsapElem = document.querySelectorAll('[data-iq-gsap="onStart"]');

      Array.from(gsapElem, (elem) => {
        gsapAnimate.onStart(elem);
        return null;
      });

      // Home Page 1 banner

      if (document.querySelectorAll("#auth-login").length) {
        gsap.from(".first-img", {
          opacity: 0,
          scale: 0.8,
          rotate: -45,
          ease: "power1.out",
          duration: 1,
          delay: 0.4,
        });
        gsap.from(".second-img", {
          opacity: 0,
          scale: 0.8,
          rotate: -45,
          ease: "power1.out",
          duration: 1,
          delay: 0.6,
        });
        gsap.from(".third-img", {
          opacity: 0,
          scale: 0.8,
          rotate: -45,
          ease: "power1.out",
          delay: 0.8,
        });
        gsap.from(".fourth-img", {
          opacity: 0,
          scale: 0.8,
          rotate: -45,
          ease: "power1.out",
          duration: 1,
          delay: 1.2,
        });
        gsap.from(".fifth-img", {
          opacity: 0,
          scale: 0.8,
          rotate: -45,
          ease: "power1.out",
          duration: 1,
          delay: 1.4,
        });
        gsap.from(".six-img", {
          opacity: 0,
          scale: 0.8,
          rotate: -45,
          ease: "power1.out",
          duration: 1,
          delay: 1.6,
        });
        gsap.from(".seventh-img", {
          opacity: 0,
          scale: 0.8,
          rotate: -45,
          ease: "power1.out",
          duration: 1,
          delay: 1.6,
        });
        gsap.from(".eight-img", {
          opacity: 0,
          scale: 0.8,
          rotate: -45,
          ease: "power1.out",
          duration: 1,
          delay: 1.8,
        });
      }
    }
  }, []);

  const navigate = useNavigate();

  const userpassword = Yup.object().shape({
    otp: Yup.string().max(6).min(6).required().label("OTP"),
    password: Yup.string()
      .required()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$$/,
        "Password should contains atleast 8 charaters and containing uppercase,lowercase, numbers and special character !"
      )
      .label("Password"),
    rePassword: Yup.string()
      .required()
      .oneOf([Yup.ref("password"), null], "Passwords doest not match")
      .label("Re-enter password"),
  });

  const userEmail = localStorage.getItem("email");

  const handleSubmit = (values) => {
    values.email = userEmail;

    if (values.email && values.password && values.otp) {
      props.actions.newPassword({
        body: values,
        callback: () => navigate("/auth/sign-in"),
      });
      localStorage.removeItem("email");
    }
  };

  return (
    <>
      <section className="container-fluid bg-circle" id="auth-login">
        <Row className="align-items-center">
          <Col md="12" lg="7" xl="4">
            <Row className="justify-content-center">
              <Col md="10">
                <div className="d-flex justify-content-center mb-0">
                  <Card.Body className="text-center">
                    <Link to="/">
                      <img
                        src={""}
                        className="img-fluid logo-img mb-4"
                        alt="img3"
                      />
                    </Link>
                    <h2 className="mb-2 text-center">Set New Password</h2>
                    <p className=" text-center">
                      Enter OTP recieved on {userEmail}.
                    </p>
                    <Formik
                      initialValues={{
                        otp: "",
                        password: "",
                        rePassword: "",
                        email: "",
                      }}
                      validationSchema={userpassword}
                      onSubmit={async (values, errors) => {
                        delete values.rePassword;
                        handleSubmit(values, errors);
                      }}
                    >
                      {({ handleSubmit, handleChange, values }) => (
                        <Form onSubmit={handleSubmit}>
                          <Row className="text-start">
                            <Col lg="12">
                              <Form.Group className="form-group floating-label">
                                <TextField
                                  id="otp"
                                  name="otp"
                                  type="number"
                                  placeholder=""
                                  fieldLabel="OTP"
                                  value={values.otp}
                                  onChange={handleChange}
                                  style={{
                                    color: "red",
                                    fontSize: "smaller",
                                  }}
                                  classname="form-control form-control-sm"
                                />
                                {props?.auth?.error ? (
                                  <span
                                    style={{
                                      color: "Red",
                                      fontSize: "smaller",
                                    }}
                                  >
                                    {props?.auth?.error}
                                  </span>
                                ) : null}
                              </Form.Group>

                              {values.otp.toString().length === 6 ? (
                                <>
                                  <Form.Group className="form-group floating-label">
                                    <TextField
                                      id="password"
                                      name="password"
                                      type="password"
                                      placeholder=""
                                      fieldLabel="New Password"
                                      value={values.password}
                                      onChange={handleChange}
                                      style={{
                                        color: "red",
                                        fontSize: "smaller",
                                      }}
                                      classname="form-control form-control-sm"
                                    />
                                  </Form.Group>

                                  <Form.Group className="form-group floating-label">
                                    <TextField
                                      id="rePassword"
                                      name="rePassword"
                                      type="password"
                                      placeholder=""
                                      fieldLabel="Confirm Password"
                                      style={{
                                        color: "red",
                                        fontSize: "smaller",
                                      }}
                                      classname="form-control form-control-sm"
                                    />
                                  </Form.Group>
                                </>
                              ) : null}
                            </Col>
                          </Row>
                          <Button type="submit" variant="primary">
                            Reset
                          </Button>
                        </Form>
                      )}
                    </Formik>
                  </Card.Body>
                </div>
              </Col>
            </Row>
          </Col>
          <Col
            md="12"
            lg="5"
            xl="8"
            className="d-lg-block d-none vh-100 overflow-hidden"
          >
            <div>
              <img
                src={auth01}
                className="hover-img rounded-circle first-img"
                alt="images"
              />
              <img
                src={auth02}
                className="hover-img rounded-circle second-img"
                alt="images"
              />
              <img
                src={auth03}
                className="hover-img rounded-circle third-img"
                alt="images"
              />
              <img
                src={auth04}
                className="hover-img rounded-circle fourth-img"
                alt="images"
              />
              <img
                src={auth05}
                className="hover-img rounded-circle fifth-img"
                alt="images"
              />
              <img
                src={auth06}
                className="hover-img rounded-circle six-img"
                alt="images"
              />
              <img
                src={auth01}
                className="hover-img rounded-circle seventh-img"
                alt="images"
              />
              <img
                src={auth02}
                className="hover-img rounded-circle eight-img"
                alt="images"
              />
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  actions: { ...bindActionCreators(actions, dispatch) },
});

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, mapDispatchToProps)(SetPassword);
