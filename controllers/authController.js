const { envToken, successAuthResponse, authError400, authError401 } = require('../utils');

const userAuthentication = async (req, res, next) => {
  const token = req?.headers['x-access-token'];

  if (!token) {
    return authError400;
  }

  const isAuthorized = envToken === token;

  if (isAuthorized) {
    return successAuthResponse;
  } else {
    return authError401;
  }
};

const handleAuth = async (req, res) => {
  const authResponse = await userAuthentication(req, res);
  console.debug('handleAuth::Auth Response: ', authResponse.data);
  return authResponse
};

module.exports = { handleAuth };
