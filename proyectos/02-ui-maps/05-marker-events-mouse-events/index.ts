import { Map, marker } from 'leaflet';
import { startMapTemplate } from '../../../assets/template/content';
import { tileLayers } from '../../../config/tile-layers/data';
import { tileLayerSelect } from '../../../config/tile-layers/functions';

startMapTemplate(document, 'Sección 2 - 05 - Eventos marcadores - Ratón - Mouse');

const mymap = new Map('map').setView([48.8558971,2.3360465], 12);

tileLayerSelect(tileLayers.baseLayers.osmHot.map, {
    attribution: tileLayers.baseLayers.osmHot.atribution
}).addTo(mymap);

const eiffelMarker = marker([48.8594531,2.2950718]).addTo(mymap);

eiffelMarker.on('click', () => console.log('click'));
eiffelMarker.on('dblclick', () => console.log('Doblie click'));
eiffelMarker.on('mousedown', () => console.log('Haciendo click - mousedown'));
eiffelMarker.on('mouseup', () => console.log('Dejando de hacer click - mouseup'));
eiffelMarker.on('mouseover', () => console.log('mouseover - Estamos sobre el marcador'));
eiffelMarker.on('mouseout', () => console.log('mouseout - No estamos sobre el marcador'));
eiffelMarker.on('contextmenu', () => console.log('contextmenu - Click derecho del ratón'));