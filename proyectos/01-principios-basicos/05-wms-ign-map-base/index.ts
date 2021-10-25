import { Map} from 'leaflet';
import { tileLayers, tileLayersWMS } from '../../../config/tile-layers/data';
import { tileLayerWMSSelect } from '../../../config/tile-layers/functions';

const mymap = new Map('map').setView([40.4378698,-3.8196223], 11);

tileLayerWMSSelect(
    tileLayersWMS.ign.baseUrl,
    {
        layers: tileLayersWMS.ign.layers.baseTodo,
        format: 'image/png',
        transparent: true,
        attribution: tileLayers.baseLayers.default.atribution
    }
).addTo(mymap);