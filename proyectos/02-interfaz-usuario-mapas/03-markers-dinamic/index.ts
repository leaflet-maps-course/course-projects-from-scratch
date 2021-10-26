import { tileLayers } from '../../../config/tile-layers/data';
import { Map, marker } from 'leaflet';
import { startMapTemplate } from '../../../assets/template/content';
import { tileLayerSelect } from '../../../config/tile-layers/functions';
import { drinkWaterSoraluze } from '../../../assets/data/markers/drink_waters';

startMapTemplate(document, 'Sección 2 - 3 - Marcadores individuales y cargados dinámicamente');

// 1 .- Asignamos ubicación (0, 0)
const mymap = new Map('map').setView([0, 0], 11); //

// 2.- Especificamos el tipo de mapa
tileLayerSelect(tileLayers.baseLayers.thunderForest.map.atlas, {
    attribution: tileLayers.baseLayers.thunderForest.atribution
}).addTo(mymap);

// 3.- Marcadores 

// De manera individual
// Soraluze Campo de Futbol
const soraluzeFootballPointMarker = marker([43.1802656,-2.4216228]).addTo(mymap);
// Notre Dame
const sanAndresFrontonPointMarker = marker([43.174875,-2.4049475]).addTo(mymap);

// 5.- Cargamos de manera dinámica
// Es sencillo, simplemente coger el array, ir recorriendo elemento a elemento y añadiendo
drinkWaterSoraluze.map( point => marker([point.lat,point.lon]).addTo(mymap));

// 4.- Centrar con los elementos especificados como los dos marcadores

mymap.fitBounds([
    [soraluzeFootballPointMarker.getLatLng().lat, soraluzeFootballPointMarker.getLatLng().lng],
    // Si dejamos esto, se centra en base a este
    [sanAndresFrontonPointMarker.getLatLng().lat, sanAndresFrontonPointMarker.getLatLng().lng],
    // 6.- Añadimos los marcadores dinámicamentee para el centrado
    ...drinkWaterSoraluze.map(value => [value.lat, value.lon] as [number, number]),
]);