import { Map } from 'leaflet';
import { tileLayerSelect } from '../../../config/tile-layers/functions';

const mymap = new Map('map').setView([43.3082977,-1.9837398], 10);

tileLayerSelect().addTo(mymap);