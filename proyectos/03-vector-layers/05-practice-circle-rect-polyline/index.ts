import { tileLayers } from '../../../config/tile-layers/data';
import { circle, Map, marker, LatLngBounds, rectangle, polyline } from 'leaflet';
import { startMapTemplate } from '../../../assets/template/content';
import { tileLayerSelect } from '../../../config/tile-layers/functions';

startMapTemplate(document, 'Secci&oacute; 3 - 05 - Repaso de lo anterior');

const mymap = new Map('map').setView([43.1998468 , -2.2865083], 10);

tileLayerSelect(tileLayers.baseLayers.hikeBike.map, {
    attribution: tileLayers.baseLayers.hikeBike.atribution
}).addTo(mymap);


// 1.- Marcador Londres 

marker([51.5073219, -0.1276474]).addTo(mymap).bindPopup(`
  <h5>Londres</h5>
  <p>
  Capital de Inglaterra y del Reino Unido. <br/>
  <a href="https://es.wikipedia.org/wiki/Londres" target="_blank"> Más información</a>
  </p>
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Trafalgar_Square_by_Christian_Reimer.jpg/640px-Trafalgar_Square_by_Christian_Reimer.jpg" />
  `);

// 2.- Círculo con la zona de Candem Town

circle([51.54230, -0.14050], {
  weight: 6, color: 'pink', radius: 500
}).bindTooltip('Camden Town').addTo(mymap);

// 3.- Londres 1806 - Rectángulo
// West Ham / Fulham
// Añadiré el límite superior derecho y el límite izquierdo inferior

const londresInPastBounds = new LatLngBounds([
  [51.5371, 0.0188], [51.4724,-0.1983]
]);

rectangle(londresInPastBounds, {
  color: '#36b6c7'
}).addTo(mymap);

// 4.- Big Ben

circle([51.50068,-0.12457], {
  radius: 10, color: 'yellow', fillColor: 'green', fillOpacity: 0.5
}).addTo(mymap);

// 5.- Carretera de Buckingham Palace

const buckinghamPalaceRoad: [number, number] [] = 
  [
    [51.49105,-0.14939], 
    [51.49252,-0.14779], 
    [51.49386,-0.14684],
    [51.49399,-0.14683],
    [51.49590,-0.14549],
    [51.49719,-0.14627],
    [51.49726,-0.14635],
    [51.49792,-0.14679]
  ]; // Minimo dos posiciones, esto será un trazo

  polyline(buckinghamPalaceRoad, {
    weight: 8, color: '#e8c889'
  }).addTo(mymap);


// Último paso, crear los límites imaginarios para trazar la zona y centrar y ajustar zoom
const adjustCenterZoomBounds = new LatLngBounds([
  // Forestgate - Manor park / 
  [51.5518,0.0360], [51.4724,-0.1983]
]);
// Esto lo usamos como referencia
// const adjustREctangle = rectangle(adjustCenterZoomBounds).addTo(mymap);
mymap.fitBounds(adjustCenterZoomBounds);