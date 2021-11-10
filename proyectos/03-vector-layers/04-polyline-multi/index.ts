import { Map, polyline, rectangle } from 'leaflet';
import { startMapTemplate } from '../../../assets/template/content';
import { tileLayerSelect } from '../../../config/tile-layers/functions';
import { tileLayers } from '../../../config/tile-layers/data';

startMapTemplate(document, 'Sección 3 - 04 - polyline - Más de una línea con mismas configuraciones');

const mymap = new Map('map').setView([43.2089, -2.4112], 10);

tileLayerSelect(tileLayers.baseLayers.openTopoMap.map, {
    attribution: tileLayers.baseLayers.openTopoMap.atribution
}).addTo(mymap);

const lineOne: [number, number][] = [
    [45.51, -122.68], // Portland
    [37.77, -122.43],   // Oakland
    [34.04, -118.2],    // Los Angeles
    [36.1641,-115.1609], // Las Vegas
    [39.5303,-119.8123] // Reno
];

const lineTwo: [number, number][] = [
    [40.758,-111.854],  // Salt Lake City
    [43.557,-116.210] // Boise
];
const latlngs: [number, number][][] =[
    lineOne,
    lineTwo
];

polyline(latlngs, {
    color: 'green', weight: 6
}).addTo(mymap);

const centerZoomBounds: [number, number][] = [
    [47.623,-125.617], [32.263,-110.943]
];

// rectangle(centerZoomBounds).addTo(mymap);


mymap.fitBounds(centerZoomBounds);