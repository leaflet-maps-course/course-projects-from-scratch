import { tileLayers } from '../../../config/tile-layers/data';
import { circleMarker, Map, marker } from 'leaflet';
import { startMapTemplate } from '../../../assets/template/content';
import { tileLayerSelect } from '../../../config/tile-layers/functions';

startMapTemplate(document, 'Sección 2 - 11 - Primer marcador circular en Leaflet');
// https://leafletjs.com/reference-1.7.1.html#circlemarker
// 1 .- Asignamos ubicación (Nueva York)
const mymap = new Map('map').setView([40.712728, -74.006015], 11);

// 2.- Especificamos el tipo de mapa
tileLayerSelect(tileLayers.baseLayers.stadia.map.Outdoors, {
    attribution: tileLayers.baseLayers.stadia.atribution
}).addTo(mymap);

// 3.- Marcadores 

// Estatua de la libertad
const libertyStatuePoint = circleMarker([40.689209, -74.044425],{
    radius: 30,
    stroke: true,
    color: "red", // Se puede añadir hex
    // fillColor: "yellow", // Cambia el color, si no coge el de "color"
    fill: true, // Para decir si hay color de relleno,
    weight: 3.4

}).bindPopup(`
<h4> Estatus de la libertad </h4>
<p>La Libertad iluminando el mundo (en inglés: Liberty Enlightening the World; en francés: La Liberté éclairant le monde), conocida como la Estatua de la Libertad, es uno de los monumentos más famosos de Nueva York, de los Estados Unidos y de todo el mundo. </p>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Statue_of_Liberty_7.jpg/375px-Statue_of_Liberty_7.jpg" />
`).addTo(mymap);
// Notre Dame
const brooklinBridgePoint =circleMarker([40.705667, -73.996333]).addTo(mymap).bindTooltip(`
    Puente de Brooklyn
`, {
    direction: 'top'
}).openTooltip();

mymap.fitBounds([
    [libertyStatuePoint.getLatLng().lat, libertyStatuePoint.getLatLng().lng],
    [brooklinBridgePoint.getLatLng().lat, brooklinBridgePoint.getLatLng().lng]
])