const express = require('express');
const app = express();
// const router = express.Router();
// const path = require('path');
//TODO: Implement cors
// const cors = require('cors');
// const corsOptions = require('./config/corsOptions');
const PORT = process.env.PORT || 8080;

const env = process.env.NODE_ENV || 'development';

//TODO: Implement logger
// app.use(logger)

//TODO: Implement credentials middleware

//TODO: Implement cors
//app.use(cors(corsOptions));

//TODO Implement body parser (urlencoded and json)
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

//TODO: Implement cookie parser
// app.use(cookieParser());

//TODO: Implement serving static files
// app.use('/', express.static(path.join(__dirname, '/dist')));

// Routes

app.use('/', require('./routes/index'));
app.use('/auth', require('./routes/auth'));

app.get('/test', (req, res) => {
  // Check To See If The Environment Is Development
  if (env === 'development') {
    res.status(200).send('You are in development mode');
  } else {
    res.status(200).send('You are in production mode');
  }
});

// app.get('*', (req, res) => {
//   res.status(404).send('Not Found');
// });

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} in ${env} mode`);
});

module.exports = server;
