import { Map } from 'leaflet';
import { tileLayers } from '../../../config/tile-layers/data';
import { tileLayerSelect } from '../../../config/tile-layers/functions';

const mymap = new Map('map').setView([43.3082977, -1.9837398], 10);

tileLayerSelect(tileLayers.baseLayers.hikeBike.map, {
  maxZoom: 20,
  attribution: tileLayers.baseLayers.hikeBike.atribution,
}).addTo(mymap);
