import express from 'express';
let questionnairesRoute = express.Router();

questionnairesRoute.get("/questionform", (req, res) => {
    res.send("questions Form");
});

export default questionnairesRoute;

