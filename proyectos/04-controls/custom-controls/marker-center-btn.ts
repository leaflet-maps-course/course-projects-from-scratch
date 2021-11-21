import {
  DomUtil,
  Util,
  Map,
  Control,
  marker,
  ControlPosition,
} from "leaflet";

const MarkerCenterInMap = Control.extend({
  initialize: function (options: {position: ControlPosition}) {
    Util.setOptions(this, options);
  },
  options: {
    position: "topleft",
  },
  onAdd: (map: Map) => {
    var container = DomUtil.create("input");
    container.type = "button";
    container.title = "Añadir marcador en la mitad del mapa";
    container.style.backgroundColor = "yellow";
    container.style.color = "black";
    container.value = "C";
    container.style.backgroundSize = "30px 30px";
    container.style.backgroundRepeat = "no-repeat";
    container.style.width = "30px";
    container.style.height = "30px";
    container.style.padding = "10px";
    

    // Esto es equivalente a hacer container.contextmenu...

    container.onmouseover = () => (container.style.backgroundColor = "grey");

    container.onmouseout = () => (container.style.backgroundColor = "yellow");

    container.onclick = () => {
      const markerItem = marker([map.getCenter().lat, map.getCenter().lng]);

      markerItem.bindPopup(markerItem.getLatLng().toString());
      markerItem.addTo(map);
      // Aparte de añadir el marcador se puede personalizar los eventos
      // Deshabilitar click derecho
      markerItem.on("contextmenu", () => map.removeLayer(markerItem));
    };

    return container;
  },
});

export const markerInCenterMap = (options?: { position?: ControlPosition }) =>
  new MarkerCenterInMap(options);
