export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    url: process.env.DATABASE_URL,
  },
  storage: {
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
    endpoint: process.env.AWS_S3_ENDPOINT,
  },
  security: {
    password: {
      saltRounds: parseInt(process.env.SECURITY_PASSWORD_SALT_ROUNDS, 10) || 10,
    },
    jwt: {
      secret: process.env.SECURITY_JWT_SECRET,
    },
  },
});
