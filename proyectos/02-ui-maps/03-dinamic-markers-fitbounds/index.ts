import { Map, marker } from 'leaflet';
import { drinkWaterSoraluze } from '../../../assets/data/markers/drink_waters';
import { startMapTemplate } from '../../../assets/template/content';
import { tileLayers } from '../../../config/tile-layers/data';
import { tileLayerSelect } from '../../../config/tile-layers/functions';

startMapTemplate(document, 'Sección 2 - 03 - Trabajando cpon marcadores dinámicos');

const mymap = new Map('map').setView([0, 0], 12);

tileLayerSelect(tileLayers.baseLayers.thunderForest.map.atlas, {
    attribution: tileLayers.baseLayers.thunderForest.atribution
}).addTo(mymap);

// Carga dinámica de los marcadores

drinkWaterSoraluze.map((point) => {
    marker([point.lat, point.lon]).addTo(mymap);
});

const drinkWaterEibar = marker([43.1837883,-2.4719938]).addTo(mymap);

mymap.fitBounds([
    ...drinkWaterSoraluze.map(point => [point.lat, point.lon] as [number, number]),
    [drinkWaterEibar.getLatLng().lat, drinkWaterEibar.getLatLng().lng]
]);