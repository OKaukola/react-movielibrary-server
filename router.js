const express = require('express');
const _movieController = require('./controllers/movies');
const AuthenticationController = require('./controllers/authentication');
const UserController = require('./controllers/user');
const StripeController = require('./controllers/stripe');
const passport = require('passport');
const ROLE_MEMBER = require('./constants').ROLE_MEMBER;
const ROLE_CLIENT = require('./constants').ROLE_CLIENT;
const ROLE_OWNER = require('./constants').ROLE_OWNER;
const ROLE_ADMIN = require('./constants').ROLE_ADMIN;

const passportService = require('./config/passport');

// Middleware to require login/auth
const requireAuth = passport.authenticate('jwt', { session: false });
const requireLogin = passport.authenticate('local', { session: false });

module.exports = function (app) {

  const apiRoutes = express.Router();
  movieRoutes = express.Router(),
    authRoutes = express.Router(),
    userRoutes = express.Router(),
    chatRoutes = express.Router(),
    payRoutes = express.Router(),
    communicationRoutes = express.Router();





  apiRoutes.use('/movies', movieRoutes);
  apiRoutes.use('/auth', authRoutes);

  // Registration route
  authRoutes.post('/register', AuthenticationController.register);
  // Login route
  authRoutes.post('/login', requireLogin, AuthenticationController.login);

  // Movies handling routes
  movieRoutes.post('/create-new-movie', _movieController.createMovie);
  movieRoutes.get('/get-movies', _movieController.getMovie);
  movieRoutes.post('/delete-movie', _movieController.deleteMovie);

  // Set user routes as a subgroup/middleware to apiRoutes
  apiRoutes.use('/user', userRoutes);
  // View user profile route
  userRoutes.get('/:userId', requireAuth, UserController.viewProfile);

  app.use('/api', apiRoutes);
}