import { Router } from "express";
import { categoryController } from "../controllers";
import multer from "multer";
import { category } from "../validations";
import { errorFormatter } from "../middleware";

const storage = multer.memoryStorage();
const uploadMiddleWare = multer({
  storage,
  fileFilter: (_req, file, callback) => {
    if (file.mimetype.startsWith("image/")) return callback(null, true);
    callback(new Error("File type not allowed"));
  },
});

export default Router()
  .get("/", categoryController.GetAll)
  .post(
    "/",
    uploadMiddleWare.single("image"),
    category.create.validation,
    errorFormatter,
    categoryController.Create
  )
  .put(
    "/:_id",
    uploadMiddleWare.single("image"),
    category.update.validation,
    errorFormatter,
    categoryController.Update
  )
  .delete("/:_id", categoryController.Delete);
