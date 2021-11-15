import { control, Map } from 'leaflet';
import { startMapTemplate } from '../../../assets/template/content';
import { tileLayerSelect } from '../../../config/tile-layers/functions';

startMapTemplate(document, 'Plantilla - Mapa con Typescript');

const mymap = new Map('map').setView([43.3082977,-1.9837398], 10);

// https://leafletjs.com/reference.html#control-scale
tileLayerSelect().addTo(mymap);

control.scale({
    position: 'bottomright',
    imperial: true, // millas si,
    metric: true,       // metros no
    // Si es verdadero, el control se actualiza en moveend; 
    // de lo contrario, siempre está actualizado (se actualiza en movimiento).
    updateWhenIdle: false
}).addTo(mymap);