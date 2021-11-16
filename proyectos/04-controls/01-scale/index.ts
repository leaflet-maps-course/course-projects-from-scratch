import { control, Map } from 'leaflet';
import { startMapTemplate } from '../../../assets/template/content';
import { tileLayerSelect } from '../../../config/tile-layers/functions';

startMapTemplate(document, 'Sección 04- 01 - Control de Escala - scale');

const mymap = new Map('map').setView([43.3082977,-1.9837398], 10);

tileLayerSelect().addTo(mymap);

// Vamos a añadir el control de escala
control.scale().addTo(mymap);