const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/', (req, res) => {
    const token = (req && req.headers && req.headers['x-access-token']) || '';
    authController.handleAuth(req, res);
});

module.exports = router;
