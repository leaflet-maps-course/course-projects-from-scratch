import gpxParser from "gpxparser";
import axios from "axios";
import { startMapTemplate } from '../../../assets/template/content';

startMapTemplate(document, 'Secci&oacute; 3 - 01 - circle - Dibujar c&iacute;rculo');

// 1.- Carga la información del fichero
axios.get("https://raw.githubusercontent.com/leaflet-maps-course/resources/main/tracks/track.gpx").then(
    (result) => drawPoints(result.data)// Obtenemos la información del fichero GPX
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

  // 6.- Recorremos los puntos y mostramos en el log:
  gpxParseData.tracks[0].points.map(
    (point: {ele: number, lat: number, lon: number, time: Date}, index: number) =>  {
   console.log(`${index + 1} - ${point.lat}, ${point.lon} (${point.ele}m)`);
  });
};