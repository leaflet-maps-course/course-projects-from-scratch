import { Map } from 'leaflet';
import { startMapTemplate } from '../../../assets/template/content';
import { tileLayerSelect } from '../../../config/tile-layers/functions';
import { fullScreenMap } from '../custom-controls/full-screen-map';

startMapTemplate(document, 'Sección 04 - 06 - Full Screen Map');

const mymap = new Map('map').setView([43.3082977,-1.9837398], 10);

tileLayerSelect().addTo(mymap);

fullScreenMap().addTo(mymap);