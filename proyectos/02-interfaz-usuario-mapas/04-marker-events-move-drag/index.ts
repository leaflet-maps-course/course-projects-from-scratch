import { tileLayerWMSSelect } from '../../../config/tile-layers/functions';
import { tileLayersWMS } from '../../../config/tile-layers/data';
import { Map, marker } from 'leaflet';
import { startMapTemplate } from '../../../assets/template/content';

startMapTemplate(document, 'Sección 2 - 4 - Eventos de marcadores - Mover y arrastrar');

const mymap = new Map('map').setView([-33.8732392,151.2144378], 11);

tileLayerWMSSelect(tileLayersWMS.mundialis.baseUrl, {
    layers: tileLayersWMS.mundialis.layers.osmOverlayWMS
}).addTo(mymap);

// 1.- Añadir marcador
const markerItem = marker([-33.8732392,151.2144378], {draggable: true}).addTo(mymap);

// Orden, siempre va por delante mover sobre arrastrar
markerItem.on("move", () => {
    console.log("move - Moviendo el marcador arrastrándolo");
});

markerItem.on("dragstart", () => {
    console.log("dragstart - Empieza el arrastre");
});

markerItem.on("movestart", () => {
    console.log("movestart - Se mueve cuando se empieza a arrastrar");
});

markerItem.on("drag", () => {
    console.log("drag - arrastrando");
});

markerItem.on("dragend", () => {
    console.log("dragend - Dejamos de arrastrar");
});

markerItem.on("moveend", () => {
    console.log("moveend - Se ejecuta después de dejar de arrastrar");
});

