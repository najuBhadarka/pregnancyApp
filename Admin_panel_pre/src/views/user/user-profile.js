import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Form, FormikProvider, useFormik } from "formik";

import defaultImage from "../../assets/images/avatars/default-user-img.png";
import FormikController from "../../components/controls/FormikController";
import { actions as user } from "../../redux/user/userAction";
import { API_URL } from "../../utils/api";
import Card from "../../components/card";

const initialState = {
  first_name: "",
  last_name: "",
  description: "",
  mobile: "",
  username: "",
  email: "",
  file: [],
};

const UserProfile = (props) => {
  const [image, setImage] = useState("");
  const [userData, setUserData] = useState({});
  const [state, setState] = useState("loading");
  const [fieldDisabled, setFieldDisabled] = useState(true);
  const [initFormData, setInitFormData] = useState(initialState);

  const token = document?.cookie
    ?.split(";")
    ?.find((row) => row.startsWith("token="))
    ?.split("=")[1];

  useEffect(() => {
    const user = {
      first_name: props?.user?.data?.firstName,
      last_name: props?.user?.data?.lastName,
      mobile: props?.user?.data?.contact,
      username: props?.user?.data?.userName,
      email: props?.user?.data?.email,
    };
    setUserData(props?.user?.data);
    setInitFormData(user);
  }, [props?.user, props.actions]);

  const validationSchema = Yup.object({
    first_name: Yup.string().required().min(3).label("Full Name"),
    last_name: Yup.string().required().min(3).label("Last Name"),
    mobile: Yup.string().required().min(10).label("Contact Number"),
    username: Yup.string().required().min(3).label("User Name"),
    email: Yup.string()
      .email("Enter a valid email address")
      .required()
      .label("Email"),
    // file: Yup.string().required().label("Image"),
  });

  const handleClick = () => {
    setFieldDisabled(false);
    setState("updating");
  };

  const handleCancel = () => {
    setFieldDisabled(true);
    setImage("");
    setInitFormData(props?.user?.data);
  };

  const onSubmit = (values) => {
    setFieldDisabled(true);
    setState("loading");

    const formData = new FormData();

    formData.append("first_name", values.firstName);
    formData.append("last_name", values.lastName);
    formData.append("mobile", values.contact);
    formData.append("username", values.userName);
    formData.append("email", values.email);
    if (values.file) {
      formData.append("file", image ? image : values.file);
    }

    props.actions.updateUser({
      body: formData,
      ids: userData.id,
      callback: () => {
        props.actions.getUser(token);
      },
    });
  };

  const formik = useFormik({
    initialValues: initFormData,
    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit: (values) => onSubmit(values),
  });

  const { handleChange, handleSubmit } = formik;

  let role_type;

  switch (userData?.role_id) {
    case 1:
      role_type = "Admin";
      break;

    case 2:
      role_type = "Restaurant Admin";
      break;

    case 3:
      role_type = "Customer";
      break;

    case 4:
      role_type = "Delivery Partner";
      break;

    default:
      break;
  }

  return (
    <Row>
      <Col lg="12">
        <div className="iq-main">
          <Card
            className="mb-0 iq-content rounded-bottom"
            style={{ marginTop: "-103px" }}
          >
            <div className="d-flex flex-wrap align-items-center justify-content-between mx-3 my-3">
              <div className="d-flex flex-wrap align-items-center">
                <div className="profile-img22 position-relative me-3 mb-3 mb-lg-0">
                  <img
                    src={
                      userData.image
                        ? `${API_URL}/static/profile/${userData.image}`
                        : defaultImage
                    }
                    className="img-fluid avatar avatar-100 avatar-rounded"
                    alt="img"
                  />
                </div>
                <div className="d-flex align-items-center mb-3 mb-sm-0">
                  <div>
                    <h6 className="me-2 text-primary">
                      {userData?.firstName} {userData?.lastName}
                    </h6>
                  </div>
                  <div className="ms-4">
                    <p className="mb-0 text-secondary">{userData?.role}</p>
                    <p className="mb-0 text-danger"> {userData?.userName} </p>
                    <p className="me-2 mb-0 text-primary"> {userData?.email} </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Col>

      <Col xl="9" lg="8" style={{ width: "100%" }}>
        <Card>
          <Card.Header className="d-flex justify-content-between">
            <div className="header-title">
              <h4 className="card-title">Admin Information</h4>
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
                        name="first_name"
                        classname="form-control"
                        label="Full Name "
                        onChange={handleChange}
                        disabled={fieldDisabled}
                      />
                    </div>
                    <div className="col-6">
                      <FormikController
                        control="input"
                        type="text"
                        name="last_name"
                        classname="form-control"
                        label="Last Name "
                        onChange={handleChange}
                        disabled={fieldDisabled}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-6">
                      <FormikController
                        control="input"
                        type="text"
                        name="username"
                        classname="form-control"
                        label="User Name "
                        onChange={handleChange}
                        disabled={true}
                      />
                    </div>

                    <div className="col-6">
                      <FormikController
                        control="input"
                        type="text"
                        name="mobile"
                        classname="form-control"
                        label=" Contact Number "
                        onChange={handleChange}
                        disabled={true}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-6">
                      <FormikController
                        control="input"
                        type=""
                        name="email"
                        classname="form-control"
                        label="Email "
                        onChange={handleChange}
                        disabled={true}
                      />
                    </div>

                  </div>

                  {props?.user?.error ? (
                    <span
                      style={{
                        color: "Red",
                        fontSize: "smaller",
                      }}
                    >
                      {props?.user?.error}
                    </span>
                  ) : null}

                  {state === "loading" ? (
                    <button
                      type="button"
                      className="btn btn-btn btn-primary"
                      style={{
                        width: "110px",
                        marginLeft: "auto",
                      }}
                      onClick={handleClick}
                    >
                      Update
                    </button>
                  ) : (
                    <>
                      <button
                        type="submit"
                        className="btn btn-btn btn-primary"
                        style={{
                          width: "100px",
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
                          width: "100px",
                          marginRight: "5px",
                        }}
                        onClick={handleCancel}
                      >
                        Cancel
                      </button>
                    </>
                  )}

                  <Link
                    to="/auth/resetpw"
                    onClick={() =>
                      localStorage.setItem("email", userData?.email)
                    }
                    style={{ float: "right" }}
                  >
                    Reset Password ?
                  </Link>
                  <hr />
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

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
