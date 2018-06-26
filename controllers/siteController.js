
exports.homePage = (req, res) => {
  res.render('home', { title: 'Rebecca Collins, LISW', bg__imageClass: "navigation__bg1" })
}

exports.aboutPage = (req, res) => {
  res.render('about', { title: "About Rebecca", bg__imageClass: "navigation__bg2" })
}

exports.locationPage =  (req, res) => {
  res.render('location', { titleIcon: "./images/icons/map.svg", bg__imageClass: "navigation__bg3" })
}


