import { tileLayers } from '../../../config/tile-layers/data';
import { divIcon, Map, marker, Point } from 'leaflet';
import { startMapTemplate } from '../../../assets/template/content';
import { tileLayerSelect } from '../../../config/tile-layers/functions';

startMapTemplate(document, 'Sección 2 - 15 - Iconos con Capas personalizadas + Fuentes - DivICon + FontAwesome ');

// 1 .- Asignamos ubicación (Paris)
const mymap = new Map('map').setView([48.8588336,2.276995], 11);

// 2.- Especificamos el tipo de mapa
tileLayerSelect(tileLayers.baseLayers.osmHot.map, {
    attribution: tileLayers.baseLayers.osmHot.atribution
}).addTo(mymap);

// 3.- Iconos de capa (DivIcon)
const myIcon = divIcon({className: 'my-div-icon', html: '<i class="fas fa-ethernet"></i>'});
// you can set .my-div-icon styles in CSS

  // Torre Eiffel
marker([48.8581873,2.2933053], {icon: myIcon}).addTo(mymap).bindPopup("Torre Eiffel", {
  offset: [6, 2] // Para ubicar el cursor del popup
});
// Notre Dame
marker([48.8528799,2.3497519]).addTo(mymap);