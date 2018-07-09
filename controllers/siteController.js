const mail = require("../handlers/mail");

exports.homePage = (req, res) => {
  res.render("home", {
    title: "Rebecca Collins, LISW",
    bg__imageClass: "navigation__bg1"
  });
  req.flash("hello there, this is a message");
};

exports.aboutPage = (req, res) => {
  res.render("about", {
    title: "About Rebecca",
    bg__imageClass: "navigation__bg2"
  });
};

exports.locationPage = (req, res) => {
  res.render("location", {
    titleIcon: "./images/icons/map.svg",
    bg__imageClass: "navigation__bg3"
  });
};

exports.contactMe = (req, res) => {
  res.render("contactme", {
    titleIcon: "./images/icons/message.svg",
    bg__imageClass: "navigation__bg4"
  });
};

exports.formDownloads = (req, res) => {
  res.render("forms", {
    titleIcon: "./images/icons/forms.svg",
    bg__imageClass: "navigation__bg5"
  });
};

exports.services = (req, res) => {
  res.render("services", {
    title: "services",
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

  if(mailer) {
    req.flash('success', 'Thank you! Your message has been received 👍');
    res.redirect('back');
  } else {
    req.flash('error', "Sorry there seems to have been a problem. Please try again later or give me a call.")
    res.redirect('back');
  }
};
