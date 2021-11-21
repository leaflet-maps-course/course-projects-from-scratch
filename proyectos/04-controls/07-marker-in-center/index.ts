import { Map } from 'leaflet';
import { startMapTemplate } from '../../../assets/template/content';
import { tileLayerSelect } from '../../../config/tile-layers/functions';
import { markerInCenterMap } from '../custom-controls/marker-center-map';

startMapTemplate(document, 'Sección 04 - 07 - Marcador en el centro');

const mymap = new Map('map').setView([43.3082977,-1.9837398], 10);

tileLayerSelect().addTo(mymap);

markerInCenterMap().addTo(mymap);