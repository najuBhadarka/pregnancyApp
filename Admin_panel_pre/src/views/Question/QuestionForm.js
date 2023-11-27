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
      <div className="d-flex m-4 justify-content-around">
        <div className="d-flex">
          <label htmlFor="title" className="m-1">
            Title:
          </label>
          <input
            className="form-control"
            placeholder="Please enter Question Form Name"
            type="text"
            name="title"
            id="title"
            onChange={handleChange}
          />
        </div>
        <div className="d-flex">
          <label htmlFor="Timeline" className="m-1">
            Timeline:
          </label>
          <input
            className="form-control"
            placeholder="Please enter the timeline"
            type="number"
            name="timeline"
            id="timeline"
            onChange={handleChange}
          />
        </div>
        <button onClick={handleSubmit} className="btn btn-primary">
          {" "}
          Click here to submit
        </button>
      </div>

      <FormBuilder
        form={formDefinition}
        saveForm={(data) => console.log("data", data)}
        onChange={(schema) => {
          setState((prevState) => ({
            ...prevState,
            formData: JSON.stringify(schema),
          }));
        }}
      />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  actions: { ...bindActionCreators(actions, dispatch) },
});

const mapStateToProps = (state) => ({
  question: state.question,
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);
