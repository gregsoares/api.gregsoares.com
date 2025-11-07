const express = require('express');
const app = express();
// const router = express.Router();
// const path = require('path');
//TODO: Implement cors
// const cors = require('cors');
// const corsOptions = require('./config/corsOptions');
const PORT = process.env.PORT || 8080;

const env = process.env.NODE_ENV || 'development';

// const passport = require('passport');

// // Passport configuration
// passport.use(new JiraStrategy({
//   consumerKey: process.env.JIRA_CONSUMER_KEY,
//   consumerSecret: process.env.JIRA_CONSUMER_SECRET,
//   callbackURL: "http://localhost:8080/auth/jiratick/callback"
// }, (token, tokenSecret, profile, done) => {
//   // Here you would find or create a user in your database
//   return done(null, profile);
// }));

// passport.serializeUser((user, done) => {
//   done(null, user);
// });

// passport.deserializeUser((obj, done) => {
//   done(null, obj);
// });

// app.use(passport.initialize());
// app.use(passport.session());

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

// app.get('/auth/jiratick', passport.authenticate('jira'));

// app.get('/auth/jiratick/callback', 
//   passport.authenticate('jira', { failureRedirect: '/' }),
//   (req, res) => {
//     // Successful authentication, redirect home.
//     res.redirect('/');
//   });

app.get('/test', (req, res) => {
  // Check To See If The Environment Is Development
  if (env === 'development') {
    const jsonResponse = 'You are in development mode'
    res.status(200).setHeader('Content-Type','application/json').send(jsonResponse);
  } else {
    const jsonResponse = 'You are in production mode'
    res.status(200).setHeader('Content-Type','application/json').send(jsonResponse);
  }
});



// app.get('*', (req, res) => {
//   res.status(404).send('Not Found');
// });

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} in ${env} mode`);
});

module.exports = server;
