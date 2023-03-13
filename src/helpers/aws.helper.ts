import {
  DeleteObjectCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import {
  CloudFrontClient,
  CreateInvalidationCommand,
} from "@aws-sdk/client-cloudfront";
import configs from "../configs";

const AWS_S3 = new S3Client({
  region: configs.BUCKET_REGION,
  credentials: {
    secretAccessKey: configs.AWS_SECRET_KEY,
    accessKeyId: configs.AWS_ACCESS_KEY,
  },
});
const AWS_CLOUD_FRONT = new CloudFrontClient({
  region: configs.BUCKET_REGION,
  credentials: {
    secretAccessKey: configs.AWS_SECRET_KEY,
    accessKeyId: configs.AWS_ACCESS_KEY,
  },
});

interface IUploadFile {
  filename: string;
  buffer: Buffer;
  mimetype: string;
  isUpdatingFile?: Boolean;
}

export const getFileURL = async (filename: string) => {
  return `${configs.CLOUD_FRONT_URL}/${filename}`;
};

export const invalidateFileCache = async (filename: string) => {
  const cmd = new CreateInvalidationCommand({
    DistributionId: configs.CLOUD_FRONT_DISTRIBUTION_ID,
    InvalidationBatch: {
      CallerReference: filename,
      Paths: { Quantity: 1, Items: ["/" + filename] },
    },
  });
  await AWS_CLOUD_FRONT.send(cmd);
};

export const uploadFile = async ({
  filename,
  buffer,
  mimetype,
  isUpdatingFile,
}: IUploadFile) => {
  const cmd = new PutObjectCommand({
    Bucket: configs.BUCKET_NAME,
    Key: filename,
    Body: buffer,
    ContentType: mimetype,
  });
  // UPLOAD TO THE S3 BUCKET
  await AWS_S3.send(cmd);
  // INVALIDATE THE CLOUD FRONT CACHE IF UPDATING THE FILE
  if (isUpdatingFile) await invalidateFileCache(filename);
};

export const deleteFile = async (filename: string) => {
  const cmd = new DeleteObjectCommand({
    Bucket: configs.BUCKET_NAME,
    Key: filename,
  });
  // DELETE FROM S3 BUCKET
  await AWS_S3.send(cmd);
  // INVALIDATE THE CLOUD FRONT CACHE
  await invalidateFileCache(filename);
};
