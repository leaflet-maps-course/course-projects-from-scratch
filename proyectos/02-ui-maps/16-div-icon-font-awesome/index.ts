import { divIcon, Map, marker } from 'leaflet';
import { startMapTemplate } from '../../../assets/template/content';
import { tileLayers } from '../../../config/tile-layers/data';
import { tileLayerSelect } from '../../../config/tile-layers/functions';

startMapTemplate(
  document,
  'Sección 2 - 16 - Trabajando con Div Icon y Font Awesome'
);

const mymap = new Map('map').setView([0, 0], 12);

tileLayerSelect(tileLayers.baseLayers.thunderForest.map.neighbourhood, {
  attribution: tileLayers.baseLayers.thunderForest.atribution,
}).addTo(mymap);

// 3.- Iconos de capa (DivIcon)
const customDivIconMuseum = divIcon({
  className: 'marker-basic',
  html: '<i class="fas fa-landmark"></i>',
});
const customDivIconStadium = divIcon({
  className: 'marker-basic',
  html: '<i class="fas fa-running"></i>',
});

// Nuevo estadio nacional de Tokio
const nationalStadiumTokioMarker = marker([35.6778, 139.7145], {
  icon: customDivIconStadium,
})
  .addTo(mymap)
  .bindPopup(
    `
  <h5>Nuevo Estadio Nacional Tokio</h5>
  <a href="https://es.wikipedia.org/wiki/Estadio_Ol%C3%ADmpico_de_Tokio_(2019)" target="_blank">
  Wikipedia
  </a>
  `,
    { offset: [11, 5] }
  );
// https://es.wikipedia.org/wiki/Museo_Nacional_de_Tokio
const nationalMuseumTokioMarker = marker([35.718774, 139.776446], {
  icon: customDivIconMuseum,
})
  .addTo(mymap)
  .bindPopup(
    `
  <h5>Museo Nacional Tokio</h5>
  <a href="https://es.wikipedia.org/wiki/Museo_Nacional_de_Tokio" target="_blank">
  Wikipedia
  </a>
  `,
    { offset: [11, 5] }
  );

mymap.fitBounds([
  [
    nationalMuseumTokioMarker.getLatLng().lat,
    nationalMuseumTokioMarker.getLatLng().lng,
  ],
  [
    nationalStadiumTokioMarker.getLatLng().lat,
    nationalStadiumTokioMarker.getLatLng().lng,
  ],
]);
