import { MountainPeaksMarkers } from './div-icon-mountain-peaks';
import { tileLayersWMS } from './../../../config/tile-layers/data';
import { tileLayerWMSSelect } from './../../../config/tile-layers/functions';
import { Map, MarkerClusterGroup, marker } from 'leaflet';
import 'leaflet.markercluster';
import { startMapTemplate } from '../../../assets/template/content';
import { tileLayers } from '../../../config/tile-layers/data';
import axios from 'axios';

startMapTemplate(
  document,
  'Secci&oacute;n 2 - 18 - Proyecto final de repaso de la secci&oacute;n'
);

const mymap = new Map('map').setView([43.3082977, -1.9837398], 10);

tileLayerWMSSelect(tileLayersWMS.ign.baseUrl, {
  attribution: tileLayers.baseLayers.default.atribution,
  layers: tileLayersWMS.ign.layers.baseTodo,
  transparent: true,
  format: 'image/png',
}).addTo(mymap);

function selectIconMarker(elevation: number | undefined) {
  const elevationMetres = elevation;
  if (elevation === undefined) {
    return MountainPeaksMarkers('blue');
  } else if (elevationMetres! < 400) {
    return MountainPeaksMarkers('green');
  } else if (elevationMetres! >= 400 && elevationMetres! < 1000) {
    return MountainPeaksMarkers('yellow');
  } else if (elevationMetres! >= 1000 && elevationMetres! < 1500) {
    return MountainPeaksMarkers('orange');
  } else if (elevationMetres! >= 1500 && elevationMetres! < 2000) {
    return MountainPeaksMarkers('red');
  }
  return MountainPeaksMarkers('pink');
}

const markers = new MarkerClusterGroup();
axios
  .get(
    'https://raw.githubusercontent.com/leaflet-maps-course/resources/f790b7cc895a33979ea3dbede861da7eb26cad9d/south_basque_country_peaks.json'
  )
  .then((result) => {
    const peaks: Array<{
      lat: number;
      lon: number;
      tags: {
        ele: string;
        name: string;
      };
    }> = result.data['peaks'];
    console.log(peaks);
    peaks.map((peak) => {
      const selectIcon = selectIconMarker(+peak.tags.ele);
      marker([peak.lat, peak.lon], {
        icon: new selectIcon(),
      })
        .addTo(markers)
        .bindPopup(
          `
            <h5>${
              peak.tags.name !== undefined ? peak.tags.name : 'No name'
            }</h5>
            <span>${peak.tags.ele !== undefined ? peak.tags.ele : '-'} m.</span>
            `,
          {
            offset: [11, 5],
          }
        );
    });
    markers.addTo(mymap);

    mymap.fitBounds([
      ...peaks.map((peak) => [peak.lat, peak.lon] as [number, number]),
    ]);
  });
