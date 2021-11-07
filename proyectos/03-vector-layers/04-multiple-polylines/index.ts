import { tileLayers } from "../../../config/tile-layers/data";
import { Map, polyline } from "leaflet";
import { startMapTemplate } from "../../../assets/template/content";
import { tileLayerSelect } from "../../../config/tile-layers/functions";

startMapTemplate(
  document,
  "Secci&oacute; 3 - 04 - Multiples Polylines"
);

const mymap = new Map("map").setView([0, 0], 10);

tileLayerSelect(tileLayers.baseLayers.hikeBike.map, {
  attribution: tileLayers.baseLayers.hikeBike.atribution,
}).addTo(mymap);

// + info:
// https://leafletjs.com/reference.html#rectangle
// https://www.openstreetmymap.org/
// ===========================================================
// Tenemos que especificar las líneas, por lo menos con un punto
// inicial y uno final.
/**
 * Se heredan propiedades como las del círculo como color del borde, del relleno,...
 * desde "Path"
 */
// Dibujando líneas con Polyline. Se necesita un array con por lo menos dos localizaciones
// mínimo para formar Un elemento de línea
const lineItems: [number, number][][] = [
  [
    [43.175663, -2.412301],
    [43.172156, -2.413997],
  ], // MINIMO HASTA AQUI
  [
    [43.181063, -2.420891],
    [43.174981, -2.403418],
  ],
  [
    [43.166945, -2.39552],
    [43.166953, -2.403341], // MINIMO HASTA AQUI
    [43.171572, -2.409777],
  ]
];

// Creamos los polylines a partir de las coordenadas especificadas
const polylineItems = polyline(lineItems, { color: "red", weight: 5 }).addTo(
  mymap
);

// Hacemos zoom teniendo en cuenta los puntos del polyline, nos fijamos en los límites
// para no tener que añadir todos a la hora de centrar
mymap.fitBounds([
  [
    polylineItems.getBounds().getNorthWest().lat,
    polylineItems.getBounds().getNorthWest().lng,
  ],
  [
    polylineItems.getBounds().getSouthEast().lat,
    polylineItems.getBounds().getSouthEast().lng,
  ],
]);
