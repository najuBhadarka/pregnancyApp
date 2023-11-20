import React from "react";
import { Form } from "react-bootstrap";
import { ErrorMessage, Field } from "formik";

const TextArea = (props) => {
  const {
    id,
    name,
    label,
    type,
    placeholder,
    classname,
    style,
    isControl = true,
    ...rest
  } = props;

  return (
    <Form.Group className="form-group">
      <Form.Label htmlFor="full-name">
        <span style={{ fontWeight: "bolder" }}>{label}</span>
      </Form.Label>
      <Field
        as="textarea"
        type={type}
        name={name}
        className={classname}
        id={id}
        placeholder={placeholder}
        {...rest}
      />
      {isControl ? (
        <span style={{ color: "red" }}>
          <ErrorMessage name={name} />
        </span>
      ) : (
        ""
      )}
    </Form.Group>
  );
};

export default TextArea;
