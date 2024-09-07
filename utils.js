require('dotenv').config();
// TODO: Implement jwt for token generation and authentication
// const jwt = require('jsonwebtoken');
// const path = require('path');
// const fsPromises = require('fs').promises;
const successAuthResponse = { status: 200, data: 'Authorized' };
const authError400 = { status: 400, data: 'Bad Request' };
const authError401 = { status: 401, data: 'Unauthorized' };
// const authError404 = { status: 404, data: 'Not Found' };

const env = process.env;

const getToken = () => {
  if (env.mode === 'development') {
    return env.DEV_TOKEN;
  }
  return env.prodSecToken;
};

const envToken = getToken();

module.exports = { envToken, successAuthResponse, authError400, authError401 };
