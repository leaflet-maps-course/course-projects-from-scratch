import { Map, marker } from 'leaflet';
import { startMapTemplate } from '../../../assets/template/content';
import { tileLayers } from '../../../config/tile-layers/data';
import { tileLayerSelect } from '../../../config/tile-layers/functions';

startMapTemplate(document, 'Sección 2 - 04 - Eventos marcadores - Moveer y arrastrar');

const mymap = new Map('map').setView([48.8558971,2.3360465], 12);

tileLayerSelect(tileLayers.baseLayers.osmHot.map, {
    attribution: tileLayers.baseLayers.osmHot.atribution
}).addTo(mymap);

const eiffelMarker = marker([48.8594531,2.2950718], {
    draggable: true
}).addTo(mymap);

eiffelMarker.on("movestart", () => console.log("movestart - Empezamos a mover"));
eiffelMarker.on("dragstart", () => console.log("dragstart - Empezamos a arrastrar"));
eiffelMarker.on("move", () => console.log("move - Estamos moviendo"));
eiffelMarker.on("drag", () => console.log("drag - Estamos arrastrando"));
eiffelMarker.on("moveend", () => console.log("moveend - Finalizamos mover"));
eiffelMarker.on("dragend", () => console.log("dragend - Finalizamos arrastre"));