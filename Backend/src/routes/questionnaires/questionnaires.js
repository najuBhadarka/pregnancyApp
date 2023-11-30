import express from "express";
import authenticateRoles from "../../middleware/auth.js";
import {
  addQuestions,
  deleteQuestion,
  getAllQuestionsList,
  getQuestionForm,
  getQuestionOnTimeline,
  submitAnswer,
  updateQuestion,
} from "../../controller/questionsControllar.js";
import { addQuestionsValidation } from "../../validations/questionBookValidation.js";
let questionnairesRoute = express.Router();

// Get the questionBook as per the timeline
questionnairesRoute.get("/getquestions", getQuestionOnTimeline);

// To get all the qusetionsBooks
questionnairesRoute.post(
  "/create-form",
  // authenticateRoles(["admin"]),
  addQuestionsValidation,
  addQuestions,
);

questionnairesRoute.put(
  "/updateQuestion/:id",
  authenticateRoles(["admin"]),
  updateQuestion,
);
questionnairesRoute.delete(
  "/deleteQuestion/:id",
  authenticateRoles(["admin"]),
  deleteQuestion,
);

// user form subbmit
questionnairesRoute.post(
  "/submitanswer",
  authenticateRoles(["user"]),
  submitAnswer,
);

questionnairesRoute.get(
  "/get-form",
  authenticateRoles(["user"]),
  getQuestionForm,
);

questionnairesRoute.get(
  "/get-questionaries-list",
  authenticateRoles(["admin"]),
  getAllQuestionsList,
);

export default questionnairesRoute;
