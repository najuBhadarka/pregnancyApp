import React from "react";
import { Form, FormikProvider } from "formik";
import { Button } from "react-bootstrap";

import Card from "../card";

const FormWrapper = (props) => {
  const {
    formik,
    title,
    handleSubmit,
    children,
    buttonTitle,
    cancelClick,
    loading,
  } = props;

  return (
    <FormikProvider value={formik}>
      <Card
        className="mb-0 iq-content rounded-bottom"
        style={{ marginTop: "-103px" }}
      >
        <Form onSubmit={handleSubmit}>
          <Card.Header className="d-flex justify-content-between">
            <h3 className="header-title">{title}</h3>
          </Card.Header>
          <Card.Body>{children}</Card.Body>
          <Card.Body>
            <Button type="submit" disabled={loading} variant="btn btn-primary">
              {loading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  />{" "}
                  Please wait ...
                </>
              ) : (
                <span>{buttonTitle}</span>
              )}
            </Button>
            <Button
              className="btn btn-btn btn-primary "
              style={{ marginLeft: "17px" }}
              onClick={cancelClick}
            >
              Cancel
            </Button>
          </Card.Body>
        </Form>
      </Card>
    </FormikProvider>
  );
};

export default FormWrapper;
