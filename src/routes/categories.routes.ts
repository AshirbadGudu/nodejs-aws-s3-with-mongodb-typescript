import { Router } from "express";
import { categoryController } from "../controllers";
import multer from "multer";

const storage = multer.memoryStorage();
const uploadMiddleWare = multer({ storage });

export default Router()
  .get("/", categoryController.GetAll)
  .post("/", uploadMiddleWare.single("image"), categoryController.Create)
  .put("/:_id", uploadMiddleWare.single("image"), categoryController.Update)
  .delete("/:_id", categoryController.Delete);
