const express = require('express');
const router = express.Router();
const siteController = require('../controllers/siteController');

//get homepage
router.get('/', siteController.homePage)

module.exports = router;