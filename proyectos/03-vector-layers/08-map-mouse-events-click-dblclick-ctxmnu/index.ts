import { Map, LatLng, circle, circleMarker, marker } from 'leaflet';
import { startMapTemplate } from '../../../assets/template/content';
import { tileLayerSelect } from '../../../config/tile-layers/functions';
import { tileLayers } from '../../../config/tile-layers/data';

startMapTemplate(document, 'Sección 3 - 08 - Map Events - Click / DblCick / Context Menu');

const mymap = new Map('map').setView([43.2089, -2.4112], 10);

tileLayerSelect(tileLayers.baseLayers.osmManik.map, {
    attribution: tileLayers.baseLayers.osmManik.atribution
}).addTo(mymap);

// Eventos de mapa
let mapClickCount = 0;
mymap.on('click', (e: {
    latlng: LatLng
}) => {
    mapClickCount = 1;
    
    setTimeout(() => {
        if (mapClickCount === 1) {
            console.log('click', e.latlng.lat, e.latlng.lng);
            console.log('Ya hemos esperado suficiente y añadiré un marcador porque no hemos hecho otro click rápido');
            marker(e.latlng).addTo(mymap).bindPopup(e.latlng.toString());
            mapClickCount = 0;
        }
    }, 250);
});

mymap.on('dblclick', (e: {
    latlng: LatLng
}) => {
    console.log('dblclick', e.latlng);
    mapClickCount = 0;
    circleMarker(e.latlng, {
        color: 'orange'
    }).addTo(mymap).bindPopup(e.latlng.toString());
});

mymap.on('contextmenu', (e: {
    latlng: LatLng
}) => {
    console.log('ctxmenu', e.latlng);
    circleMarker(e.latlng, {
        color: 'red', weight: 6, radius: 40
    }).addTo(mymap).bindPopup(e.latlng.toString());
});

