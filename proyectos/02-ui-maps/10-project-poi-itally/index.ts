import axios from 'axios';
import { Map, marker } from 'leaflet';
import { LOCATION_INTEREST_POINTS_POIS } from '../../../assets/api/poi-github';
import { startMapTemplate } from '../../../assets/template/content';
import { tileLayers } from '../../../config/tile-layers/data';
import { tileLayerSelect } from '../../../config/tile-layers/functions';

startMapTemplate(document, 'Sección 2 - 10 - Repasando con marcadores, popup y otros elementos');

const mymap = new Map('map').setView([48.8558971,2.3360465], 12);

tileLayerSelect(tileLayers.baseLayers.esri.worldStreetMap.map, {
    attribution: tileLayers.baseLayers.esri.worldStreetMap.atribution
}).addTo(mymap);

axios.get(LOCATION_INTEREST_POINTS_POIS.ITALY).then((result: {
    data: {
        title: string, description: string, location: { lat: number, lng: number},
        url: string,
        points: Array<{
            lat: number, lng: number, info: string, name: string, img: string,
            atribution: string, description: string
        }>
    }
}) => {
    const points = result.data.points;
    result.data.points.map((point) => {
        marker([point.lat, point.lng]).addTo(mymap).bindPopup(`
            <h4>${point.name}</h4>
            <p class="description">${point.description}</p>
            <img src="${point.img}" />
            ${ (point.info !== '') ? 
                `<br/><a href="${point.info}" target="_blank">Más información</a>` : ''}
        `);
    });
    mymap.fitBounds([
        ...points.map((point => [point.lat, point.lng] as [number, number]))
    ]);
}).catch((error) => console.log(error));