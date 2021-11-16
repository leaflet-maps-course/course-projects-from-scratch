import { Map, LatLng, marker, polyline } from 'leaflet';
import { startMapTemplate } from '../../../assets/template/content';
import { tileLayerSelect } from '../../../config/tile-layers/functions';
import { tileLayers } from '../../../config/tile-layers/data';

startMapTemplate(
  document,
  'Sección 3 - 09 - Map Events - Mouse - Over, Out, Move, Down and Up'
);

const mymap = new Map('map').setView([43.2089, -2.4112], 10);

tileLayerSelect(tileLayers.baseLayers.osmManik.map, {
  attribution: tileLayers.baseLayers.osmManik.atribution,
}).addTo(mymap);

// Eventos de mapa
let clickMap = 0;
const points: Array<LatLng> = [];
// Entrada al mapa
mymap.on('mouseover', (e: { latlng: LatLng }) => {
  console.log('mouseover', e.latlng);
});

// Salida del mapa
mymap.on('mouseout', (e: { latlng: LatLng }) => {
  console.log('mouseout', e.latlng);
});

// Cuando hacemos click sobre el mapa
mymap.on('mousedown', (e: { latlng: LatLng }) => {
  console.log('mousedown', e.latlng);
  points.push(e.latlng);
  clickMap += 1;
  if (clickMap === 3) {
      polyline(points, {
          color: 'green', weight: 5
      }).addTo(mymap);
      clickMap = 0;
      points.length = 0;
  }

});

// Cuando dejamos de hacer click
mymap.on('mouseup', (e: { latlng: LatLng }) => {
  console.log('mouseup', e.latlng);
});

// Está en movimiento el cursor dentro del mapa (esto se ejecut más de una eventos)
mymap.on('mousemove', (e: { latlng: LatLng }) => {
  console.log('mousemove', e.latlng);
  // marker(e.latlng).addTo(mymap);
});
