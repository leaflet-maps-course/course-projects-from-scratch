import { tileLayers } from "../../../config/tile-layers/data";
import { Icon, IconOptions, Map, marker } from "leaflet";
import { startMapTemplate } from "../../../assets/template/content";
import { tileLayerSelect } from "../../../config/tile-layers/functions";

startMapTemplate(
  document,
  "Sección 2 - 14 - Marcadores con iconos personalizados usando clase de icono personalizado"
);
// https://leafletjs.com/reference-1.7.1.html#icon
// https://github.com/pointhi/leaflet-color-markers/
// 1 .- Asignamos ubicación (Nueva York)
const mymap = new Map("map").setView([40.712728, -74.006015], 11);

// 2.- Especificamos el tipo de mapa
tileLayerSelect(tileLayers.baseLayers.stadia.map.Outdoors, {
  attribution: tileLayers.baseLayers.stadia.atribution,
}).addTo(mymap);

// 3.- Icono de clase personalizado donde vamos a compartir las propiedades excepto
// URL del icono

const CustomIcon = (options: IconOptions) =>
  Icon.extend({
    options: {
      iconUrl: options.iconUrl,
      shadowUrl: options.shadowUrl
        ? options.shadowUrl
        : "https://leafletjs.com/examples/custom-icons/leaf-shadow.png",
      iconSize: options.iconSize ? options.iconSize : [38, 95],
      shadowSize: options.shadowSize ? options.shadowSize : [50, 64],
      iconAnchor: options.iconAnchor ? options.iconAnchor : [22, 94],
      shadowAnchor: options.shadowAnchor ? options.shadowAnchor : [4, 62],
      popupAnchor: options.shadowAnchor ? options.shadowAnchor : [-3, -76],
    },
  });

// 4.- Marcadores personalizados con su icono
const leafGreenIcon = CustomIcon({
  iconUrl: "https://leafletjs.com/examples/custom-icons/leaf-green.png",
});

const leafRedIcon = CustomIcon({
  iconUrl: "https://leafletjs.com/examples/custom-icons/leaf-red.png"
});

// 5.- Crear marcadores con los personalizados
// Hollywood
const hollywoodPoint = marker([34.098333333333, -118.32666666667], {
  icon: new leafGreenIcon(),
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
  icon: new leafRedIcon(),
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
