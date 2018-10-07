const mail = require("../handlers/mail");
const quote = require("../quotes");

function getQuote() {
  //generate random integer between 0 and the length of the quotes array
  const randomNum = Math.floor(Math.random() * quote.quotes.length);
  return quote.quotes[randomNum];
}

exports.homePage = (req, res) => {
  res.render("home", {
    title: "Rebecca Collins, LISW",
    subTitle: "Sex and Relationship Therapist",
    pageDescription:
      "This is the landing page for RCollinstherapy.com. Rebecca Collins, LISW is a sex therapist located in Columbus, Ohio",
    heroImage: "./images/tree_path.jpeg"
  });
};

exports.areasOfTreatment = (req, res) => {
  res.render("areasOfTreatment", {
    heroImage: "./images/creek.jpg"
  });
};

exports.aboutSexTherapy = (req, res) => {
  res.render("aboutSexTherapy", { heroImage: "./images/polar_bears.jpeg" });
};

exports.treatmentApproach = (req, res) => {
  res.render("treatmentApproach", { heroImage: "./images/forest_path.jpg" });
};

exports.locationPage = (req, res) => {
  res.render("location", {
    gallery: true,
    pageDescription:
      "Location details, office hours, and contact information for Rebecca Collins, LISW",
    quote: getQuote()
  });
};

exports.contactMe = (req, res) => {
  res.render("contactme", {
    quote: getQuote(),
    pageDescription:
      "Rebecca Collins, LISW contact information, and contact form"
  });
};

exports.appointmentInfo = (req, res) => {
  res.render("appointmentInfo", {
    quote: getQuote(),
    pageDescription: "Services that Rebecca Collins, LISW offers",
    heroImage: "./images/forest_path2.jpg"
  });
};

exports.sendMail = async (req, res) => {
  const msg = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    message: req.body.msg
  };

  const mailer = await mail.sendMail(msg);

  if (mailer) {
    req.flash("success", "Thank you! Your message has been received 👍");
    res.redirect("back");
  } else {
    req.flash(
      "error",
      "Sorry there seems to have been a problem. Please try again later or give me a call."
    );
    res.redirect("back");
  }
};
