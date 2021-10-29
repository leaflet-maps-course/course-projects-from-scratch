import { tileLayers } from '../../../config/tile-layers/data';
import { Map, marker } from 'leaflet';
import { startMapTemplate } from '../../../assets/template/content';
import { tileLayerSelect } from '../../../config/tile-layers/functions';
import axios from 'axios';
import { INTEREST_POINTS } from '../../../assets/data/interest-points/api-data';

startMapTemplate(document, 'Sección 2 - 10 - Repasando con Marcadores, Popup y Tooltip');

// 1 .- Asignamos ubicación (Donostia - San Sebastian) (Cogemos desde API)
const mymap = new Map('map').setView([43.32, -1.98], 11);

// 2.- Especificamos el tipo de mapa
tileLayerSelect(tileLayers.baseLayers.osmHot.map, {
    attribution: tileLayers.baseLayers.osmHot.atribution
}).addTo(mymap);

// 3.- Llamamos a la fuente de datos
axios.get(INTEREST_POINTS.ITALIA)
.then((result: {data: { 
    title: string, description: string,
    location: {lat: number, lng: number},
    points: Array<{
        lat: number, lng: number, info: string, name: string, img: string,
        atribution: string, description: string
    }>
}}) => {
    // 4.- Cargamos los marcadores y añadimos en el  mapa
    const points = result.data.points;
    console.log(points);
    result.data.points.map((pointElement) => {
        marker([pointElement.lat, pointElement.lng]).addTo(mymap).bindPopup(`
            <h4> ${pointElement.name} </h4>
            <p class="description"> ${pointElement.description}</p>
            <img src="${pointElement.img}"/><br/>
            ${(pointElement.info !== "") ? `<a class="info" href="${pointElement.info}" target="_blank"> Más información</a>`: ``}            
        `);
    });
    
    // 5.- Centramos en base a la selección
    mymap.fitBounds([
        ...points.map((point) => [point.lat, point.lng] as [number, number])
    ]);
})

