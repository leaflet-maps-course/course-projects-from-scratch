import { tileLayers } from '../../../config/tile-layers/data';
import { Map, marker } from 'leaflet';
import { startMapTemplate } from '../../../assets/template/content';
import { tileLayerSelect } from '../../../config/tile-layers/functions';
// REcursos https://github.com/leaflet-maps-course/resources
startMapTemplate(document, 'Sección 2 - 8 - Añadiendo Popup al marcador');

// 1 .- Asignamos ubicación (Nueva York)
const mymap = new Map('map').setView([18.3987923,-66.0726931], 11);

// 2.- Especificamos el tipo de mapa
tileLayerSelect(tileLayers.baseLayers.stadia.map.Outdoors, {
    attribution: tileLayers.baseLayers.stadia.atribution
}).addTo(mymap);

// 3.- Marcadores 

// Manhattan
// Se puede moddificar el estilo del contenido
marker([40.7613536,-73.9103858]).addTo(mymap).bindPopup(`
    <h2 class="popuptitle"> Manhattan </h2>
    <span> Lugar muy turístico y que debes de visitar</span>
    <br/>
    <img src="https://raw.githubusercontent.com/leaflet-maps-course/resources/main/img/parks/manhattan.png" />
`).openPopup(); 
// openPopUp => Esto último hace que estée automáticamente abierto
// Solo puede abrirse uno a la vez.

// Estatua Libertad
marker([40.6907054,-74.0382192]).addTo(mymap).bindPopup(`
    <h2> Estatua de la Libertad </h2>
    <span> Una de las atracciones de NY que fue fundada en 28 de octubre de 1886</span>
`);