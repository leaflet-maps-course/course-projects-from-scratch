import { Map, control } from 'leaflet';
import { startMapTemplate } from '../../../assets/template/content';
import { tileLayerSelect } from '../../../config/tile-layers/functions';

startMapTemplate(document, 'Sección 04 - 02 - Control del zoom -  zoom');

const mymap = new Map('map', {
    zoomControl: false
}).setView([43.3082977,-1.9837398], 10);

tileLayerSelect().addTo(mymap);

control.zoom({
    zoomInTitle: 'Acercar',
    zoomOutTitle: 'Alejar',
    position: 'topleft'
}).addTo(mymap);
