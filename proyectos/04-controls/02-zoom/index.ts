import { control, Map } from 'leaflet';
import { startMapTemplate } from '../../../assets/template/content';
import { tileLayerSelect } from '../../../config/tile-layers/functions';

startMapTemplate(document, 'Plantilla - Mapa con Typescript');

// https://leafletjs.com/reference.html#map-example
const mymap = new Map('map', {
    center: [43.3082977,-1.9837398],
    zoom: 11,
    zoomControl: false, // Escondemos el control de zoom por defecto
  });

// https://leafletjs.com/reference.html#control-zoom
tileLayerSelect().addTo(mymap);

// control.zoom().addTo(mymap); // El básico

control.zoom({
    zoomInTitle: 'Acercar', // Para el texto el + cuando ponemos cursor
    zoomOutTitle: 'Alejar'  // Para el texto el - cuando ponemos cursor
}).addTo(mymap); // El básico