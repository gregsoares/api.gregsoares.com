const { handleAuth } = require('./authController');
const { envToken, successAuthResponse, authError400, authError401 } = require('../utils');

describe('authController', () => {
  describe('handleAuth', () => {

    it('should return status 400, "Bad Request when no token is provided ' , async () => {
      const req = { headers: {} };
      const res = {};
      const result = await handleAuth(req, res).finally((req, res) => {
        console.debug('Result: ', res)
        return res
        }
      );
      expect(result.data).toEqual(authError400.data);
      expect(result.status).toEqual(authError400.status);
    });

    it('should return authError401 when an invalid token is provided', async () => {
      const req = { headers: { 'x-access-token': 'invalid-token' } };
      const res = {};
      const result = await handleAuth(req, res);
      expect(result).toEqual(authError401);
    });

    it('should return successAuthResponse when a valid token is provided', async () => {
      const req = { headers: { 'x-access-token': 'UwmLjmA4vvIq4877QIWhuU9vuIB27p6i33rIH01Ze7LttHlCutK1vp7SS3yxbaiC' } };
      const res = {};
      const result = await handleAuth(req, res);
      expect(result).toEqual(successAuthResponse);
    });
  });

});