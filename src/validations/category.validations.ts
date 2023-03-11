import { check } from "express-validator";

export default {
  create: {
    validation: [check("name", "Name is required").notEmpty()],
  },
  update: {
    validation: [check("name", "Name Can't be Empty").optional().notEmpty()],
  },
};
