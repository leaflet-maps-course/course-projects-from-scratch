import { tileLayers } from '../../../config/tile-layers/data';
import { circle, Map, polygon, LatLngBounds } from 'leaflet';
import { startMapTemplate } from '../../../assets/template/content';
import { tileLayerSelect } from '../../../config/tile-layers/functions';

startMapTemplate(document, 'Secci&oacute; 3 - 06 - polygon');

const mymap = new Map('map').setView([43.1998468 , -2.2865083], 10);

tileLayerSelect(tileLayers.baseLayers.default.map, {
    attribution: tileLayers.baseLayers.default.atribution
}).addTo(mymap);

polygon([ [
  [43.30232,-1.97230],
  [43.30198,-1.97196],
  [43.30233,-1.97181]
]], {
  color: 'green'
}).addTo(mymap).bindPopup(`Anoeta Hotela`);

polygon([
  [43.30158,-1.97439],
  [43.30075,-1.97354],
  [43.30119,-1.97274],
  [43.30200,-1.97360]
]).addTo(mymap).bindPopup('Anoeta Estadioa (Reale Arena)');

const amaraBerriBounds = new LatLngBounds([
  [43.30244,-1.97162], [43.30029,-1.97556]
]);

mymap.fitBounds(amaraBerriBounds);

