import { Map, polygon } from "leaflet";
import { startMapTemplate } from "../../../assets/template/content";
import { tileLayerSelect } from "../../../config/tile-layers/functions";
import { tileLayers } from "../../../config/tile-layers/data";

startMapTemplate(document, "Sección 3 - 06 - polygon");

const mymap = new Map("map").setView([43.2089, -2.4112], 10);

tileLayerSelect(tileLayers.baseLayers.thunderForest.map.atlas, {
  attribution: tileLayers.baseLayers.thunderForest.atribution,
}).addTo(mymap);

// create a red polygon from an array of LatLng points
//           ,
// 
const latlngs: [number, number][] = [
  [37, -109.05], // Inferior izquierdo
  [41.31082388091818, -112.06054687499999],
  [41, -109.03], // Superior izquierdo
  [41, -102.05], // Superior derecha
  [37, -102.04], // Inferior derecho
];

polygon(latlngs, { color: "red" }).addTo(mymap);

// zoom the map to the polygon

mymap.fitBounds(latlngs);
