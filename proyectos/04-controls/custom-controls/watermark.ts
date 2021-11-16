import { Control, ControlPosition, DomUtil, Util } from "leaflet";

const Watermark = Control.extend({
  // Para llamar al padre
  initialize: function (options: {position: ControlPosition, img: string, border: boolean}) {
    Util.setOptions(this, options); // Sobrescribimos las opciones
  },
  // Opciones del control
  options: {
    position: this , // Por defecto, añadimos arriba a la izquierda
    img: "https://raw.githubusercontent.com/leaflet-maps-course/resources/main/logotypes/am.png",
    border: true,
  },
  // Para formar el elemento del control
  onAdd: function () {
    // Selector
    const img = DomUtil.create("img"); // Para crear un elemento de imagen
    img.src = this.options.img;
    if (this.options.border) {
      img.style.borderBottom = "3px solid #506bff";
    }
    img.style.width = "40px";
    return img;
  },
});

export const watermark = (options?: {position?: ControlPosition, img?: string, border?: boolean}) => new Watermark(options);
