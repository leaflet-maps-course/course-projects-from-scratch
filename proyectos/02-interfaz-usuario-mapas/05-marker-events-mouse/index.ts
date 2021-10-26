import { tileLayerWMSSelect } from '../../../config/tile-layers/functions';
import { tileLayersWMS } from '../../../config/tile-layers/data';
import { Map, marker } from 'leaflet';
import { startMapTemplate } from '../../../assets/template/content';

startMapTemplate(document, 'Sección 2 - 5 - Eventos de marcadores - Mouse');

const mymap = new Map('map').setView([-33.8732392,151.2144378], 11);

tileLayerWMSSelect(tileLayersWMS.mundialis.baseUrl, {
    layers: tileLayersWMS.mundialis.layers.osmOverlayWMS
}).addTo(mymap);

// 1.- Añadir marcador
const markerItem = marker([-33.8732392,151.2144378], {draggable: true}).addTo(mymap);

// Orden, siempre va por delante mover sobre arrastrar
markerItem.on("click", () => {
    console.log("click - Un click");
});

markerItem.on("dblclick", () => {
    console.log("dblclick - Dos clicks");
});

markerItem.on("mousedown", () => {
    console.log("mousedown - Cursor pulsando marcador");
});

markerItem.on("mouseup", () => {
    console.log("mouseup - Cursor deja de pulsar el marcador");
});

markerItem.on("mouseover", () => {
    console.log("mouseover - Cuando entra el cursor en contacto con el marcador");
});

markerItem.on("mouseout", () => {
    console.log("mouseout - Cuando sale el cursor en contacto con el marcador");
});

