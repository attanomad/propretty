import { readFileSync } from 'fs';

export default () => ({
  host: process.env.HOST || 'localhost',
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    url: process.env.DATABASE_URL,
  },
  storage: {
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
    region: process.env.AWS_S3_REGION,
    endpoint: process.env.AWS_S3_ENDPOINT,
    bucketName: process.env.AWS_S3_BUCKET_NAME,
  },
  security: {
    password: {
      saltRounds: parseInt(process.env.SECURITY_PASSWORD_SALT_ROUNDS, 10) || 10,
    },
    jwt: {
      privateKey: readFileSync(process.env.SECURITY_JWT_PRIVATE_KEY_PATH),
      publicKey: readFileSync(process.env.SECURITY_JWT_PUBLIC_KEY_PATH),
      algorithm: process.env.SECURITY_JWT_ALGO || 'RS256',
      lifespan: process.env.SECURITY_JWT_LIFESPAN || '4h',
    },
  },
});
