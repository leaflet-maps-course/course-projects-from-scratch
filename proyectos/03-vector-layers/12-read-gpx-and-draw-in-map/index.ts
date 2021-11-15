import gpxParser from 'gpxparser';
import { startMapTemplate } from '../../../assets/template/content';
import axios from 'axios';
// https://www.strava.com/activities/5828767062
// https://luuka.github.io/GPXParser.js/doc/index.html
// https://raw.githubusercontent.com/leaflet-maps-course/resources/main/tracks/track.gpx
// https://github.com/leaflet-maps-course/resources/tree/main/tracks
startMapTemplate(document, 'Sección 3 - 12 - Read GPX Data and Draw');

axios.get('https://raw.githubusercontent.com/leaflet-maps-course/resources/main/tracks/track.gpx')
.then( result => {
    var gpx = new gpxParser(); //Create gpxParser Object
    gpx.parse(result.data); //parse gpx file from string data
    gpx.tracks[0].points.map((point) => console.log(point.lat, point.lon));
})
.catch( error => console.error(error));


