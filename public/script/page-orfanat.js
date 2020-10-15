const options = {
  dragging: false,
  touchZoom: false,
  doubleClicZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

const map = L.map("mapid", options).setView([-17.5400234, -39.7283858], 15);

//create add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

//create marker
L.marker([-17.5400234, -39.7283858], { icon }).addTo(map);

// image gallary

function selectImage(event) {
  const button = event.currentTarget;

  const buttons = document.querySelectorAll(".images button");
  buttons.forEach((button) => {
    button.classList.remove("active");
  });
  const image = button.children[0];
  const imageContainer = document.querySelector(".orfanat-details > img");

  imageContainer.src = image.src;

  button.classList.add("active");
}
