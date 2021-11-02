import { tileLayers } from "../../../config/tile-layers/data";
import { Icon, Map, marker } from "leaflet";
import { startMapTemplate } from "../../../assets/template/content";
import { tileLayerSelect } from "../../../config/tile-layers/functions";

startMapTemplate(
  document,
  "Sección 2 - 13 - Marcadores con iconos personalizados"
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
const leafGreenIcon = new Icon({
  iconUrl: "https://leafletjs.com/examples/custom-icons/leaf-green.png",
  shadowUrl: "https://leafletjs.com/examples/custom-icons/leaf-shadow.png",
  iconSize: [38, 95], // Tamaño de renderizado del icono
  iconAnchor: [19, 94], // Punto donde añadimos la localización del marcador
  popupAnchor: [-5, -88], // punto desde el cual el popup debería abrirse en relación con el icono Ancla
  // ppAnchor, x = negativos => izquierda, y => negativo => para arriba
  shadowSize: [50, 64], // Tamaño de renderizado de la sombra (como icono)
  shadowAnchor: [0, 64],
  // x = negativo => derecha = Lo ideal 0 / y = igual de la altura de imagen
});

const leafRedIcon = new Icon({
  iconUrl: "https://leafletjs.com/examples/custom-icons/leaf-red.png",
  shadowUrl: "https://leafletjs.com/examples/custom-icons/leaf-shadow.png",
  iconSize: [38, 95], // Tamaño de renderizado del icono
  iconAnchor: [19, 94], // Punto donde añadimos la localización del marcador
  popupAnchor: [-5, -88], // punto desde el cual el popup debería abrirse en relación con el icono Ancla
  // ppAnchor, x = negativos => izquierda, y => negativo => para arriba
  shadowSize: [50, 64], // Tamaño de renderizado de la sombra (como icono)
  shadowAnchor: [0, 64],
  // x = negativo => derecha = Lo ideal 0 / y = igual de la altura de imagen
});

// Hollywood
const hollywoodPoint = marker([34.098333333333, -118.32666666667], {
  icon: leafGreenIcon,
})
  .bindPopup(
    `
<h4> Hollywood </h4>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Wiki_training_0226.jpg/800px-Wiki_training_0226.jpg" />
`
  )
  .addTo(mymap);

// Aeropuerto Internacional LA
const airportInternationalLAPoint = marker([33.9425, -118.408056], {
  icon: leafRedIcon,
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
