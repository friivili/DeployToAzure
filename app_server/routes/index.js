const express = require('express');
const router = express.Router();

// Declaring the controllers
const ctrlMain = require('../controllers/ctrlMain'); // Controller for the Home page
const ctrlHockey = require('../controllers/ctrlHockey'); // ... for the list of Olympic Ice Hockey winners
const ctrlFinland = require('../controllers/ctrlFinland'); // ... for the the list of Finland's rankings

// Defining the routes and associating the routes to their corresponding controllers
router.get('/', ctrlMain.index);  // Home page
router.get('/hockey', ctrlHockey.winnerlist);  // List of Olympic Ice Hockey winners
router.get('/finland', ctrlFinland.winnerlist);  // List of Finland's rankings

module.exports = router;
