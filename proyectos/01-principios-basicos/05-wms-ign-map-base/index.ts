import { Map} from 'leaflet';
import { tileLayers } from '../../../config/tile-layers/data';
import { tileLayerWMSSelect } from '../../../config/tile-layers/functions';

const mymap = new Map('map').setView([40.4378698,-3.8196223], 11);

tileLayerWMSSelect(
    'https://www.ign.es/wms-inspire/ign-base?',
    {
        layers: 'IGNBaseTodo',
        format: 'image/png',
        transparent: true,
        attribution: tileLayers.baseLayers.default.atribution
    }
).addTo(mymap);