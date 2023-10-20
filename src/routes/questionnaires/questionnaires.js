import express from 'express';
import authenticateRoles from "../../middleware/auth.js"
import { addQuestions, deleteQuestion, getAllQuestions, updateQuestion } from '../../controller/questionsControllar.js';
import { addQuestionsValidation } from '../../validations/questionBookValidation.js';
let questionnairesRoute = express.Router();

questionnairesRoute.post("/questionform", authenticateRoles(['admin']), addQuestionsValidation, addQuestions);
questionnairesRoute.get("/questionsList", getAllQuestions);
questionnairesRoute.put("/updateQuestion/:id", authenticateRoles(['admin']), updateQuestion);
questionnairesRoute.delete("/deleteQuestion/:id", authenticateRoles(['admin']), deleteQuestion);

export default questionnairesRoute;