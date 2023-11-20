import React from "react";
import { Form } from "react-bootstrap";
import { ErrorMessage, Field } from "formik";

const TextField = (props) => {
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
      {label ? (
        <Form.Label htmlFor={name}>
          <span style={{ fontWeight: "bolder" }}>{label}</span>
        </Form.Label>
      ) : null}
      <Field
        type={type}
        name={name}
        className={classname}
        id={id}
        placeholder={placeholder}
        style={style}
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

export default TextField;
