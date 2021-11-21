import { fullScreenMap } from './../custom-controls/full-screen-map';
import { markerInCenterMap } from './../custom-controls/marker-center-btn';
import { Map } from 'leaflet';
import { startMapTemplate } from '../../../assets/template/content';
import { tileLayerSelect } from '../../../config/tile-layers/functions';
import { titleSubtitle } from '../custom-controls/title-subtitle';

startMapTemplate(document, 'Sección 04 - 05 - Controles Custom - Titulo / Subtitulo');

const mymap = new Map('map').setView([43.3082977,-1.9837398], 10);

tileLayerSelect().addTo(mymap);

titleSubtitle().addTo(mymap);

markerInCenterMap().addTo(mymap);

fullScreenMap().addTo(mymap);

