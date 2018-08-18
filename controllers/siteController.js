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
    pageDescription:
      "This is the landing page for RCollinstherapy.com. Rebecca Collins, LISW is a sex therapist located in Columbus, Ohio",
    bg__imageClass: "navigation__bg1"
  });
};

exports.aboutPage = (req, res) => {
  res.render("about", {
    title: "About Rebecca",
    pageDescription: "A short biography on Rebecca Collins",
    bg__imageClass: "navigation__bg2"
  });
};

exports.aboutSexTherapy = (req, res) => {
  res.render("aboutSexTherapy", { bg__imageClass: "navigation__bg7" });
};

exports.locationPage = (req, res) => {
  res.render("location", {
    bg__imageClass: "navigation__bg3",
    pageDescription:
      "Location details, office hours, and contact information for Rebecca Collins, LISW",
    quote: getQuote()
  });
};

exports.contactMe = (req, res) => {
  res.render("contactme", {
    quote: getQuote(),
    pageDescription:
      "Rebecca Collins, LISW contact information, and contact form",
    bg__imageClass: "navigation__bg4"
  });
};

exports.formDownloads = (req, res) => {
  res.render("forms", {
    quote: getQuote(),
    pageDescription: "Rebecca Collins, LISW intake forms and policies",
    bg__imageClass: "navigation__bg5"
  });
};

exports.services = (req, res) => {
  res.render("services", {
    quote: getQuote(),
    pageDescription: "Services that Rebecca Collins, LISW offers",
    bg__imageClass: "navigation__bg6"
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
