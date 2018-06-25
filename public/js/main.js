const closeBtn = document.querySelector(".close__button");
const openBtn = document.querySelector(".open__button");
const mobileNavMenu = document.querySelector(".mobile__navigation");

closeBtn.addEventListener("click", () => {
  mobileNavMenu.style.width = "0px";
});

openBtn.addEventListener("click", () => {
  mobileNavMenu.style.width = "250px";
});

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
