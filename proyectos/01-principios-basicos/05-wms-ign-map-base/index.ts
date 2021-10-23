import { Map, tileLayer} from 'leaflet';
import { tileLayers } from '../../../config/tile-layers/data';

const mymap = new Map('map').setView([40.4378698,-3.8196223], 11);

tileLayer.wms('https://www.ign.es/wms-inspire/ign-base?', {
    layers: 'IGNBaseTodo',
    format: 'image/png',
    transparent: true,
    attribution: tileLayers.baseLayers.default.atribution
}).addTo(mymap);