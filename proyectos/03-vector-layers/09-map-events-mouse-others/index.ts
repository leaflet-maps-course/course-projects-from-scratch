import { tileLayers } from "../../../config/tile-layers/data";
import {
  Map,
  LatLng,
  polyline,
  marker,
} from "leaflet";
import { startMapTemplate } from "../../../assets/template/content";
import { tileLayerSelect } from "../../../config/tile-layers/functions";

startMapTemplate(
  document,
  "Secci&oacute; 3 - 09 - Map Events - Mouse down, up, over, out"
);

// Addis Ababa (Etiopia)
const mymap = new Map("map").setView([9.0129, 38.7597], 10);

tileLayerSelect(tileLayers.baseLayers.hikeBike.map, {
  attribution: tileLayers.baseLayers.hikeBike.atribution,
}).addTo(mymap);

// Entrada al mapa
mymap.on("mouseover", (e: { latlng: LatLng }) =>
  console.log(`DENTRO - mouseover: ${e.latlng.toString()}`)
);
// Salida del mapa (última posición)
mymap.on("mouseout", (e: { latlng: LatLng }) =>
  console.log(`SALE - mouseout: ${e.latlng.toString()}`)
);

// Cuando hacemos click sobre el mapa
mymap.on("mousedown", (e: { latlng: LatLng }) => {
  console.log(`CLICK en mapa - mousedown: ${e.latlng.toString()}`);
}
);

// Cuando dejamos de hacer click sobre el mapa
mymap.on("mouseup", (e: { latlng: LatLng }) =>
  console.log(`DEJAR CLICK en mapa - mouseup: ${e.latlng.toString()}`)
);

// Cuando movemos cursor sobre mapa
mymap.on("mousemove", (e: { latlng: LatLng }) => {
  console.log(`MOVIENDO en mapa - mousemove: ${e.latlng.toString()}`);
  // marker(e.latlng).addTo(mymap); NO ES BUENA IDEA
}
);


