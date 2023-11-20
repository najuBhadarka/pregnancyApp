import { body } from 'express-validator';

const addQuestionsValidation = [
    body('title').notEmpty().withMessage("Title is requied feild"),
    body('questions').notEmpty().withMessage("Questions is requied feild"),
    body('timeline').notEmpty().withMessage("timeline is requied feild"),
];

export {
    addQuestionsValidation
};
