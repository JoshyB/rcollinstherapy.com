const express = require('express');
const router = express.Router();
const siteController = require('../controllers/siteController');

//get homepage
router.get('/', siteController.homePage);
router.get('/aboutPage', siteController.aboutPage);
router.get('/location', siteController.locationPage)

module.exports = router;