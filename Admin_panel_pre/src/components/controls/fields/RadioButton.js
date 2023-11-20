import React from "react";
import { Field, ErrorMessage } from "formik";

const RadioButtons = (props) => {
  const { label, name, options, ...rest } = props;
  return (
    <div className="form-group">
      <label htmlFor={name}>
        <span style={{ fontWeight: "bolder" }}>{label}</span>
      </label>
      <Field name={name}>
        {(formik) => {
          const { field } = formik;
          return options.map((option) => {
            return (
              <div
                style={{ display: "inline" }}
                className="m-2"
                key={option.label}
              >
                <input
                  type="radio"
                  id={option.value}
                  {...field}
                  {...rest}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label htmlFor={option.value}>{option.label}</label>
              </div>
            );
          });
        }}
      </Field>
      <span style={{ color: "red" }}>
        <ErrorMessage name={name} />
      </span>
    </div>
  );
};

export default RadioButtons;