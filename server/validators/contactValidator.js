import { body } from "express-validator";

export const contactValidator = [
  body("name").notEmpty().withMessage("Name required"),

  body("phone")
    .notEmpty()
    .withMessage("Phone required"),

  body("email")
    .optional()
    .isEmail()
    .withMessage("Invalid email"),

  body("tags")
    .optional()
    .isArray()
    .withMessage("Tags must be array"),
];
