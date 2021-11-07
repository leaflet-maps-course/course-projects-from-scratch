import { tileLayers } from './../../../config/tile-layers/data';
import { circle, Map } from 'leaflet';
import { startMapTemplate } from '../../../assets/template/content';
import { tileLayerSelect } from '../../../config/tile-layers/functions';

startMapTemplate(document, 'Secci&oacute; 3 - 01 - circle - Dibujar c&iacute;rculo');

const mymap = new Map('map').setView([43.1998468 , -2.2865083], 10);

tileLayerSelect(tileLayers.baseLayers.hikeBike.map, {
    attribution: tileLayers.baseLayers.hikeBike.atribution
}).addTo(mymap);

// + info:
// https://leafletjs.com/reference.html#circle
// https://www.openstreetmap.org/
// ===========================================================
// Crear un circulo naranja y añadirllo en el mapa
/**
 * radius: Radio del círculo en metros, a diferencia del circleMarker, esto no aumenta
 * disminuye cuando minimizamos / maximizamos el zoom
 * stroke: borde
 * color: Color de borde
 * weight: Ancho del borde
 */
 const optionsXoxote = { radius: 120, color: "#ff7800", weight: 5};
 const xoxoteCirclePoint = circle([43.1998468 , -2.2865083], optionsXoxote)
 .bindTooltip("Xoxote (912m)", {
   direction: 'bottom'
 }).addTo(mymap);
const optionsKakueta = {color: "green", weight: 2, stroke: false}
 const kakuetaCirclePoint = circle([43.199256, -2.301116], 180, optionsKakueta)
 .bindTooltip("Kakueta (927m)", {
   direction: 'left',
   sticky: true
 }).addTo(mymap);

 mymap.fitBounds([
     [xoxoteCirclePoint.getLatLng().lat, xoxoteCirclePoint.getLatLng().lng],
     [kakuetaCirclePoint.getLatLng().lat, kakuetaCirclePoint.getLatLng().lng]
 ])