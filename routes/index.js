const express = require('express');
const router = express.Router();
const path = require('path');

// Serve the index.html file
// router.get('^/$|/index(.html)?', (req, res) => {
//   res.status(200).sendFile(path.join(__dirname, '../dist/index.html'));
// });

router.get('/', (req, res) => {
  res.status(200).send('API is running');
});

module.exports = router;
