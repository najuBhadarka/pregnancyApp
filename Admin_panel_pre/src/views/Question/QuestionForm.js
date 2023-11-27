import React, { useState } from "react";
import { FormBuilder } from "react-formio";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actions } from "../../redux/questionaries/questionariesAction.js";

const formDefinition = {};

function QuestionForm(props) {
  const [state, setState] = useState({ formData: [] });

  const handleSubmit = () => {
    props.actions.createForm(state);
    console.log("State-----", state);
  };

  const handleChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <label htmlFor="title">Title : </label>
      <input type="text" name="title" id="title" onChange={handleChange} />
      <FormBuilder
        form={formDefinition}
        saveForm={(data) => console.log("data", data)}
        onChange={(schema) => {
          setState((prevState) => ({
            ...prevState,
            formData: JSON.stringify(schema.components)
          })) 
        }}
      />
      <label htmlFor="timeline">Timeline : </label>
      <input
        type="number"
        name="timeline"
        id="timeline"
        onChange={handleChange}
      />
      <button onClick={handleSubmit}> Click here to submit</button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  actions: { ...bindActionCreators(actions , dispatch) },
});

const mapStateToProps = (state) => ({
  question: state.question,
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);
