//create mapa
const map = L.map('mapid').setView([-17.5400234,-39.7283858], 15)

//create add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//create icon 
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})


function addMarker({id, name, lat, lng}){

    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        minheight: 240
    }).setContent(`${name} <a href="orfanato?id=${id}"><img src="/images/arrow-white.svg">   </a>`)
    
    //create marker
    L.marker([lat, lng], { icon })
    .addTo(map)
    .bindPopup(popup)    

}

const orfanatosSpan = document.querySelectorAll('.orfanatos span')

orfanatosSpan.forEach( span => {
    const orfanatos = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }

    addMarker(orfanatos)
})


