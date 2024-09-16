export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    url: process.env.DATABASE_URL,
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
