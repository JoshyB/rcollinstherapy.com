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
    title: "contact page",
    bg__imageClass: "navigation__bg4"
  });
};

exports.formDownloads = (req, res) => {
  res.render("forms", {
    title: "Forms here!",
    bg__imageClass: "navigation__bg5"
  });
};

exports.sendMail = async (req, res) => {
  res.json({
    firstname: req.body.firstName,
    lastname: req.body.lastName,
    email: req.body.email,
    msg: req.body.msg
  });
};
