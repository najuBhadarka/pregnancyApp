import { Form, FormikProvider, useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Card, Col, Nav, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import FormikController from "../../components/controls/FormikController";
import { actions as user } from "../../redux/details/userDetailsAction";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import OrderList from "../order/order-list";
import * as moment from "moment";

const initialState = {
  first_name: "",
  last_name: "",
  description: "",
  mobile: "",
  username: "",
  email: "",
  dob: "",
  anniversaryDate: "",
  dateOfJoining: "",
  gender: "",
  loyaltypoint: "",
};

const UserSummary = (props) => {
  const [initFormData, setInitFormData] = useState(initialState);
  const [isNavActive, setIsNavActive] = useState("PersonalInfo");
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      props.actions.getUserDetailes({ id: id });
    }
  }, [id, props.actions]);

  useEffect(() => {
    const user = {
      first_name: props?.user?.data?.first_name || "NA",
      last_name: props?.user?.data?.last_name || "NA",
      description: props?.user?.data?.description || "NA",
      mobile: props?.user?.data?.mobile || "NA",
      username: props?.user?.data?.username || "NA",
      email: props?.user?.data?.email || "NA",
      dob: props?.user?.data?.birthdate || "NA",
      dateOfJoining:
        moment(props?.user?.data?.createdAt).format("DD-MM-YYYY") || "NA",
      gender: props?.user?.data?.gender || "NA",
      anniversaryDate: "NA",
      loyaltypoint:
        props?.user?.data?.loyaltypoint == 0
          ? 0
          : props?.user?.data?.loyaltypoint || "NA",
    };
    setInitFormData(user);
  }, [props?.user, props.actions]);

  const formik = useFormik({
    initialValues: initFormData,
    enableReinitialize: true,
  });

  return (
    <Row>
      <Col xl="9" lg="8" style={{ width: "100%" }}>
        <Card>
          <Card.Body>
            <Nav variant="tabs" defaultActiveKey="/home">
              <Nav.Item>
                <Nav.Link
                  href="#"
                  active={isNavActive == "PersonalInfo" ? true : false}
                  onClick={() => setIsNavActive("PersonalInfo")}
                >
                  Personal Info
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="link-1"
                  active={isNavActive == "OrderHistory" ? true : false}
                  onClick={() => setIsNavActive("OrderHistory")}
                >
                  Order History
                </Nav.Link>
              </Nav.Item>
            </Nav>
            {isNavActive == "PersonalInfo" ? (
              <div className="new-user-info">
                <FormikProvider value={formik}>
                  <Form>
                    <div className="row">
                      <div className="col-6">
                        <FormikController
                          control="input"
                          type="text"
                          name="first_name"
                          classname="form-control"
                          label="Full Name "
                          disabled={true}
                        />
                      </div>
                      <div className="col-6">
                        <FormikController
                          control="input"
                          type="text"
                          name="last_name"
                          classname="form-control"
                          label="Last Name "
                          disabled={true}
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
                          disabled={true}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-6">
                        <FormikController
                          control="input"
                          type="text"
                          name="email"
                          classname="form-control"
                          label="Email "
                          disabled={true}
                        />
                      </div>
                      <div className="col-6">
                        <FormikController
                          control="input"
                          type="text"
                          name="dob"
                          classname="form-control"
                          label="Date of Birth"
                          disabled={true}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-6">
                        <FormikController
                          control="input"
                          type="text"
                          name="anniversaryDate"
                          classname="form-control"
                          label="Anniversary Date "
                          disabled={true}
                        />
                      </div>
                      <div className="col-6">
                        <FormikController
                          control="input"
                          type="text"
                          name="dateOfJoining"
                          classname="form-control"
                          label="Date Of Joining"
                          disabled={true}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-6">
                        <FormikController
                          control="input"
                          type="text"
                          name="gender"
                          classname="form-control"
                          label="Gender"
                          disabled={true}
                        />
                      </div>
                      <div className="col-6">
                        <FormikController
                          control="input"
                          type="text"
                          name="loyaltypoint"
                          classname="form-control"
                          label="Loyalty Point"
                          disabled={true}
                        />
                      </div>
                    </div>
                    <hr />
                  </Form>
                </FormikProvider>
              </div>
            ) : (
              <OrderList isUserTab={true} paramsId={id} />
            )}
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
  user: state.userDetails,
});

export default connect(mapStateToProps, mapDispatchToProps)(UserSummary);
