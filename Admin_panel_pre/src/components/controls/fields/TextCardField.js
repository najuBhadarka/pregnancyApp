import React from "react";
import { Form } from "react-bootstrap";
import { ErrorMessage, Field } from "formik";

const TextCardField = (props) => {
  const {
    id,
    name,
    label,
    type,
    placeholder,
    classname,
    style,
    isControl = true,
    handleChange,
    value:valuesPrice,
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
        onChange={handleChange}
        value={valuesPrice || ''}
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

export default TextCardField;
