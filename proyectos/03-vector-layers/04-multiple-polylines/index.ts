import { tileLayers } from '../../../config/tile-layers/data';
import {  Map, polyline, rectangle } from 'leaflet';
import { startMapTemplate } from '../../../assets/template/content';
import { tileLayerSelect } from '../../../config/tile-layers/functions';

startMapTemplate(document, 'Secci&oacute; 3 - 02 - rectangle - Dibujar rectangulos');

const mymap = new Map('map').setView([0 , 0], 10);

tileLayerSelect(tileLayers.baseLayers.hikeBike.map, {
    attribution: tileLayers.baseLayers.hikeBike.atribution
}).addTo(mymap);

// + info:
// https://leafletjs.com/reference.html#rectangle
// https://www.openstreetmymap.org/
// ===========================================================
// Tenemos que especificar el cuadrado, especificando por lo menos una de las 
// esquinas de cada lado.
// si usamos la esquina superior de la izquierda, tenemos que especificar la
// inferior de la derecha y viceversa, es decir, inferior izquierda, superior derecha
/**
 * Se heredan propiedades como las del círculo como color del borde, del relleno,...
 * desde "Path"
 */
// Dibujando líneas con Polyline. Se necesita un array con por lo menos dos localizaciones
// mínimo para formar Un elemento de línea
const lineOneItem: [number, number][] = [
  [43.175663, -2.412301],
  [43.172156, -2.413997], // MINIMO HASTA AQUI
];

const lineTwoItem: [number, number][] = [
  [43.181063, -2.420891],
  [43.174981, -2.403418], // MINIMO HASTA AQUI
];

const lineThreeItem: [number, number][] = [
  [43.166945, -2.39552],
  [43.166953, -2.403341], // MINIMO HASTA AQUI
  [43.171572, -2.409777],
];

// Creamos los polylines a partir de las coordenadas especificadas
const polylineItem = polyline(lineOneItem, { color: "red", weight: 5 }).addTo(
  mymap
);
const polylineTwoItem = polyline(lineTwoItem, {
  color: "blue",
  weight: 10,
}).addTo(mymap);
const polylineThreeItem = polyline(lineThreeItem, {
  color: "green",
  weight: 3,
}).addTo(mymap);

// Hacemos zoom teniendo en cuenta los puntos del polyline, nos fijamos en los límites
// para no tener que añadir todos a la hora de centrar
mymap.fitBounds([
  [
    polylineTwoItem.getBounds().getNorthWest().lat,
    polylineTwoItem.getBounds().getNorthWest().lng,
  ],
  [
    polylineThreeItem.getBounds().getSouthEast().lat,
    polylineThreeItem.getBounds().getSouthEast().lng,
  ],
]);