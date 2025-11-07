const express = require('express');
const router = express.Router();

router.get('/jiratick', ()=> {
  const jsonResponse ='JiraTick Auth Callback'
  res.status(200).setHeader('Content-Type', 'application/json').send(jsonResponse);
});

router.get('/jiratick/callback', ()=> {
  const jsonResponse ='JiraTick Auth'
  res.status(200).setHeader('Content-Type', 'application/json').send(jsonResponse);
});

module.exports = router;
