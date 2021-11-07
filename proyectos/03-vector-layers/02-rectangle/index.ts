import { tileLayers } from '../../../config/tile-layers/data';
import { LatLngBounds, Map, rectangle } from 'leaflet';
import { startMapTemplate } from '../../../assets/template/content';
import { tileLayerSelect } from '../../../config/tile-layers/functions';

startMapTemplate(document, 'Secci&oacute; 3 - 02 - rectangle - Dibujar rectangulos');

const mymap = new Map('map').setView([0 , 0], 10);

tileLayerSelect(tileLayers.baseLayers.hikeBike.map, {
    attribution: tileLayers.baseLayers.hikeBike.atribution
}).addTo(mymap);

// + info:
// https://leafletjs.com/reference.html#rectangle
// https://www.openstreetmap.org/
// ===========================================================
// Tenemos que especificar el cuadrado, especificando por lo menos una de las 
// esquinas de cada lado.
// si usamos la esquina superior de la izquierda, tenemos que especificar la
// inferior de la derecha y viceversa, es decir, inferior izquierda, superior derecha
/**
 * Se heredan propiedades como las del círculo como color del borde, del relleno,...
 * desde "Path"
 */

const boundsOne = new LatLngBounds([[43.2103, -2.4187], [43.2019, -2.3976]]);

// create an orange rectangle
const rectangleOne = rectangle(boundsOne, {color: "#ff7800", weight: 6}).addTo(mymap);

const boundsTwo = new LatLngBounds([[43.2078, -2.4073], [43.22154, -2.36643]]);

const rectangleTwo = rectangle(boundsTwo, {color: "red", weight: 1}).addTo(mymap);

// Para ver su estructura con lat y lng, para luego usarlo en fitBouns
console.log(rectangleOne.getCenter());
// zoom the map to the rectangle bounds
mymap.fitBounds([
  [rectangleOne.getCenter().lat, rectangleOne.getCenter().lng], 
  [rectangleTwo.getCenter().lat, rectangleTwo.getCenter().lng], 
]);