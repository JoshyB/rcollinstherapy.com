const mail = require("../handlers/mail");

exports.homePage = (req, res) => {
  res.render("home", {
    title: "Rebecca Collins, LISW",
    bg__imageClass: "navigation__bg1"
  });
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
  res.render('services', {
    title: "services",
    bg__imageClass: "navigation__bg6"
  })
}

exports.sendMail = async (req, res) => {
  const msg = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    message: req.body.msg
  };

  await mail.sendMail(msg);
  // req.flash('success', "Thank you, your email was sent");
  res.redirect('/contactMe');
};
