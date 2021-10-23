import { Map, tileLayer} from 'leaflet';
import { tileLayers } from '../../../config/tile-layers/data';

const mymap = new Map('map').setView([41.909986,12.3959119], 11);

tileLayer.wms('http://ows.mundialis.de/services/service?', {
    layers: 'Dark',
    format: 'image/png',
    transparent: true,
    attribution: tileLayers.baseLayers.default.atribution
}).addTo(mymap);