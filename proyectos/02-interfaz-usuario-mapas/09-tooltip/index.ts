import { tileLayers } from '../../../config/tile-layers/data';
import { Map, marker } from 'leaflet';
import { startMapTemplate } from '../../../assets/template/content';
import { tileLayerSelect } from '../../../config/tile-layers/functions';
// https://github.com/leaflet-maps-course/resources
startMapTemplate(document, 'Sección 2 - 9 - Añadiendo Tooltip al marcador');

// 1 .- Asignamos ubicación (San Juan - Puerto Rico)
const mymap = new Map('map').setView([18.3987923,-66.0726931], 11);

// 2.- Especificamos el tipo de mapa
tileLayerSelect(tileLayers.baseLayers.stadia.map.Outdoors, {
    attribution: tileLayers.baseLayers.stadia.atribution
}).addTo(mymap);

// 3.- Marcadores 

// Museo del Niño de Carolina
// Se puede moddificar el estilo del contenido
marker([18.4204258,-65.963317]).addTo(mymap).bindTooltip(`
    <h2> Museo del niño de Carolina </h2>
    <span> Museo que encontramos en San Juan </span>
`).openPopup(); 
// openPopUp => Esto último hace que estée automáticamente abierto
// Solo puede abrirse uno a la vez.

// Aeropuerto San Juan
const sanJuanAiporImg = "https://raw.githubusercontent.com/leaflet-maps-course/resources/main/img/airports/sanjuan.jpeg";
marker([18.4377544,-66.002154]).addTo(mymap).bindTooltip(`
    <h2> Aeropuerto San Juan </h2>
    <span> <b>Vuelos</b> Internacionales </span><br/>
    <img src="${sanJuanAiporImg}"" />
`, {
    direction: 'right', sticky: false // Para moverse con el cursor
});