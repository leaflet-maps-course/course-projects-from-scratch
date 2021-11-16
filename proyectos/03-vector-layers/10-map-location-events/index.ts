import { Map, LatLng, marker, circleMarker, circle } from 'leaflet';
import { startMapTemplate } from '../../../assets/template/content';
import { tileLayerSelect } from '../../../config/tile-layers/functions';
import { tileLayers } from '../../../config/tile-layers/data';

startMapTemplate(document, 'Sección 3 - 10 - Map Events - Location');

const mymap = new Map('map').setView([43.2089, -2.4112], 10);

tileLayerSelect(tileLayers.baseLayers.hikeBike.map, {
    attribution: tileLayers.baseLayers.hikeBike.atribution
}).addTo(mymap);

// Eventos de localización

mymap.on('locationfound', (e: {
    accuracy: number, latlng: LatLng
}) => {
    const markerItem = marker(e.latlng).addTo(mymap).bindPopup('Mi ubicación');
    circle(e.latlng, {
        radius: e.accuracy,
        color: 'red'
    }).addTo(mymap);
    mymap.fitBounds([
        [markerItem.getLatLng().lat, markerItem.getLatLng().lng]
    ]);
});

mymap.on('locationerror', (e: {message: string}) => console.error(e.message));

mymap.locate();
