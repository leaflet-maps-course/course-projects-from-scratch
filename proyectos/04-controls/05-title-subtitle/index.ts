import { PLACES_LIST_LOCATIONS } from './../../../config/map/locations';
import { Map } from 'leaflet';
import { startMapTemplate } from '../../../assets/template/content';
import { tileLayerSelect } from '../../../config/tile-layers/functions';
import { titleSubtitle } from '../custom-controls/title-subtitle';

startMapTemplate(
  document,
  'Sección 04 - 05 - Controles personalizados - Titulo / Subtitulo'
);

const mymap = new Map('map').setView(
  PLACES_LIST_LOCATIONS.MANILA_FILIPINAS as [number, number],
  10
);

tileLayerSelect().addTo(mymap);

// Ajustes por defecto
titleSubtitle().addTo(mymap);


// Arriba a la derecha y personalizado
titleSubtitle({
    position: 'topright', title: 'Control topright', subtitle: 'Arriba a la derecha'
}).addTo(mymap);


// Debajo a la derecha y personalizado
titleSubtitle({
    position: 'bottomright', title: 'Control bottomright', subtitle: 'Abajo a la derecha'
}).addTo(mymap);

// Arriba a la izquierda y personalizado
titleSubtitle({
    position: 'topleft', title: 'Control topleft', subtitle: 'Arriba a la izquierda'
}).addTo(mymap);
