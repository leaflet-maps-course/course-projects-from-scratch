import { Map, popup, circleMarker } from 'leaflet';
import { startMapTemplate } from '../../../assets/template/content';
import { tileLayers } from '../../../config/tile-layers/data';
import { tileLayerSelect } from '../../../config/tile-layers/functions';

startMapTemplate(document, 'Sección 2 - 11 - Trabajando con marcadores circulares');

// Nueva York
const mymap = new Map('map').setView([40.712728, -74.006015], 12);

tileLayerSelect(tileLayers.baseLayers.openTopoMap.map, {
    attribution: tileLayers.baseLayers.openTopoMap.atribution
}).addTo(mymap);

const libertyStatueMarker = circleMarker([40.689209, -74.044425], {
    radius: 30,
    color: "#DBC016",
    fillOpacity: 0.3,
    fillColor: "#16DB40",
    weight: 5
}).addTo(mymap).bindPopup(`
    <h5>Estatua de la Libertad</h5>
    <p>La Libertad iluminando el mundo (en inglés: Liberty Enlightening the World; en francés</p>
`);

const brooklynBridgeMarker = circleMarker([40.705667, -73.996333], {
    weight: 2,
    fill: false,
    color: "#DF0CF0",
    radius: 50
}).bindPopup(`
    <h5 class="brooklyn_title">Puente de Brooklyn</h5>
    <p>El puente de Brooklyn (conocido inicialmente como puente de <br/>Nueva York y Brooklyn) une los distritos de Manhattan y de Brooklyn en la ciudad de Nueva York</p>
`).addTo(mymap);

const popupItem = popup().setLatLng([40.712728, -74.006015])
.setContent('<h2>Nueva York</h2>')
.openOn(mymap);

mymap.fitBounds([
    [libertyStatueMarker.getLatLng().lat, libertyStatueMarker.getLatLng().lng],
    [brooklynBridgeMarker.getLatLng().lat, brooklynBridgeMarker.getLatLng().lng],
    [popupItem.getLatLng()!.lat, popupItem.getLatLng()!.lng]
]);