import { startMapTemplate } from '../../../assets/template/content';
import GpsDrawMap from './gps-draw-map';

startMapTemplate(document, 'Sección 3 - 12 - Read GPX Data and Draw');

const gpsDrawMap = new GpsDrawMap();

gpsDrawMap.getPoints("https://raw.githubusercontent.com/leaflet-maps-course/resources/main/tracks/gr-120-camino-ignaciano_145_km.gpx");

