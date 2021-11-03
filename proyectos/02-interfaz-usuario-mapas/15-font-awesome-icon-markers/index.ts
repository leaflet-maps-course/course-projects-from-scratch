import { tileLayers } from '../../../config/tile-layers/data';
import { divIcon, Map, marker } from 'leaflet';
import { startMapTemplate } from '../../../assets/template/content';
import { tileLayerSelect } from '../../../config/tile-layers/functions';

startMapTemplate(document, 'Sección 2 - 1 - Primer marcador en Leaflet');

// 1 .- Asignamos ubicación (Paris)
const mymap = new Map('map').setView([48.8588336,2.276995], 11);

// 2.- Especificamos el tipo de mapa
tileLayerSelect(tileLayers.baseLayers.osmHot.map, {
    attribution: tileLayers.baseLayers.osmHot.atribution
}).addTo(mymap);

// 3.- Iconos de capa (DivIcon)

// coffe

const coffeCustomDivIcon = divIcon({
    className: "custom-div-icon",
    html: "<div class='marker-pin green'></div><i class=\"fas fa-mug-hot\"></i>",
    iconSize: [30, 42],
    iconAnchor: [15, 42],
  });


  // Torre Eiffel
marker([48.8581873,2.2933053], {
    icon: coffeCustomDivIcon,
  }).addTo(mymap);
// Notre Dame
marker([48.8528799,2.3497519]).addTo(mymap);