import { tileLayers } from '../../../config/tile-layers/data';
import { circle, Map, LatLngBounds, LatLng, marker, DomEvent, circleMarker } from 'leaflet';
import { startMapTemplate } from '../../../assets/template/content';
import { tileLayerSelect } from '../../../config/tile-layers/functions';

startMapTemplate(document, 'Secci&oacute; 3 - 08 - Map Events - Click / dblclick');

// Addis Ababa (Etiopia)
const mymap = new Map('map').setView([9.0129,38.7597], 10);

tileLayerSelect(tileLayers.baseLayers.hikeBike.map, {
    attribution: tileLayers.baseLayers.hikeBike.atribution
}).addTo(mymap);

/*mymap.on('click', (element: {
  latlng: LatLng
}) => {
  marker(element.latlng).addTo(mymap);
});*/

/*mymap.on('click', (element: {
  latlng: LatLng
}) => {
  marker(element.latlng).addTo(mymap).bindPopup(element.latlng.toString());
  circle(element.latlng, {
    radius: 300, color: 'orange'
  }).addTo(mymap);
});

mymap.on('dblclick', (element: {
  latlng: LatLng
}) => {
  circleMarker(element.latlng).addTo(mymap);
});*/

// Controlando los clicks, para añadir el marcador circular, en el caso de doble click

let mapClicked = 0;

mymap.on('click', (element: {
  latlng: LatLng
}) => {
  mapClicked =+ 1;
  setTimeout(() => {
    if (mapClicked == 1) {
      console.log("Añadir un marcador");
      marker(element.latlng).addTo(mymap).bindPopup(element.latlng.toString());
      circle(element.latlng, {
        radius: 300, color: 'orange'
      }).addTo(mymap);
      mapClicked = 0;
    }
  }, 250);
  
  
});

mymap.on('dblclick', (element: {
  latlng: LatLng
}) => {
  mapClicked = 0;
  console.log("Marcador circular");
  const options = {
    radius: 40,
    color: '#ff7800',
    weight: 7
  };
  circleMarker(element.latlng, options).addTo(mymap).bindPopup(`
  Ubicación: ${element.latlng.lat}, ${element.latlng.lng}`);
});

mymap.on('contextmenu', (e) => DomEvent.stopPropagation(e));




