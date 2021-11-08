import { circle, circleMarker, Map } from 'leaflet';
import { startMapTemplate } from '../../../assets/template/content';
import { tileLayerSelect } from '../../../config/tile-layers/functions';
import { tileLayers } from '../../../config/tile-layers/data';

startMapTemplate(document, 'Sección 3 - 01 - circle');

const mymap = new Map('map').setView([43.2089, -2.4112], 10);

tileLayerSelect(tileLayers.baseLayers.openTopoMap.map, {
    attribution: tileLayers.baseLayers.openTopoMap.atribution
}).addTo(mymap);

const mintxetaCircle = circle([43.2089, -2.4112], {radius: 200, color: 'orange'}).addTo(mymap);

const idotorbeCircle = circle([43.2146, -2.4406], {radius: 400, color: 'yellow'}).addTo(mymap);

mymap.fitBounds([
    [mintxetaCircle.getLatLng().lat, mintxetaCircle.getLatLng().lng],
    [idotorbeCircle.getLatLng().lat, idotorbeCircle.getLatLng().lng]
]);