const closeBtn = document.querySelector(".close__button");
const openBtn = document.querySelector(".open__button");
const mobileNavMenu = document.querySelector(".mobile__navigation");

closeBtn.addEventListener("click", () => {
  mobileNavMenu.style.width = "0px";
});

openBtn.addEventListener("click", () => {
  mobileNavMenu.style.width = "300px";
});

// controls for the carousel gallery on the location page

// slideIndex has to be decalred as a 'var' because there is a bug in safari
// where if it is a 'let' Safari will throw a "ReferenceError: Can't find variable: slideIndex"
// when slideIndex is incremented inside of the slideShow function and the slideshow
// will cease to work
var slideIndex = 0;

const galleryImages = document.querySelectorAll(".main-img img");

if (galleryImages) {
  slideShow();
  function slideShow() {
    for (var i = 0; i < galleryImages.length; i++) {
      galleryImages[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > galleryImages.length) {
      slideIndex = 1;
    }
    galleryImages[slideIndex - 1].style.display = "block";
    setTimeout(slideShow, 4000);
  }
}

// initialize google maps for the locations page;
const mapView = document.getElementById("map");

function initMap() {
  if (!mapView) return; //if there is no map div on the page...move along
  const rebeccasOffice = { lat: 40.044, lng: -83.019 }; // The lat and lng of Rebecca's office
  const map = new google.maps.Map(mapView, {
    zoom: 16,
    center: rebeccasOffice
  });
  const marker = new google.maps.Marker({
    position: rebeccasOffice,
    map: map
  });
}
