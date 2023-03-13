import { config } from "dotenv";

config();

const configs = {
  PORT: process.env.PORT || 1335,
  KEY: `${process.env.KEY}`,
  CERT: `${process.env.CERT}`,
  MONGO_URI: `${process.env.MONGO_URI}`,
  BUCKET_NAME: `${process.env.BUCKET_NAME}`,
  BUCKET_REGION: `${process.env.BUCKET_REGION}`,
  AWS_ACCESS_KEY: `${process.env.AWS_ACCESS_KEY}`,
  AWS_SECRET_KEY: `${process.env.AWS_SECRET_KEY}`,
  CLOUD_FRONT_URL: `${process.env.CLOUD_FRONT_URL}`,
  CLOUD_FRONT_DISTRIBUTION_ID: `${process.env.CLOUD_FRONT_DISTRIBUTION_ID}`,
};

export default configs;
