import React from "react";
import { Row, Col, Image, Form, Button } from "react-bootstrap";
import Card from "../../components/card";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik } from "formik";
import { actions as user } from "../../redux/user/userAction";

// img

import TextField from "../../components/controls/TextField";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const UserAdd = (props) => {
  const navigate = useNavigate();

  const userAdd = Yup.object().shape({
    firstName: Yup.string().required().min(3).label("Full Name"),
    lastName: Yup.string().required().min(3).label("Last Name"),
    contact: Yup.string().required().min(10).label("Contact Number"),
    email: Yup.string()
      .email("Enter a valid email address")
      .required()
      .label("Email"),
    userName: Yup.string().required().min(3).label("User Name"),
    password: Yup.string()
      .required()
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,20}$/,
        "Password should contains atleast 8 charaters and containing uppercase,lowercase and numbers !"
      )
      .label("Password"),
  });

  const handleSubmit = (values) => {
    props.actions.addUser({body: values});
    navigate("/user/list");
  };

  return (
    <div>
      <Row>
        <Col xl="12" lg="8">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Add New User</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                  contact: "",
                  email: "",
                  userName: "",
                  password: "",
                  DOB:""
                }}
                validationSchema={userAdd}
                onSubmit={async (values, errors) => {
                  handleSubmit(values, errors);
                }}
              >
                {({ handleSubmit, handleChange, values }) => (
                  <div className="new-user-info">
                    <Form onSubmit={handleSubmit}>
                      <div className="row">
                        <Form.Group className="col-md-6 form-group">
                          <TextField
                            id="firstName"
                            name="firstName"
                            value={values.firstName}
                            onChange={handleChange}
                            type="text"
                            placeholder=""
                            fieldLabel="First Name"
                            style={{
                              color: "red",
                              fontSize: "smaller",
                            }}
                            classname="form-control form-control-sm"
                          />
                        </Form.Group>
                        <Form.Group className="col-md-6 form-group">
                          <TextField
                            id="lastName"
                            name="lastName"
                            value={values.lastName}
                            onChange={handleChange}
                            type="text"
                            placeholder=""
                            fieldLabel="Last Name"
                            style={{
                              color: "red",
                              fontSize: "smaller",
                            }}
                            classname="form-control form-control-sm"
                          />
                        </Form.Group>
                        <Form.Group className="col-md-6 form-group">
                          <TextField
                            id="userName"
                            name="userName"
                            value={values.userName}
                            onChange={handleChange}
                            type="text"
                            placeholder=""
                            fieldLabel="User Name"
                            style={{
                              color: "red",
                              fontSize: "smaller",
                            }}
                            classname="form-control form-control-sm"
                          />
                        </Form.Group>
                        <Form.Group className="col-md-6  form-group">
                          <TextField
                            id="contact"
                            name="contact"
                            value={values.contact}
                            onChange={handleChange}
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
                        </Form.Group>
                        <Form.Group className="col-md-6  form-group">
                          <TextField
                            id="DOB"
                            name="DOB"
                            value={values.DOB}
                            onChange={handleChange}
                            type="text"
                            placeholder=""
                            fieldLabel="Date of Birth"
                            style={{
                              color: "red",
                              fontSize: "smaller",
                            }}
                            classname="form-control form-control-sm"
                            maxLength={10}
                          />
                        </Form.Group>
                        <Form.Group className="col-md-6  form-group">
                          <TextField
                            id="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            type="email"
                            placeholder=""
                            fieldLabel="Email"
                            style={{
                              color: "red",
                              fontSize: "smaller",
                            }}
                            classname="form-control form-control-sm"
                          />
                        </Form.Group>
                      </div>
                      <div className="row">
                        <Form.Group className="col-md-6 form-group">
                          <TextField
                            id="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            type="password"
                            placeholder=""
                            fieldLabel="Password"
                            style={{
                              color: "red",
                              fontSize: "smaller",
                            }}
                            classname="form-control form-control-sm"
                          />
                        </Form.Group>
                      </div>
                      <Button type="submit" variant="btn btn-primary">
                        Add New User
                      </Button>
                    </Form>
                  </div>
                )}
              </Formik>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  actions: { ...bindActionCreators(user, dispatch) },
});

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(UserAdd);
