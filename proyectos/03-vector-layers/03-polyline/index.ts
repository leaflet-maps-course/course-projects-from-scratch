import { Map, polyline } from 'leaflet';
import { startMapTemplate } from '../../../assets/template/content';
import { tileLayerSelect } from '../../../config/tile-layers/functions';
import { tileLayers } from '../../../config/tile-layers/data';

startMapTemplate(document, 'Sección 3 - 03 - polyline');

const mymap = new Map('map').setView([43.2089, -2.4112], 10);

tileLayerSelect(tileLayers.baseLayers.openTopoMap.map, {
    attribution: tileLayers.baseLayers.openTopoMap.atribution
}).addTo(mymap);

// create a red polyline from an array of LatLng points
const latlngs: [number, number][] = [
    [45.51, -122.68], // Portland
    [37.77, -122.43],   // Oakland
    [34.04, -118.2],    // Los Angeles
    [36.1641,-115.1609], // Las Vegas
    [39.5303,-119.8123] // Reno
];

polyline(latlngs, {color: 'yellow', weight: 9}).addTo(mymap);

const latlngsRenoToSaltLake : [number, number][] = [
    [40.758,-111.854],  // Salt Lake City
    [43.557,-116.210] // Boise
];

polyline(latlngsRenoToSaltLake, {color: 'green', weight: 4}).addTo(mymap);


mymap.fitBounds(latlngs);
