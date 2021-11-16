import gpxParser from 'gpxparser';
import { startMapTemplate } from '../../../assets/template/content';
import axios from 'axios';

startMapTemplate(document, 'Sección 3 - 11 - Read GPX Data and Log');

axios.get('https://raw.githubusercontent.com/leaflet-maps-course/resources/main/tracks/track.gpx')
.then( result => {
    const gpx = new gpxParser(); //Create gpxParser Object
    gpx.parse(result.data); //parse gpx file from string data
    gpx.tracks[0].points.map((point) => console.log(point.lat, point.lon));
})
.catch( error => console.error(error));


