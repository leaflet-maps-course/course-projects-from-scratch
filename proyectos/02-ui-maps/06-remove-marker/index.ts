import { Map, marker } from 'leaflet';
import { startMapTemplate } from '../../../assets/template/content';
import { tileLayers } from '../../../config/tile-layers/data';
import { tileLayerSelect } from '../../../config/tile-layers/functions';

startMapTemplate(document, 'Sección 2 - 06 - Eliminar un marcador moviéndolo');

const mymap = new Map('map').setView([0, 0], 12);

tileLayerSelect(tileLayers.baseLayers.osmHot.map, {
    attribution: tileLayers.baseLayers.osmHot.atribution
}).addTo(mymap);
const options = {
    draggable: true
};
const eiffelMarker = marker([48.8594531,2.2950718], options).addTo(mymap);
const picassoMuseumMarker = marker([48.859175,2.3641795], options).addTo(mymap);
const saintDennisMarker = marker([48.9346965,2.3656021], options).addTo(mymap);

mymap.fitBounds([
    [eiffelMarker.getLatLng().lat, eiffelMarker.getLatLng().lng],
    [picassoMuseumMarker.getLatLng().lat, picassoMuseumMarker.getLatLng().lng],
    [saintDennisMarker.getLatLng().lat, saintDennisMarker.getLatLng().lng]
]);

eiffelMarker.on('move', () => {
    console.log('Marcador Eiffel eliminado');
    mymap.removeLayer(eiffelMarker);
});
picassoMuseumMarker.on('move', () => {
    console.log('Marcador Picasso eliminado');
    mymap.removeLayer(picassoMuseumMarker);
});
saintDennisMarker.on('move', () => {
    console.log('Marcador Saint Denis eliminado');
    mymap.removeLayer(saintDennisMarker);
});