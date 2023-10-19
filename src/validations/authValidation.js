import { body } from 'express-validator';

const registrationValidation = [
  body('email').isEmail().withMessage("Please Enter Valid Email Address").normalizeEmail(),
  body('firstName').notEmpty().withMessage("Please Enter Valid First Name"),
  body('lastName').notEmpty().withMessage("Please Enter Valid Last Name"),
  body('userName').notEmpty().withMessage("Please Enter Valid User Name"),
  body('DOB').notEmpty().withMessage("Please Enter Valid Date of Birth"),
  body('contact').notEmpty().withMessage("Please Enter Valid Contact Number"),
  body('password').notEmpty().withMessage("Please Enter Valid Password"),
];

const loginValidation = [
  body('userName').notEmpty().withMessage("Please Enter Valid User Name"),
  body('password').notEmpty().withMessage("Please Enter Valid Password"),
];

export {
  registrationValidation,
  loginValidation
};
