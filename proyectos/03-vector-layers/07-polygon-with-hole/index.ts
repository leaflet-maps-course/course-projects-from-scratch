import { tileLayers } from '../../../config/tile-layers/data';
import { Map, polygon, LatLngBounds } from 'leaflet';
import { startMapTemplate } from '../../../assets/template/content';
import { tileLayerSelect } from '../../../config/tile-layers/functions';

startMapTemplate(document, 'Secci&oacute; 3 - 07 - polygon -hole');

const mymap = new Map('map').setView([43.1998468 , -2.2865083], 10);

tileLayerSelect(tileLayers.baseLayers.default.map, {
    attribution: tileLayers.baseLayers.default.atribution
}).addTo(mymap);

// Campo de juego
const footballField : [number, number][]= [
  [43.30158,-1.97439],
  [43.30075,-1.97354],
  [43.30119,-1.97274],
  [43.30200,-1.97360]
];

polygon(footballField, {
  color: 'green'
}).addTo(mymap).bindPopup('Anoeta Estadioa (Reale Arena) - Campo');

const stadium = [
  [
    -1.9748085737228394,
    43.30179354172059
  ],
  [
    -1.9747710227966306,
    43.30172327036152
  ],
  [
    -1.9747924804687498,
    43.30159053535059
  ],
  [
    -1.9748407602310178,
    43.30124308056748
  ],
  [
    -1.9748300313949585,
    43.301153288559085
  ],
  [
    -1.9746690988540647,
    43.30085267956583
  ],
  [
    -1.9744330644607546,
    43.300665286194594
  ],
  [
    -1.9741004705429075,
    43.300501316520965
  ],
  [
    -1.9738107919692993,
    43.30043494771783
  ],
  [
    -1.973413825035095,
    43.300423235568566
  ],
  [
    -1.9733494520187378,
    43.30039200315954
  ],
  [
    -1.9730758666992185,
    43.30044665986483
  ],
  [
    -1.9728022813796997,
    43.30055206908625
  ],
  [
    -1.9725877046585083,
    43.30068871039757
  ],
  [
    -1.9724535942077637,
    43.30081754335271
  ],
  [
    -1.9722980260849,
    43.3009776081591
  ],
  [
    -1.9723463058471677,
    43.301051784389905
  ],
  [
    -1.9722872972488403,
    43.30128992851924
  ],
  [
    -1.9723302125930786,
    43.30159053535059
  ],
  [
    -1.972442865371704,
    43.3018208694494
  ],
  [
    -1.9728344678878784,
    43.302090242118936
  ],
  [
    -1.973065137863159,
    43.302226879973304
  ],
  [
    -1.973311901092529,
    43.30227763109815
  ],
  [
    -1.9735050201416013,
    43.302269823235555
  ],
  [
    -1.9735854864120483,
    43.30232838218064
  ],
  [
    -1.973719596862793,
    43.302347901816454
  ],
  [
    -1.9740843772888186,
    43.30228543895976
  ],
  [
    -1.9744813442230222,
    43.30214489729754
  ],
  [
    -1.9748085737228394,
    43.30179354172059
  ]
];

const stadiumWithoutPlayCourt: [number, number][][] =[
  [ // Grada, coge tammbién el campo, luego lo cortamos
    ...stadium.map((point) => point.reverse() as [number, number]),
  ],
  footballField // Corte
];
polygon(stadiumWithoutPlayCourt, 
{ color: 'grey'}).bindPopup('Anoeta Estadioa (Reale Arena) - Gradas').addTo(mymap);

const amaraBerriBounds = new LatLngBounds([
  [43.30244,-1.97162], [43.30029,-1.97556]
]);

mymap.fitBounds(amaraBerriBounds);

