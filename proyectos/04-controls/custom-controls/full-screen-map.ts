import { Control, ControlPosition, DomUtil, Util } from "leaflet";

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
        // container.innerHTML = "hola"
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
            // https://developer.mozilla.org/es/docs/Web/API/Document/exitFullscreen
            if (document.fullscreenElement) {
                document.exitFullscreen();
              } else {
                document.getElementById("map")?.requestFullscreen();
              }
        };

        return container;
    },
  });

  export const fullScreenMap = (options?: {position?: ControlPosition}) => new FullScreenMap(options);