import { RequestHandler } from "../types";

const GetAll: RequestHandler = async (req, res) => {
  try {
    res.status(200).json({
      msg: "Success",
      isSuccess: true,
    });
  } catch (error) {
    // If any other error happens handle here
    const msg = error instanceof Error ? error.message : "Can't get categories";
    return res.status(500).json({ msg, isSuccess: false });
  }
};
const Create: RequestHandler = async (req, res) => {
  try {
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
