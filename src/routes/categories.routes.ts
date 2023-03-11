import { Router } from "express";
import { categoryController } from "../controllers";

export default Router()
  .get("/", categoryController.GetAll)
  .post("/", categoryController.Create)
  .put("/:_id", categoryController.Update)
  .delete("/:_id", categoryController.Delete);
