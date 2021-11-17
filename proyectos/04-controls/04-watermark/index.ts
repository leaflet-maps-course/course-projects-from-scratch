import { PLACES_LIST_LOCATIONS } from "./../../../config/map/locations";
import { Map } from "leaflet";
import { startMapTemplate } from "../../../assets/template/content";
import { tileLayerSelect } from "../../../config/tile-layers/functions";
import { watermark } from "../custom-controls/watermark";

startMapTemplate(
  document,
  "Sección 04 - 05 - Controles personalizados - Marca de agua"
);

const mymap = new Map("map").setView(
  PLACES_LIST_LOCATIONS.ADDIS_ABEBA_ETIOPIA as [number, number],
  10
);

tileLayerSelect().addTo(mymap);

// Ajustes por defecto => bottomleft y border
watermark().addTo(mymap);

// bottomright y border false
watermark({
  position: "bottomright",
  border: false,
}).addTo(mymap);

// bottomright y border true
watermark({
  position: "topright",
  border: true,
}).addTo(mymap);
