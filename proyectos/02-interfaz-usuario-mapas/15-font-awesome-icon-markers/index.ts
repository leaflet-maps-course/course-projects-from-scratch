import { tileLayers } from "../../../config/tile-layers/data";
import { divIcon, Map, marker } from "leaflet";
import { startMapTemplate } from "../../../assets/template/content";
import { tileLayerSelect } from "../../../config/tile-layers/functions";

startMapTemplate(
  document,
  "Sección 2 - 15 - Iconos con Capas personalizadas + Fuentes - DivICon + FontAwesome "
);

// 1 .- Asignamos ubicación 0, 0
const mymap = new Map("map").setView([0, 0], 11);

// 2.- Especificamos el tipo de mapa
tileLayerSelect(tileLayers.baseLayers.osmHot.map, {
  attribution: tileLayers.baseLayers.osmHot.atribution,
}).addTo(mymap);

// 3.- Iconos de capa (DivIcon)
const sportsDivIcon = divIcon({
  className: "my-div-icon",
  html: '<i class="fa-solid fa-medal"></i>',
});

const museumDivIcon = divIcon({
  className: "my-div-icon",
  html: '<i class="fa-solid fa-landmark"></i>',
});

// Nuevo estadio nacional de Tokio
const nationalStadiumTokioMarker = marker([35.6778, 139.7145], {
  icon: sportsDivIcon,
})
  .addTo(mymap)
  .bindPopup(
    `
<h5>Nuevo Estadio Nacional Tokio</h5>
<a href="https://es.wikipedia.org/wiki/Estadio_Ol%C3%ADmpico_de_Tokio_(2019)" target="_blank">
Wikipedia
</a>
`,
    {
      offset: [11, 5], // Para ubicar el cursor del popup
    }
  );
// https://es.wikipedia.org/wiki/Museo_Nacional_de_Tokio
const nationalMuseumTokioMarker = marker([35.718774, 139.776446],
  {
    icon: museumDivIcon
  }).addTo(mymap).bindPopup(
  `
<h5>Museo Nacional Tokio</h5>
<a href="https://es.wikipedia.org/wiki/Museo_Nacional_de_Tokio" target="_blank">
Wikipedia
</a>
`,
  {
    offset: [11, 5], // Para ubicar el cursor del popup
  }
);

mymap.fitBounds([
  [nationalMuseumTokioMarker.getLatLng().lat, nationalMuseumTokioMarker.getLatLng().lng],
  [nationalStadiumTokioMarker.getLatLng().lat, nationalStadiumTokioMarker.getLatLng().lng]
])
