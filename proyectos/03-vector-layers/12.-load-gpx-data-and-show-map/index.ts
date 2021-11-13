import gpxParser from "gpxparser";
import axios from "axios";
import { startMapTemplate } from "../../../assets/template/content";
import { tileLayers } from "../../../config/tile-layers/data";
import { tileLayerSelect } from "../../../config/tile-layers/functions";
import { Map, marker, polyline } from "leaflet";

startMapTemplate(document, "Secci&oacute; 3 - 12 - Dibujando rutas GPX");

// 1.- Carga la información del fichero
axios
  .get(
    "https://raw.githubusercontent.com/leaflet-maps-course/resources/main/tracks/gr-120-camino-ignaciano_145_km.gpx"
  )
  .then(
    (result) => drawPoints(result.data) // Obtenemos la información del fichero GPX
  );

const drawPoints = (gpxData: string) => {
  // 2.- Log del contenido
  console.log(gpxData);

  // 3.- Parseamos el fichero con gpxParser
  const gpxParseData = new gpxParser();
  // 4.- Parseamos la información descargada de la URL
  gpxParseData.parse(gpxData);

  // 5.- Analizamos la información del track
  console.log(gpxParseData);

  // 6.- Recorremos los puntos:
  drawTrack(gpxParseData.tracks[0].points);
};

// 7.- Ahora lo que nos queda es mostrarlo en un mapa bieen dibujado con polylines
// 8.- Inicializar mapa con lo básico
const initializeMap = () => {
  const mymap = new Map("map").setView([43.1998468, -2.2865083], 10);

  tileLayerSelect(tileLayers.baseLayers.hikeBike.map, {
    attribution: tileLayers.baseLayers.hikeBike.atribution,
  }).addTo(mymap);
  return mymap;
};

const mapLayout = initializeMap();

// 9.- Dibujar en el mapa los puntos (en el siguiente proyecto)
const drawTrack = (trackPoints: Array<{ lat: number; lon: number }>) => {
  const coordinates: [number, number][] = trackPoints.map((p) => [
    +p.lat.toFixed(5), // Redondear con 5 decimales
    +p.lon.toFixed(5),
  ]);

  marker([trackPoints[0].lat, trackPoints[0].lon])
    .addTo(mapLayout)
    .bindPopup("¡¡INICIO!!");
  marker([
    trackPoints[trackPoints.length - 1].lat,
    trackPoints[trackPoints.length - 1].lon,
  ])
    .addTo(mapLayout)
    .bindPopup("¡¡FINAL!!");
  const polylineItem = polyline(coordinates, {
    weight: 5,
    color: "green",
    lineJoin: "bevel",
  }).addTo(mapLayout);

  // Centramos, sabiendo que estamos con una línea
  mapLayout.fitBounds(polylineItem.getBounds());
};
