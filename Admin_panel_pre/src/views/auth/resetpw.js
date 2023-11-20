import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Form, FormikProvider, useFormik } from "formik";

import FormikController from "../../components/controls/FormikController";
import { actions as auth } from "../../redux/auth/authAction";
import Card from "../../components/card";

const initialState = {
  current_password: "",
  new_password: "",
  rePassword: "",
};
const Resetpw = (props) => {
  const navigate = useNavigate();
  const [initFormData] = useState(initialState);

  const validationSchema = Yup.object({
    current_password: Yup.string().required().min(3).label("Current Password"),
    new_password: Yup.string().required().min(3).label("New Password"),
    rePassword: Yup.string().required().min(10).label("Re-enter Password"),
  });

  const userEmail = localStorage.getItem("email");

  const onSubmit = (values) => {
    values.email = userEmail;

    if (values.current_password && values.new_password && values.email) {
      props.actions.resetPassword(values);
      navigate("/user/profile");
      localStorage.removeItem("email");
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/user/profile");
    localStorage.removeItem("email");
  };

  const formik = useFormik({
    initialValues: initFormData,
    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit: (values) => onSubmit(values),
  });

  const { handleChange, handleSubmit } = formik;

  return (
    <Row>
      <Col xl="9" lg="8" style={{ width: "100%" }}>
        <Card>
          <Card.Header className="d-flex justify-content-between">
            <div className="header-title">
              <h4 className="card-title">Reset Password</h4>
            </div>
          </Card.Header>
          <Card.Body>
            <div className="new-user-info">
              <FormikProvider value={formik}>
                <Form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-6">
                      <FormikController
                        control="input"
                        type="password"
                        name="current_password"
                        classname="form-control"
                        label="Current Password "
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-6">
                      <FormikController
                        control="input"
                        type="password"
                        name="new_password"
                        classname="form-control"
                        label="New Password "
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-6">
                      <FormikController
                        control="input"
                        type="password"
                        name="rePassword"
                        classname="form-control"
                        label="Confirm Password "
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <Button
                    type="submit"
                    variant="primary"
                    style={{ marginTop: "10px" }}
                  >
                    Reset
                  </Button>
                  <Button
                    className="btn btn-btn btn-primary "
                    style={{ marginLeft: "17px", marginTop: "10px" }}
                    onClick={handleCancel}
                  >
                    Cancel
                  </Button>
                </Form>
              </FormikProvider>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};
const mapDispatchToProps = (dispatch) => ({
  actions: { ...bindActionCreators(auth, dispatch) },
});

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, mapDispatchToProps)(Resetpw);
