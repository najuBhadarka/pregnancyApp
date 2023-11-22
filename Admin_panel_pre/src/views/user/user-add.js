import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Form, FormikProvider, useFormik } from "formik";

import FormikController from "../../components/controls/FormikController";
import { actions as user } from "../../redux/user/userAction";
import Card from "../../components/card";

const initialState = {
  firstName: "",
  lastName: "",
  contact: "",
  userName: "",
  email: "",
  DOB: "",
};

const UserAdd = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initFormData, setInitFormData] = useState(initialState);

  useEffect(() => {
    if (props.mode == "Update" && id) {
      const user = {
        firstName: props?.user?.editUserDetails?.firstName || "",
        lastName: props?.user?.editUserDetails?.lastName || "",
        contact: props?.user?.editUserDetails?.contact || "",
        userName: props?.user?.editUserDetails?.userName || "",
        email: props?.user?.editUserDetails?.email || "",
        DOB: props?.user?.editUserDetails?.DOB || "",
      };
      setInitFormData(user);
    }
  }, [props?.user?.editUserDetails]);

  const validationSchema = Yup.object({
    firstName: Yup.string().required().min(3).label("Full Name"),
    lastName: Yup.string().required().min(3).label("Last Name"),
    contact: Yup.string().required().min(10).label("Contact Number"),
  });

  const onSubmit = (values) => {
    if (props.mode == "Update") {
      props.actions.updateUser({
        body: values,
        ids: id,
        callback: () => {
          navigate("/user/list");
        },
      });
    } else {
      props.actions.addUser({ body: values });
      navigate("/user/list");
    }
  };

  useEffect(() => {
    if (props.mode == "Update") {
      props.actions.getSelectedUserDetails(id);
    }
  }, [id]);

  const formik = useFormik({
    initialValues: initFormData,
    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit: (values) => onSubmit(values),
  });

  const { handleChange, handleSubmit } = formik;
  console.log("props?.mode", props?.mode);
  return (
    <Row>
      <Col xl="9" lg="8" style={{ width: "100%" }}>
        <Card>
          <Card.Header className="d-flex justify-content-between">
            <div className="header-title">
              <h4 className="card-title">
                {props?.mode == "Add" ? "Add User" : "Update User"}
              </h4>
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
                        type="text"
                        name="firstName"
                        classname="form-control"
                        label="First Name "
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-6">
                      <FormikController
                        control="input"
                        type="text"
                        name="lastName"
                        classname="form-control"
                        label="Last Name "
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="row">
                    {props?.mode == "Add" ? (
                      <div className="col-6">
                        <FormikController
                          control="input"
                          type="text"
                          name="userName"
                          classname="form-control"
                          label="User Name "
                          onChange={handleChange}
                        />
                      </div>
                    ) : null}

                    <div className="col-6">
                      <FormikController
                        control="input"
                        type="number"
                        name="contact"
                        classname="form-control"
                        label=" Contact Number "
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-6">
                      <FormikController
                        control="input"
                        type="date"
                        name="DOB"
                        classname="form-control"
                        label="DOB "
                        onChange={handleChange}
                      />
                    </div>

                    {props?.mode == "Add" ? (
                      <div className="col-6">
                        <FormikController
                          control="input"
                          type="email"
                          name="email"
                          classname="form-control"
                          label="Email "
                          onChange={handleChange}
                        />
                      </div>
                    ) : null}

                    {props?.mode == "Add" ? (
                      <div className="col-6">
                        <FormikController
                          control="input"
                          type="password"
                          name="password"
                          classname="form-control"
                          label="Password "
                          onChange={handleChange}
                        />
                      </div>
                    ) : null}
                  </div>

                  <button
                    type="submit"
                    className="btn btn-btn btn-primary"
                    style={{
                      width: "150px",
                      marginLeft: "auto",
                      marginRight: "5px",
                    }}
                  >
                    Save
                  </button>
                  <button
                    type="text"
                    className="btn btn-btn btn-primary"
                    style={{
                      width: "150px",
                      marginRight: "5px",
                    }}
                    onClick={() => navigate("/user/list")}
                  >
                    Cancel
                  </button>
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
  actions: { ...bindActionCreators(user, dispatch) },
});

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(UserAdd);
