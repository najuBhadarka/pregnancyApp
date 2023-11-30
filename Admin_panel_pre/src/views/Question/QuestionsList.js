import React, { useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actions } from "../../redux/questionaries/questionariesAction.js";

export const QuestionsList = (props) => {
console.log("🚀 ~ file: QuestionsList.js:7 ~ QuestionsList ~ props:", props)

  useEffect(() => {
    const questionsList = props.actions.getQuestionsList();
    console.log("🚀 ~ file: QuestionsList.js:10 ~ useEffect ~ questionsList:", questionsList)
  }, [props]);

  return (
    <div>QuestionsList</div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  actions: { ...bindActionCreators(actions, dispatch) },
});

const mapStateToProps = (state) => ({
  question: state.question,
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsList);