import { Map, marker } from 'leaflet';
import { addressPoints } from '../../../assets/data/markers/address_point';
import { startMapTemplate } from '../../../assets/template/content';
import { tileLayers } from '../../../config/tile-layers/data';
import { tileLayerSelect } from '../../../config/tile-layers/functions';

startMapTemplate(document, 'Sección 2 - 17 - Trabajando con agrupación de marcadores');

const mymap = new Map('map').setView([0, 0], 12);

tileLayerSelect(tileLayers.baseLayers.thunderForest.map.atlas, {
    attribution: tileLayers.baseLayers.thunderForest.atribution
}).addTo(mymap);

// Carga dinámica de los marcadores

addressPoints.map((point) => {
    marker([+point[0], +point[1]]).addTo(mymap);
});

mymap.fitBounds([
    ...addressPoints.map(point => [+point[0], +point[1]] as [number, number])
]);