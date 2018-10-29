const mail = require("../handlers/mail");
const quote = require("../quotes");

function getQuote() {
  //generate random integer between 0 and the length of the quotes array
  const randomNum = Math.floor(Math.random() * quote.quotes.length);
  return quote.quotes[randomNum];
}

exports.homePage = (req, res) => {
  res.render("home", {
    title: "Rebecca Collins, LISW-S",
    pageDescription:
      "This is the landing page for RCollinstherapy.com. Rebecca Collins, LISW is a sex therapist located in Columbus, Ohio",
    heroImage: "./images/stonehenge.jpg"
  });
};

exports.areasOfTreatment = (req, res) => {
  res.render("areasOfTreatment", {
    heroImage: "./images/connected.jpg"
  });
};

exports.aboutSexTherapy = (req, res) => {
  res.render("aboutSexTherapy", { heroImage: "./images/lions.jpg" });
};

exports.treatmentApproach = (req, res) => {
  res.render("treatmentApproach", { heroImage: "./images/human.jpg" });
};

exports.locationPage = (req, res) => {
  res.render("location", {
    gallery: true,
    pageDescription:
      "Location details, office hours, and contact information for Rebecca Collins, LISW"
  });
};

exports.contactMe = (req, res) => {
  res.render("contactme", {
    heroImage: "./images/mermaid.jpg",
    credit: true,
    pageDescription:
      "Rebecca Collins, LISW contact information, and contact form"
  });
};

exports.appointmentInfo = (req, res) => {
  res.render("appointmentInfo", {
    pageDescription: "Services that Rebecca Collins, LISW offers",
    heroImage: "./images/worry.jpg"
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
