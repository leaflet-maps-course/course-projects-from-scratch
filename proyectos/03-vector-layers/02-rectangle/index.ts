import { Map, rectangle, LatLngBounds } from 'leaflet';
import { startMapTemplate } from '../../../assets/template/content';
import { tileLayerSelect } from '../../../config/tile-layers/functions';
import { tileLayers } from '../../../config/tile-layers/data';

startMapTemplate(document, 'Sección 3 - 02 - rectangle');

const mymap = new Map('map').setView([43.2089, -2.4112], 10);

tileLayerSelect(tileLayers.baseLayers.openTopoMap.map, {
  attribution: tileLayers.baseLayers.openTopoMap.atribution,
}).addTo(mymap);

// define rectangle geographical bounds
// Izquierda superior / derecha inferior
const bounds = new LatLngBounds([
  [43.2288, -2.4413],
  [43.2052, -2.3801],
]);

// create an orange rectangle
const rectangleOne = rectangle(bounds, { color: '#ff7800', weight: 1 }).addTo(
  mymap
);
// Izquierda inferior / derecha superior
const boundsTwo = new LatLngBounds([
  [43.2168, -2.4174],
  [43.2556, -2.3134],
]);

// create an orange rectangle
const rectangleTwo = rectangle(boundsTwo, {
  color: 'pink',
  weight: 7,
  fillColor: 'white',
  fillOpacity: 0.5,
}).addTo(mymap);

const boundsThree = new LatLngBounds([
  [
    rectangleOne.getBounds().getSouthWest().lat,
    rectangleOne.getBounds().getSouthWest().lng,
  ],
  [
    rectangleTwo.getBounds().getNorthEast().lat,
    rectangleTwo.getBounds().getNorthEast().lng,
  ],
]);

rectangle(boundsThree, {
  color: 'red',
  weight: 10,
  fill: false,
}).addTo(mymap);

// zoom the map to the rectangle bounds
mymap.fitBounds(boundsThree);
