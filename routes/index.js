const express = require("express");
const router = express.Router();
const siteController = require("../controllers/siteController");

//get homepage
router.get("/", siteController.homePage);
router.get("/areasOfTreatment", siteController.areasOfTreatment);
router.get("/treatmentApproach", siteController.treatmentApproach);
router.get("/aboutSexTherapy", siteController.aboutSexTherapy);
router.get("/location", siteController.locationPage);
router.get("/contactMe", siteController.contactMe);
router.get("/appointmentInfo", siteController.appointmentInfo);

//contact form post request
router.post("/sendMail", siteController.sendMail);

module.exports = router;
