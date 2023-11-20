import React from "react";
import Select from "react-select";
import { ErrorMessage, Field } from "formik";
import { Form } from "react-bootstrap";

const MultiDropdown = ({ field, options, name, onChange, ...props }) => (
  <Select
    closeMenuOnSelect={false}
    {...field}
    {...props}
    name={name}
    isMulti
    options={options}
    onChange={onChange}
  />
);

const MultiSelect = (props) => {
  const {
    options,
    name,
    handleChange,
    label,
    className,
    value,
    ...extraProps
  } = props;
  return (
    <Form.Group className="form-group">
      <label htmlFor={name}>{label}</label>
      <Field
        component={MultiDropdown}
        name={name}
        className={className}
        onChange={handleChange}
        value={value}
        options={options}
        style={{ width: "100%" }}
        {...extraProps}
      />
      <ErrorMessage name={name} />
    </Form.Group>
  );
};

export default MultiSelect;
