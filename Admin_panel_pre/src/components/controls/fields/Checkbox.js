import React from "react";
import { Field, ErrorMessage } from "formik";

const Checkboxes = (props) => {
  const { label, name, option, style, value, ...rest } = props;
  return (
    <>
      <label htmlFor={name}>
        <span style={{ fontWeight: "bolder" }} className="me-1">
          {label}
        </span>
        <Field type="checkbox" name={name} {...rest} checked={value}></Field>
        <span style={{ color: "red" }}>
          <ErrorMessage name={name} />
        </span>
      </label>
    </>
  );
};

export default Checkboxes;
