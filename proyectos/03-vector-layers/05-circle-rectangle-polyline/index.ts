import { circle, Map, marker, rectangle, LatLngBounds } from 'leaflet';
import { startMapTemplate } from '../../../assets/template/content';
import { tileLayerSelect } from '../../../config/tile-layers/functions';
import { tileLayers } from '../../../config/tile-layers/data';

startMapTemplate(document, 'Sección 3 - 05 - circle, rectangle, polyline');

const mymap = new Map('map').setView([51.50732,-0.12859], 10);

tileLayerSelect(tileLayers.baseLayers.thunderForest.map.transport, {
    attribution: tileLayers.baseLayers.thunderForest.atribution
}).addTo(mymap);

// 1.- Añadir marcador de Londres
const markerLondon = marker([51.50732,-0.12859]).addTo(mymap).bindPopup(`
    <h5>Londres</h5>
    <p>Capital de Inglaterra y del Reino Unido<br/>
    <a href="https://es.wikipedia.org/wiki/Londres" target="_blank">
        Más información
    </a>
    </p>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/London_City_Hall.jpg/976px-London_City_Hall.jpg" />
`);

// 2.- Camden Town

const camdenTowm = circle([51.54230,-0.14050], {
    color: 'pink', weight: 6, fillColor: 'blue', fillOpacity: 0.5, radius: 500
}).addTo(mymap).bindTooltip('Camden Town');

// 3.- Rectángulo con Londres de 1806

rectangle(new LatLngBounds([
    [51.5335, 0.0005], [51.4698, -0.2134]
]), {
    color: '#36b6c7'
}).addTo(mymap);

// 4.- Big Ben con un círculo

circle([51.50069,-0.12459], {
    color: 'green', weight: 3, fillOpacity: 0.5, radius: 10
}).addTo(mymap).bindTooltip('Big Ben');