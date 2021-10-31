import { Map, marker, popup } from 'leaflet';
import { startMapTemplate } from '../../../assets/template/content';
import { tileLayers } from '../../../config/tile-layers/data';
import { tileLayerSelect } from '../../../config/tile-layers/functions';

startMapTemplate(document, 'Sección 2 - 08 - Popup con marcadores y sin marcadores');

// Nueva York
const mymap = new Map('map').setView([40.712728, -74.006015], 12);

tileLayerSelect(tileLayers.baseLayers.cartoDb.map.voyager, {
    attribution: tileLayers.baseLayers.cartoDb.atribution
}).addTo(mymap);

const libertyStatueImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Liberty_Island_photo_D_Ramey_Logan.jpg/375px-Liberty_Island_photo_D_Ramey_Logan.jpg";
const libertyStatueMarker = marker([40.689209, -74.044425]).addTo(mymap).bindPopup(`
    <h5>Estatua de la Libertad</h5>
    <p>La Libertad iluminando el mundo (en inglés: Liberty Enlightening the World; en francés</p>
    <img src="${libertyStatueImg}" />
`);
const brooklynBridgeImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/NYCBrooklynBridge.jpg/413px-NYCBrooklynBridge.jpg";
const brooklynBridgeMarker = marker([40.705667, -73.996333]).bindPopup(`
    <h5 class="brooklyn_title">Puente de Brooklyn</h5>
    <p>El puente de Brooklyn (conocido inicialmente como puente de Nueva York y Brooklyn) une los distritos de Manhattan y de Brooklyn en la ciudad de Nueva York</p>
    <img src="${brooklynBridgeImg}" />
`).addTo(mymap);

const popupItem = popup().setLatLng([40.712728, -74.006015])
.setContent('<h2>Nueva York</h2>')
.openOn(mymap);

mymap.fitBounds([
    [libertyStatueMarker.getLatLng().lat, libertyStatueMarker.getLatLng().lng],
    [brooklynBridgeMarker.getLatLng().lat, brooklynBridgeMarker.getLatLng().lng],
    [popupItem.getLatLng()!.lat, popupItem.getLatLng()!.lng]
]);