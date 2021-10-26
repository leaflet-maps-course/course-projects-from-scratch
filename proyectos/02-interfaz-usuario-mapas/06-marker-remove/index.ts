import { tileLayers } from '../../../config/tile-layers/data';
import { map, Map, marker } from 'leaflet';
import { startMapTemplate } from '../../../assets/template/content';
import { tileLayerSelect } from '../../../config/tile-layers/functions';

startMapTemplate(document, 'Sección 2 - 6 - Eliminar un marcador');

// 1 .- Asignamos ubicación (Paris)
const mymap = new Map('map').setView([48.8588336,2.276995], 11);

// 2.- Especificamos el tipo de mapa
tileLayerSelect(tileLayers.baseLayers.osmHot.map, {
    attribution: tileLayers.baseLayers.osmHot.atribution
}).addTo(mymap);

// 3.- Marcadores 

// Torre Eiffel
const eiffelPoint = marker([48.8581873,2.2933053], {
    draggable: true // importante para moverlo
}).addTo(mymap);
// Notre Dame
const notreDamePoint = marker([48.8528799,2.3497519], {
    draggable: true // importante para moverlo
}).addTo(mymap);

mymap.fitBounds([
    [eiffelPoint.getLatLng().lat, eiffelPoint.getLatLng().lng],
    [notreDamePoint.getLatLng().lat, notreDamePoint.getLatLng().lng]
]);

eiffelPoint.on("move", () => {
    console.log("Eiffel eliminado");
    mymap.removeLayer(eiffelPoint);
});
notreDamePoint.on("move", () => {
    console.log("Notre Dame eliminado");
    mymap.removeLayer(notreDamePoint);
});