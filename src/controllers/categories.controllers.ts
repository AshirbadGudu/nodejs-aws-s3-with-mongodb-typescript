import { RequestHandler } from "../types";
import multer from "multer";
import { Category } from "../models";

const GetAll: RequestHandler = async (req, res) => {
  try {
    const categories = await Category.find({});
    res.status(200).json({
      msg: "Success",
      isSuccess: true,
      data: categories,
    });
  } catch (error) {
    // If any other error happens handle here
    const msg = error instanceof Error ? error.message : "Can't get categories";
    return res.status(500).json({ msg, isSuccess: false });
  }
};
const Create: RequestHandler = async (req, res) => {
  try {
    console.log(req.body);
    console.log(req.file);
    res.status(201).json({
      msg: "Created Successfully",
      isSuccess: true,
    });
  } catch (error) {
    // If any other error happens handle here
    const msg =
      error instanceof Error ? error.message : "Can't create a new category";
    return res.status(500).json({ msg, isSuccess: false });
  }
};
const Update: RequestHandler = async (req, res) => {
  try {
  } catch (error) {
    // If any other error happens handle here
    const msg =
      error instanceof Error ? error.message : "Can't update category";
    return res.status(500).json({ msg, isSuccess: false });
  }
};
const Delete: RequestHandler = async (req, res) => {
  try {
  } catch (error) {
    // If any other error happens handle here
    const msg =
      error instanceof Error ? error.message : "Can't delete category";
    return res.status(500).json({ msg, isSuccess: false });
  }
};

export const categoryController = { GetAll, Create, Update, Delete };
