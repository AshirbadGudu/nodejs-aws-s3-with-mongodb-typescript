import { Document, model, Schema } from "mongoose";

export interface ICategory extends Document {
  name: string;
  image: string;
  isBlocked: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const CategorySchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    isBlocked: { type: Boolean, default: false },
  },
  { collection: "CATEGORIES", timestamps: true }
);

const Category = model<ICategory>("Category", CategorySchema);

export default Category;
