import express from 'express';
import authenticateRoles from "../../middleware/auth.js"
import { addQuestions, deleteQuestion, getAllQuestions, updateQuestion } from '../../controller/questionsControllar.js';
let questionnairesRoute = express.Router();

questionnairesRoute.post("/questionform", authenticateRoles(['admin']), addQuestions);
questionnairesRoute.get("/questionsList", getAllQuestions);
questionnairesRoute.put("/updateQuestion/:id", authenticateRoles(['admin']), updateQuestion);
questionnairesRoute.delete("/deleteQuestion/:id", authenticateRoles(['admin']), deleteQuestion);

export default questionnairesRoute;

