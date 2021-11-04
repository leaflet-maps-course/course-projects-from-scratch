import { tileLayers } from '../../../config/tile-layers/data';
import { Map, marker, MarkerClusterGroup } from 'leaflet';
import 'leaflet.markercluster'; // IMPORTANTE
import { startMapTemplate } from '../../../assets/template/content';
import { tileLayerSelect } from '../../../config/tile-layers/functions';
import { addressPoints } from '../../../assets/data/markers/real-world-1000-points';

startMapTemplate(document, 'Sección 2 - 1 - Primer marcador en Leaflet');

// 1 .- Asignamos ubicación (Paris)
const mymap = new Map('map').setView([48.8588336,2.276995], 11);

// 2.- Especificamos el tipo de mapa
tileLayerSelect(tileLayers.baseLayers.osmHot.map, {
    attribution: tileLayers.baseLayers.osmHot.atribution
}).addTo(mymap);

// 3.- Marcadores 
// Agrumapos en grupos de mmarcadores para que luego haga automáticamente
// la distribución
const markers =  new MarkerClusterGroup();

addressPoints.map((point) => {
    const markerLocation = marker([+point[0], +point[1]]);
    markerLocation.bindPopup(`Ubicación(${point[2]}): ${+point[0]}, ${+point[1]}`);
    // markers.addLayer(markerLocation);
    markerLocation.addTo(markers);
})
// mymap.addLayer(markers);
markers.addTo(mymap);

mymap.fitBounds([
    ...addressPoints.map((point) => [+point[0], +point[1]] as [number, number])
]);