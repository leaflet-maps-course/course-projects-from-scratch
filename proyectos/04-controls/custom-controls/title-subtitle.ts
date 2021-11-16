import { Control, ControlPosition, DomUtil, Util } from "leaflet";


const TitleSubtitleControl = Control.extend({
    initialize: function (options: {
        position: ControlPosition, title: string, subtitle: string
    }) {
      Util.setOptions(this, options);
    },
    options: {
      position: "bottomleft",
      title: 'Anartz Mugika',
      subtitle: 'Desarrollo & Formación'
    },
    onAdd: function () {
      var controlDiv = DomUtil.create("span", "title-subtitle");
      controlDiv.style.backgroundColor = "whitesmoke";
      controlDiv.style.padding = "1px";
      controlDiv.style.width = "100%";
      controlDiv.style.textAlign = "center";
      controlDiv.style.border = "1px solid green";
      controlDiv.style.borderRadius = "6px";
      controlDiv.style.marginBottom = "5px";
      controlDiv.innerHTML = `<h5>${this.options.title}</h5><span>${this.options.subtitle}</span>`;
      return controlDiv;
    },
  });

 export const titleSubtitle = (options?: {position?: ControlPosition, title?: string, subtitle?: true}) => new TitleSubtitleControl(options);