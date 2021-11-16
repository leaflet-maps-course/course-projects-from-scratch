import { Map, marker } from 'leaflet';
import { drinkWaterSoraluze } from '../../../assets/data/markers/drink_waters';
import { startMapTemplate } from '../../../assets/template/content';
import { tileLayers } from '../../../config/tile-layers/data';
import { tileLayerSelect } from '../../../config/tile-layers/functions';

startMapTemplate(document, 'Sección 2 - 07 - Trabajando con marcadores dinámicos y eliminación');

const mymap = new Map('map').setView([0, 0], 12);

tileLayerSelect(tileLayers.baseLayers.thunderForest.map.atlas, {
    attribution: tileLayers.baseLayers.thunderForest.atribution
}).addTo(mymap);

// Carga dinámica de los marcadores

drinkWaterSoraluze.map((point) => {
    const markerItem = marker([point.lat, point.lon], {draggable: true}).addTo(mymap);
    markerItem.on('move', () => {
        console.log(`Marcador de la posición (${point.name}) => ${point.lat} / ${point.lon} Eliminado!!!`);
        mymap.removeLayer(markerItem);
    });
});


mymap.fitBounds([
    ...drinkWaterSoraluze.map(point => [point.lat, point.lon] as [number, number]),
]);