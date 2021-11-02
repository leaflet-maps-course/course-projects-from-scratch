import { tileLayers } from "../../../config/tile-layers/data";
import { circleMarker, Icon, Map, marker } from "leaflet";
import { startMapTemplate } from "../../../assets/template/content";
import { tileLayerSelect } from "../../../config/tile-layers/functions";

startMapTemplate(
  document,
  "Sección 2 - 12 - Primer marcador con colores personalizados"
);
// https://leafletjs.com/reference-1.7.1.html#icon
// https://github.com/pointhi/leaflet-color-markers/
// 1 .- Asignamos ubicación (Nueva York)
const mymap = new Map("map").setView([40.712728, -74.006015], 11);

// 2.- Especificamos el tipo de mapa
tileLayerSelect(tileLayers.baseLayers.stadia.map.Outdoors, {
  attribution: tileLayers.baseLayers.stadia.atribution,
}).addTo(mymap);

// 3.- Marcadores personalizados
const greenIcon = new Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Hollywood
const hollywoodPoint = marker([34.098333333333, -118.32666666667], {
  icon: greenIcon,
})
  .bindPopup(
    `
<h4> Hollywood </h4>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Wiki_training_0226.jpg/800px-Wiki_training_0226.jpg" />
`
  ).addTo(mymap);

// Aeropuerto Internacional LA
const airportInternationalLAPoint = marker([33.9425, -118.408056], {
  icon: greenIcon,
})
  .addTo(mymap)
  .bindPopup(
    `
    <h5>Aeropuerto Internacional de Los Angeles</h5>
    <p><a href="https://es.wikipedia.org/wiki/Aeropuerto_Internacional_de_Los_%C3%81ngeles" target="_blank"> Más información</a></p>
`
  )
  .openPopup();

mymap.fitBounds([
  [hollywoodPoint.getLatLng().lat, hollywoodPoint.getLatLng().lng],
  [
    airportInternationalLAPoint.getLatLng().lat,
    airportInternationalLAPoint.getLatLng().lng,
  ],
]);
