import { Map, polygon } from 'leaflet';
import { startMapTemplate } from '../../../assets/template/content';
import { tileLayerSelect } from '../../../config/tile-layers/functions';
import { tileLayers } from '../../../config/tile-layers/data';

startMapTemplate(document, 'Sección 3 - 07 - polygon con huecos');

const mymap = new Map('map').setView([43.2089, -2.4112], 10);

tileLayerSelect(tileLayers.baseLayers.thunderForest.map.atlas, {
  attribution: tileLayers.baseLayers.thunderForest.atribution,
}).addTo(mymap);

const latlngs: [number, number][][] = [
  [
    [37, -109.05], // Inferior izquierdo
    [41.31082388091818, -112.06054687499999],
    [41, -109.03], // Superior izquierdo
    [41, -102.05], // Superior derecha
    [37, -102.04], // Inferior derecho
  ], // Polígono
  [[37.29, -108.58],[40.71, -108.58],[40.71, -102.50],[37.29, -102.50]] // hole
];


polygon(latlngs, { color: 'red' }).addTo(mymap);

// Denver polígono

const latlngBoundsDenver: [number, number][][] = [
  [
  [
    -105.03410339355469,
    39.74521015328692
  ],
  [
    -105.02174377441406,
    39.72039163613398
  ],
  [
    -104.95101928710938,
    39.72461669561139
  ],
  [
    -104.91325378417969,
    39.74626606218367
  ],
  [
    -104.92904663085938,
    39.772130775078956
  ],
  [
    -105.00251770019531,
    39.77054750039529
  ],
  [
    -105.03410339355469, // longitud
    39.74521015328692 // latitud
  ]
  ].map((point) => point.reverse() as [number, number]),
  [
    [
      -104.95977401733398,
      39.74375825213213
    ],
    [
      -104.9410629272461,
      39.74375825213213
    ],
    [
      -104.9410629272461,
      39.754448807459376
    ],
    [
      -104.95977401733398,
      39.754448807459376
    ],
    [
      -104.95977401733398,
      39.74375825213213
    ]
  ].map((point) => point.reverse() as [number, number])
];

polygon(latlngBoundsDenver,
{
  color: 'green', fillColor: 'orange'
}).addTo(mymap).bindPopup('Denver');

// zoom the map to the polygon

mymap.fitBounds(latlngs[0]);
