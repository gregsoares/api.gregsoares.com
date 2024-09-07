const { handleAuth } = require('./authController');
const { envToken, successAuthResponse, authError400, authError401 } = require('../utils');

jest.mock('../utils', () => ({
  envToken: 'valid-token',
  successAuthResponse: { status: 200, data: { message: 'Success' } },
  authError400: { status: 400, data: { error: 'Bad Request' } },
  authError401: { status: 401, data: { error: 'Unauthorized' } },
}));

describe('authController', () => {
  describe('userAuthentication', () => {
    const { userAuthentication } = require('./authController');

    it('should return authError400 when no token is provided', async () => {
      const req = { headers: {} };
      const res = {};
      const result = await userAuthentication(req, res);
      expect(result).toEqual(authError400);
    });

    it('should return authError401 when an invalid token is provided', async () => {
      const req = { headers: { 'x-access-token': 'invalid-token' } };
      const res = {};
      const result = await userAuthentication(req, res);
      expect(result).toEqual(authError401);
    });

    it('should return successAuthResponse when a valid token is provided', async () => {
      const req = { headers: { 'x-access-token': 'valid-token' } };
      const res = {};
      const result = await userAuthentication(req, res);
      expect(result).toEqual(successAuthResponse);
    });
  });

  describe('handleAuth', () => {
    it('should return 400 status and error message when userAuthentication returns authError400', async () => {
      const req = { headers: {} };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      await handleAuth(req, res);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: 'Bad Request' });
    });

    it('should return 401 status and error message when userAuthentication returns authError401', async () => {
      const req = { headers: { 'x-access-token': 'invalid-token' } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      await handleAuth(req, res);
      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith({ error: 'Unauthorized' });
    });

    it('should return 200 status and success message when userAuthentication returns successAuthResponse', async () => {
      const req = { headers: { 'x-access-token': 'valid-token' } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      await handleAuth(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ message: 'Success' });
    });
  });
});