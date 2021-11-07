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
// Tenemos que especificar las líneas, por lo menos con un punto
// inicial y uno final.
/**
 * Se heredan propiedades como las del círculo como color del borde, del relleno,...
 * desde "Path"
 */
// Dibujando líneas con Polyline. Se necesita un array con por lo menos dos localizaciones
// mínimo para formar Un elemento de línea con su inicio y final
const lineOneItem: [number, number][] = [
  [43.175663, -2.412301],
  [43.172156, -2.413997], // MINIMO HASTA AQUI
];

// Creamos los polylines a partir de las coordenadas especificadas
polyline(lineOneItem, { color: "red", weight: 5 }).addTo(
  mymap
).bindTooltip('Línea donde se separan los dos pueblos');
// Probar con popup, para ver el problema que da con el anclaje


// Hacemos zoom teniendo en cuenta los puntos del polyline, nos fijamos en los límites
// para no tener que añadir todos a la hora de centrar
mymap.fitBounds(lineOneItem);