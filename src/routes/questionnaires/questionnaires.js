import express from "express";
import authenticateRoles from "../../middleware/auth.js";
import {
  addQuestions,
  deleteQuestion,
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
  "/questionform",
  authenticateRoles(["admin"]),
  addQuestionsValidation,
  addQuestions
);

// Questionaires API' for Admin only
questionnairesRoute.post(
  "/questionform",
  authenticateRoles(["admin"]),
  addQuestions
);
questionnairesRoute.put(
  "/updateQuestion/:id",
  authenticateRoles(["admin"]),
  updateQuestion
);
questionnairesRoute.delete(
  "/deleteQuestion/:id",
  authenticateRoles(["admin"]),
  deleteQuestion
);

// user form subbmit
questionnairesRoute.post(
  "/submitanswer",
  authenticateRoles(["user"]),
  submitAnswer
);
export default questionnairesRoute;
