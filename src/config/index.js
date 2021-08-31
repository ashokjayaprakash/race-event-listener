const API_HOST = process.env.API_HOST;
const AUTH_USERNAME = process.env.AUTH_USERNAME;
const AUTH_PASSWORD = process.env.AUTH_PASSWORD;
const DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING;

module.exports = {
  dbConnectionString: DB_CONNECTION_STRING,
  apiHost: API_HOST,
  auth: {
    userName: AUTH_USERNAME,
    password: AUTH_PASSWORD,
  },
};
