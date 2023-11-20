import React from "react";
import { ErrorMessage, Field } from "formik";
import { Form } from "react-bootstrap";

const SelectField = (props) => {
  const {
    name,
    label,
    isControl = true,
    className,
    options = [],
    handleChange,
    value: selectedValue,
    ...extraProps
  } = props;

  if (!isControl) {
    return (
      <>
        <Form.Label htmlFor="full-name">
          <span style={{ fontWeight: "bolder" }}>{label}</span>
        </Form.Label>
        <select
          name={name}
          className={className}
          onChange={handleChange}
          value={selectedValue}
          {...extraProps}
        >
          <option value={null} hidden>
            Select
          </option>
          {options?.map(({ label, value }, index) => {
            return (
              <option
                value={value}
                key={index}
                defaultValue={value === selectedValue}
              >
                {label}
              </option>
            );
          })}
        </select>
      </>
    );
  }

  return (
    <Form.Group className="form-group">
      {label ? (
        <Form.Label htmlFor={name}>
          <span style={{ fontWeight: "bolder" }}>{label}</span>
        </Form.Label>
      ) : null}
      <Field
        as="select"
        name={name}
        className={className}
        onChange={handleChange}
        value={selectedValue}
        {...extraProps}
      >
        <option hidden value={null}>{options.length ? "Select" : "No options"}</option>
        {options?.map(({ label, value }, index) => {
          return (
            <option
              value={value}
              key={index}
              selected={value === selectedValue}
            >
              {label}
            </option>
          );
        })}
      </Field>
      <span style={{ color: "red" }}>
        <ErrorMessage name={name} />
      </span>
    </Form.Group>
  );
};

export default SelectField;
