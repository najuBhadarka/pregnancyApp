import express from 'express';
import authenticateRoles from "../../middleware/auth.js"
import { addQuestions, deleteQuestion, getAllQuestions, getQuestionOnTimeline, updateQuestion } from '../../controller/questionsControllar.js';
let questionnairesRoute = express.Router();

// Get the questionBook as per the timeline
questionnairesRoute.get("/getquestions", getQuestionOnTimeline);

// To get all the qusetionsBooks
questionnairesRoute.get("/questionsList", getAllQuestions);

// Questionaires API' for Admin only
questionnairesRoute.post("/questionform", authenticateRoles(['admin']), addQuestions);
questionnairesRoute.put("/updateQuestion/:id", authenticateRoles(['admin']), updateQuestion);
questionnairesRoute.delete("/deleteQuestion/:id", authenticateRoles(['admin']), deleteQuestion);

export default questionnairesRoute;

