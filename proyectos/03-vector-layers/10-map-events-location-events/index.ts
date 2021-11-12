import { tileLayers } from '../../../config/tile-layers/data';
import { circle, LatLng, Map, marker } from 'leaflet';
import { startMapTemplate } from '../../../assets/template/content';
import { tileLayerSelect } from '../../../config/tile-layers/functions';

startMapTemplate(document, 'Secci&oacute; 3 - 01 - circle - Dibujar c&iacute;rculo');

const mymap = new Map('map').setView([43.1998468 , -2.2865083], 10);

tileLayerSelect(tileLayers.baseLayers.hikeBike.map, {
    attribution: tileLayers.baseLayers.hikeBike.atribution
}).addTo(mymap);
function onLocationFound(e: {latlng: LatLng, accuracy: number}) {
  const radius = e.accuracy;
  circle(e.latlng, radius).addTo(mymap);
  marker(e.latlng).addTo(mymap)
  .bindPopup("Estás dentro del radio de " + radius + " metros mostrado").openPopup();
  mymap.flyTo(e.latlng, 12, {
    // https://leafletjs.com/reference-1.7.1.html#zoom-options
    animate: true,
    duration: 2.5,
  });
}

mymap.on("locationfound", onLocationFound);

function onLocationError(e: {message: string}) {
  alert(e.message);
}

mymap.on("locationerror", onLocationError);


mymap.locate({maxZoom: 12});