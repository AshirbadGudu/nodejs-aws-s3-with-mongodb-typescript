import {
  DeleteObjectCommand,
  GetObjectCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import configs from "../configs";

const AWS_S3 = new S3Client({
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
}

export const uploadFile = async ({
  filename,
  buffer,
  mimetype,
}: IUploadFile) => {
  const cmd = new PutObjectCommand({
    Bucket: configs.BUCKET_NAME,
    Key: filename,
    Body: buffer,
    ContentType: mimetype,
  });
  await AWS_S3.send(cmd);
};
export const getFileURL = async (filename: string) => {
  const cmd = new GetObjectCommand({
    Bucket: configs.BUCKET_NAME,
    Key: filename,
  });
  const url = await getSignedUrl(AWS_S3, cmd, { expiresIn: 3600 });
  return url;
};
export const deleteFile = async (filename: string) => {
  const cmd = new DeleteObjectCommand({
    Bucket: configs.BUCKET_NAME,
    Key: filename,
  });
  await AWS_S3.send(cmd);
};
