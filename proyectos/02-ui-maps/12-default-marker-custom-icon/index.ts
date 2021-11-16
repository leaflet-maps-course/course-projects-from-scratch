import { Icon, Map, marker } from 'leaflet';
import { drinkWaterSoraluze } from '../../../assets/data/markers/drink_waters';
import { startMapTemplate } from '../../../assets/template/content';
import { tileLayers } from '../../../config/tile-layers/data';
import { tileLayerSelect } from '../../../config/tile-layers/functions';

startMapTemplate(document, 'Sección 2 - 12 - Personalizando marcador por defecto con otros colores');

const mymap = new Map('map').setView([0, 0], 12);
// Maracdores por defecto en otros colores
// https://github.com/pointhi/leaflet-color-markers/
tileLayerSelect(tileLayers.baseLayers.thunderForest.map.atlas, {
    attribution: tileLayers.baseLayers.thunderForest.atribution
}).addTo(mymap);

// Carga dinámica de los marcadores
const greenIcon = new Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  const redIcon = new Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
drinkWaterSoraluze.map((point) => {
    marker([point.lat, point.lon], {icon: redIcon}).addTo(mymap).bindPopup(point.name);
});

const drinkWaterEibar = marker([43.1837883,-2.4719938], {icon: greenIcon}).addTo(mymap);

mymap.fitBounds([
    ...drinkWaterSoraluze.map(point => [point.lat, point.lon] as [number, number]),
    [drinkWaterEibar.getLatLng().lat, drinkWaterEibar.getLatLng().lng]
]);