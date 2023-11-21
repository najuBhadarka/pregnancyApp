import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik } from "formik";
import Card from "../../components/card";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actions } from "../../redux/auth/authAction";
import home from "../../assets/image/home1.jpg"
// img
import TextField from "../../components/controls/TextField";

const SignIn = (props) => {
  const navigate = useNavigate();

  const signInSchema = Yup.object().shape({
    userName: Yup.string()
      .required(),
    password: Yup.string()
      .required()
      .label("Password"),
  });

  const handleSubmit = (values) => {
    if (values.userName && values.password) {
      props.actions.signIn({
        body: values,
        callback: () => {
          navigate(-1);
        },
      });
    }
  };

  return (
    <section className="container-fluid bg-circle-login" id="auth-sign">
      <Row className="align-items-center">
        <Col md="12" lg="7" xl="4">
          <Card.Body>
            <Link to="/"></Link>
            <h2 className="mb-2 text-center">Sign In</h2>
            <p className="text-center">Sign in to stay connected.</p>
            <Formik
              initialValues={{ userName: "", password: "" }}
              validationSchema={signInSchema}
              onSubmit={async (values, errors) => {
                handleSubmit(values, errors);
              }}
            >
              {({ isSubmitting, handleSubmit, handleChange, values }) => (
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col lg="12" className="form-group">
                      <TextField
                        id="userName"
                        name="userName"
                        type="text"
                        placeholder=""
                        fieldLabel="UserName"
                        style={{
                          color: "red",
                          fontSize: "smaller",
                        }}
                        classname="form-control form-control-sm"
                        onChange={handleChange}
                      />
                    </Col>
                    <Col lg="12">
                      <TextField
                        id="password"
                        name="password"
                        value={values.password}
                        type="password"
                        placeholder=""
                        fieldLabel="Password"
                        style={{
                          color: "red",
                          fontSize: "smaller",
                        }}
                        autoComplete={values.password}
                        classname="form-control form-control-sm"
                        onChange={handleChange}
                      />
                    </Col>

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

                    <Col lg="12" className="d-flex justify-content-between">
                      <Link to="/auth/recoverpw">Forgot Password?</Link>
                    </Col>
                  </Row>
                  <div className="d-flex justify-content-center">
                    {!isSubmitting && (
                      <Button type="submit" variant="primary">
                        Sign In
                      </Button>
                    )}
                  </div>
                </Form>
              )}
            </Formik>
          </Card.Body>
        </Col>
        <Col
          md="12"
          lg="5"
          xl="8"
          className="d-lg-block d-none vh-100 overflow-hidden"
        >
          <img src={home} className="img-fluid sign-in-img" alt="images" />
        </Col>
      </Row>
    </section>
  );
};

const mapDispatchToProps = (dispatch) => ({
  actions: { ...bindActionCreators(actions, dispatch) },
});

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
