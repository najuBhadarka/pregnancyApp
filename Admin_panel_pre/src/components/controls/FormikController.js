import React from "react";
import TextField from "./fields/TextField";
import SelectField from "./fields/SelectField";
import CheckBoxes from "./fields/Checkbox";
import RadioButton from "./fields/RadioButton";
import MultiSelect from "./fields/MultiSelect";
import TextArea from "./fields/TextArea";
import TextCardField from "./fields/TextCardField";

const FormikController = (props) => {
   const { control, ...rest } = props;

  const actionMapper = {
    input: <TextField {...rest} />,
    select: <SelectField {...rest} />,
    checkbox: <CheckBoxes {...rest} />,
    radio: <RadioButton {...rest} />,
    multiselect: <MultiSelect {...rest} />,
    textarea: <TextArea {...rest} />,
    inputCard : <TextCardField {...rest} />
  };

  if (actionMapper[control]) {
    return actionMapper[control];
  }
};
export default FormikController;
