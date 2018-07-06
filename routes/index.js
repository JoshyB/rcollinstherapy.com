const express = require('express');
const router = express.Router();
const siteController = require('../controllers/siteController');

//get homepage
router.get('/', siteController.homePage);
router.get('/aboutPage', siteController.aboutPage);
router.get('/location', siteController.locationPage);
router.get('/contactMe', siteController.contactMe);
router.get('/formDownloads', siteController.formDownloads);
router.get('/services', siteController.services);

//contact form post request
router.post('/sendMail', siteController.sendMail);

module.exports = router;