import { drinkWaterSoraluze } from './../../../assets/data/markers/drink_waters';
import { tileLayers } from '../../../config/tile-layers/data';
import { Map, marker } from 'leaflet';
import { startMapTemplate } from '../../../assets/template/content';
import { tileLayerSelect } from '../../../config/tile-layers/functions';

startMapTemplate(document, 'Sección 2 - 7 - Configurar eliminar dinámico');

// 1 .- Asignamos ubicación (Paris)
const mymap = new Map('map').setView([48.8588336,2.276995], 11);

// 2.- Especificamos el tipo de mapa
tileLayerSelect(tileLayers.baseLayers.osmHot.map, {
    attribution: tileLayers.baseLayers.osmHot.atribution
}).addTo(mymap);

// 3.- Marcadores 

drinkWaterSoraluze.map( (point) => {
    const markerItem = marker([point.lat, point.lon]).addTo(mymap);
    markerItem.on("dblclick", () => {
        console.log(`Eliminado marcador ${point.name}`);
        mymap.removeLayer(markerItem);
    })
})

mymap.fitBounds([
    ...drinkWaterSoraluze.map((point) => [point.lat, point.lon] as [number, number])
]);