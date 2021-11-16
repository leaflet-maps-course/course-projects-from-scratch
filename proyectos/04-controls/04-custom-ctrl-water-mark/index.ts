import { PLACES_LIST_LOCATIONS } from "./../../../config/map/locations";
import { Map } from "leaflet";
import { startMapTemplate } from "../../../assets/template/content";
import { tileLayerSelect } from "../../../config/tile-layers/functions";
import { watermark } from "../custom-controls/watermark";

startMapTemplate(
  document,
  "Sección 04 - 04 - Controles - Custom - Marca de agua"
);

const mymap = new Map("map").setView(
  PLACES_LIST_LOCATIONS.HONOLULU_HAWAI_EEUU as [number, number],
  10
);

tileLayerSelect().addTo(mymap);

watermark({position: 'bottomleft'}).addTo(mymap);

watermark({position: 'bottomleft', border: false}).addTo(mymap);

watermark({position: 'topright', border: false}).addTo(mymap);
