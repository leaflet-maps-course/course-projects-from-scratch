import { Control, ControlPosition, DomUtil, Util } from "leaflet";


const Watermark = Control.extend({

    options: {
        position: 'bottomleft',
        img: 'https://raw.githubusercontent.com/leaflet-maps-course/resources/main/logotypes/am.png',
        border: true
    },

    initialize: function(options: {
        position: ControlPosition, img: string, border: boolean
    }) {
        Util.setOptions(this, options);
    },
    onAdd: function() {
        const img = DomUtil.create('img');

        img.src = this.options.img;
        img.style.width = '40px';
        if (this.options.border) {
            img.style.borderBottom = "3px solid #506bff";
        }

        return img;
    },
});

export const watermark = (options?: {
    position?: ControlPosition, img?: string, border?: boolean
}) => new Watermark(options);