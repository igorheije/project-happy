//create mapa
const map = L.map('mapid').setView([-17.5400234,-39.7283858], 15)

//create add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//create icon 
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minheight: 240
}).setContent('Lar das meninas <a href="orfanato.html?id=1" class="choose-orfanato"> <img src="./public/images/arrow-white.svg">   </a>')

//create marker
L.marker([-17.5400234,-39.7283858], { icon })
.addTo(map)
.bindPopup(popup)
    