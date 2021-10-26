import { tileLayers } from '../../../config/tile-layers/data';
import { Map, marker } from 'leaflet';
import { startMapTemplate } from '../../../assets/template/content';
import { tileLayerSelect } from '../../../config/tile-layers/functions';

startMapTemplate(document, 'Sección 2 - 2 - Centrando Mapa con fitBounds');

// 1 .- Asignamos ubicación (0, 0)
const mymap = new Map('map').setView([0, 0], 11); //

// 2.- Especificamos el tipo de mapa
tileLayerSelect(tileLayers.baseLayers.thunderForest.map.atlas, {
    attribution: tileLayers.baseLayers.thunderForest.atribution
}).addTo(mymap);

// 3.- Marcadores 

// Torre Eiffel
const eiffelPointMarker = marker([48.8581873,2.2933053]).addTo(mymap);
// Notre Dame
const notreDamePointMarker = marker([48.8528799,2.3497519]).addTo(mymap);

// 4.- Centrar con los elementos especificados como los dos marcadores

mymap.fitBounds([
    [eiffelPointMarker.getLatLng().lat, eiffelPointMarker.getLatLng().lng],
    // Si dejamos esto, se centra en base a este
    [notreDamePointMarker.getLatLng().lat, notreDamePointMarker.getLatLng().lng]
]);