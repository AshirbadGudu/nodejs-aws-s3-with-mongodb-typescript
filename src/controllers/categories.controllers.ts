import { RequestHandler } from "../types";
import { Category } from "../models";
import { deleteFile, getFileURL, uploadFile } from "../helpers";

const GetAll: RequestHandler = async (req, res) => {
  try {
    let categories = [];
    const categoriesWithOutURL = await Category.find({}).lean();
    for (const category of categoriesWithOutURL) {
      const image = await getFileURL(category.image);
      categories.push({ ...category, image });
    }
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
    const { file } = req;
    if (!file)
      return res.status(400).json({
        msg: "Please select a file for upload",
        isSuccess: false,
      });
    const imageName = `${Date.now()}-${file.originalname}`;
    await uploadFile({
      buffer: file.buffer,
      filename: imageName,
      mimetype: file.mimetype,
    });
    const category = await new Category({
      name: req.body.name,
      image: imageName,
    }).save();
    console.log(category);
    res.status(201).json({
      msg: "Created Successfully",
      isSuccess: true,
      data: category,
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
    const { _id } = req.params;
    const name = req.body.name;
    const { file } = req;
    const category = await Category.findById(_id);
    if (file) {
      await uploadFile({
        buffer: file.buffer,
        filename: category?.image!,
        mimetype: file.mimetype,
      });
    }
    await category?.updateOne({ name }, { new: true });
    res.status(201).json({
      msg: "Updated Successfully",
      isSuccess: true,
    });
  } catch (error) {
    // If any other error happens handle here
    const msg =
      error instanceof Error ? error.message : "Can't update category";
    return res.status(500).json({ msg, isSuccess: false });
  }
};
const Delete: RequestHandler = async (req, res) => {
  try {
    const { _id } = req.params;
    const category = await Category.findById(_id);
    await deleteFile(category?.image!);
    console.log(category?.image);
    await category?.deleteOne();
    res.status(200).json({
      msg: "Deleted Successfully",
      isSuccess: true,
    });
  } catch (error) {
    // If any other error happens handle here
    const msg =
      error instanceof Error ? error.message : "Can't delete category";
    return res.status(500).json({ msg, isSuccess: false });
  }
};

export const categoryController = { GetAll, Create, Update, Delete };
