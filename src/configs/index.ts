import { config } from "dotenv";

config();

const configs = {
  PORT: process.env.PORT || 1335,
  CERT: `${process.env.CERT}`,
  KEY: `${process.env.KEY}`,
  MONGO_URI: `${process.env.MONGO_URI}`,
  BUCKET_NAME: `${process.env.BUCKET_NAME}`,
  BUCKET_REGION: `${process.env.BUCKET_REGION}`,
  AWS_ACCESS_KEY: `${process.env.AWS_ACCESS_KEY}`,
  AWS_SECRET_KEY: `${process.env.AWS_SECRET_KEY}`,
};

export default configs;
