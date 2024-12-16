import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import React from 'react';

export interface S3Conf {
  region: string;
  bucketName: string;
  accessKeyId: string;
  secretAccessKey: string;
}

export const getS3Content = async (key: string, {
  region,
  bucketName,
  accessKeyId,
  secretAccessKey
}: S3Conf) => {

  try {
    const s3Client = new S3Client({
      region,
      credentials: {
        accessKeyId,
        secretAccessKey
      }
    });

    const command = new GetObjectCommand({ Bucket: bucketName, Key: key });
    const client = await s3Client.send(command);
    const { $metadata, Body } = client;
    if ($metadata?.httpStatusCode === 200) {
      return Body?.transformToWebStream();
    } else {
      throw new Error('File not found');
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const useS3Source = (filename: string, option: S3Conf) => {
  const [data, setData] = React.useState<string>();
  const [error, setError] = React.useState<Error | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  const getURL = async () => {
    try {
      const data = await getS3Content(filename, option);
      const blob = await new Response(data).blob();
      const url = URL.createObjectURL(blob);
      setData(url);
    } catch (error) {
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  }
  React.useEffect(() => {
    getURL();
  }, [filename]); // eslint-disable-line react-hooks/exhaustive-deps

  return { data, error, isLoading };
}
