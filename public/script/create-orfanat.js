//create mapa
const map = L.map("mapid").setView([-17.5400234, -39.7283858], 15);

//create add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

// create and add marker
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  marker && map.removeLayer(marker);

  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// adicionar fotos
function addPhotoField() {
  // pegar container de fotos #igames
  const constainer = document.querySelector("#images");
  // pegar para duplicar .new-image
  const fieldsContainer = document.querySelectorAll(".new-upload");
  //realizar o clone da ultima imagem adicionada para
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  const input = newFieldContainer.children[0];

  if (input.value == "") {
    return;
  }
  //limpar o campo de
  newFieldContainer.children[0].value = "";
  // adicionar o clone ao container de image
  constainer.appendChild(newFieldContainer);
}

function removePhotoField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length < 2) {
    span.parentNode.children[0].value = "";
    return;
  }

  span.parentNode.remove();
}
// select yes or no

function toggleSelect(event) {
  //retirar a class active
  document
    .querySelectorAll(".button-select button")
    .forEach((button) => button.classList.remove("active"));
  //colocar a class de volta
  const button = event.currentTarget;
  button.classList.add("active");
  // pegar o botao clicado

  //verificar 

  //atualizar o meu input hidden
  const input = document.querySelector('[name="open_on_weekends"]');

  input.value = button.dataset.value;
}
