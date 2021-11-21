import { Control, ControlPosition, DomUtil, Util } from "leaflet";
import { createDocumentRegistry } from "typescript";

const FullScreenMap = Control.extend({
    initialize: function (options: {position: ControlPosition}) {
        Util.setOptions(this, options);
    },
    options: {
      position: "topleft",
    },
    onAdd: () => {
        const container = DomUtil.create(
            "input",
            "leaflet-control-zoom leaflet-bar leaflet-control"
        );
        container.type = "button";
        container.title = "Ver en pantalla completa";
        container.style.backgroundImage =
            "url(https://cdn-icons-png.flaticon.com/512/2089/2089670.png)";
        container.style.backgroundSize = "15px 15px";
        container.style.backgroundRepeat = "no-repeat";
        container.style.backgroundPosition = "50% 50%";
        container.style.width = "32px";
        container.style.height = "32px";
        container.style.padding = "12px";
        container.style.lineHeight = "30px";
        container.style.fontSize = "22px";
        container.style.fontWeight = "bold";
        container.style.cursor = "pointer";


        container.onclick = () => {
            // https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullScreen
            if (!document.fullscreenElement) { // Si no estamos a pantalla completa
                document.getElementById('map')?.requestFullscreen();
                container.title = "Salir de pantalla completa";
              } else {
                document.exitFullscreen();
                container.title = "Ver en pantalla completa";
              }
        };

        container.onmouseenter = () => container.style.backgroundColor = 'yellow';

        container.onmouseout = () => container.style.backgroundColor = 'transparent';

        return container;
    },
  });

  export const fullScreenMap = (options?: {position?: ControlPosition}) => new FullScreenMap(options);