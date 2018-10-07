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
let slideIndex = 0;

carousel();

function carousel() {
  const galleryImages = document.querySelectorAll(".main-img img");
  for (var i = 0; i < galleryImages.length; i++) {
    galleryImages[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > galleryImages.length) {
    slideIndex = 1;
  }
  galleryImages[slideIndex - 1].style.display = "block";
  setTimeout(carousel, 4000);
}

// initialize google maps for the locations page;
const mapView = document.getElementById("map");

function makeMap() {
  if (!mapView) return; //if there is no map div on the page...move along
  const rebeccasOffice = { lat: 40.044, lng: -83.019 };
  const map = new google.maps.Map(mapView, {
    zoom: 16,
    center: rebeccasOffice
  });
  const marker = new google.maps.Marker({
    position: rebeccasOffice,
    map: map
  });
}
