import { Icon, Map, marker } from 'leaflet';
import { drinkWaterSoraluze } from '../../../assets/data/markers/drink_waters';
import { startMapTemplate } from '../../../assets/template/content';
import { tileLayers } from '../../../config/tile-layers/data';
import { tileLayerSelect } from '../../../config/tile-layers/functions';

startMapTemplate(document, 'Sección 2 - 13 - Personalizando marcador con nuestros iconos');

const mymap = new Map('map').setView([0, 0], 12);
// Maracdores por defecto en otros colores
// https://github.com/pointhi/leaflet-color-markers/
tileLayerSelect(tileLayers.baseLayers.thunderForest.map.atlas, {
    attribution: tileLayers.baseLayers.thunderForest.atribution
}).addTo(mymap);

// Carga dinámica de los marcadores

const drinkWaterIcon = new Icon({
  iconUrl: 'https://raw.githubusercontent.com/leaflet-maps-course/resources/main/markers/icons/custom/drink_water.png',
  shadowUrl: 'https://raw.githubusercontent.com/leaflet-maps-course/resources/main/markers/icons/custom/drink_water_shadow.png',
  iconSize: [41, 41],
  iconAnchor: [20, 41],
  popupAnchor: [1, -38],
  shadowSize: [41, 41]
});
drinkWaterSoraluze.map((point) => {
    marker([point.lat, point.lon], {icon: drinkWaterIcon}).addTo(mymap).bindPopup(point.name);
});

const drinkWaterEibar = marker([43.1837883,-2.4719938], {icon: drinkWaterIcon}).addTo(mymap);

mymap.fitBounds([
    ...drinkWaterSoraluze.map(point => [point.lat, point.lon] as [number, number]),
    [drinkWaterEibar.getLatLng().lat, drinkWaterEibar.getLatLng().lng]
]);