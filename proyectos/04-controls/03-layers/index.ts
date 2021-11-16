import { tileLayers } from './../../../config/tile-layers/data';
import { control, Map, marker } from 'leaflet';
import { startMapTemplate } from '../../../assets/template/content';
import { tileLayerSelect } from '../../../config/tile-layers/functions';

startMapTemplate(document, 'Sección 04 - Control de capas - layers');

const mymap = new Map('map').setView([43.3082977,-1.9837398], 10);

// Capas base
const defaultTileLayer = tileLayerSelect().addTo(mymap);

const cycleMapThunderForest = tileLayerSelect(tileLayers.baseLayers.thunderForest.map.openCycleMap);

const transportDarkThunderForest = tileLayerSelect(tileLayers.baseLayers.thunderForest.map.transportDark);

const oSMManik = tileLayerSelect(tileLayers.baseLayers.osmManik.map);


// Capas de superposición

const centerDonostia = marker([43.3082977,-1.9837398]).addTo(mymap);

const railwayMap = tileLayerSelect(tileLayers.overlayers.openRailway);

const hiking = tileLayerSelect(tileLayers.overlayers.wayMarkedTrails.hiking);



// Control de las capas

const baseLayers = {
    'Default': defaultTileLayer,
    'Cycle Map': cycleMapThunderForest,
    'Transport': transportDarkThunderForest,
    'OSM Manik': oSMManik
};

const overlays = {
    'Marker': centerDonostia,
    'Hiking': hiking,
    'Railway': railwayMap
};

control.layers(baseLayers, overlays, {
    position: 'bottomleft'
}).addTo(mymap);