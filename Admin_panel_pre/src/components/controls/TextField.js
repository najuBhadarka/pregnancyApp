import React from "react";
import { Form } from "react-bootstrap";
import { ErrorMessage, Field } from "formik";

const TextField = (props) => {
  const {
    id,
    name,
    fieldLabel,
    type,
    placeholder,
    classname,
    style,
    value,
    ...extraProps
  } = props;

  return (
    <Form.Group className="form-group">
      <Form.Label htmlFor="full-name">{fieldLabel}</Form.Label>
      <Field
        type={type}
        name={name}
        className={classname}
        id={id}
        value={value}
        placeholder={placeholder}
        {...extraProps}
      />
      <ErrorMessage component="div" name={name} style={style} />
    </Form.Group>
  );
};

export default TextField;
