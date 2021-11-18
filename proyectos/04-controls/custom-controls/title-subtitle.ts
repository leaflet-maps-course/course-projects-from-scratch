import { DomUtil, control } from 'leaflet';
import { Util } from 'leaflet';
import { ControlPosition } from 'leaflet';
import { Control } from 'leaflet';

const TitleSubtitle = Control.extend({
    // Inicialización
    initialize: function(options: {
        position: ControlPosition, title: string, subtitle: string
    }) {
        Util.setOptions(this, options);
    },
    // Opciones
    options: {
        position: 'bottomleft',
        title: 'Anartz Mugika Ledo',
        subtitle: 'Desarrollo & Formación'
    },
    // Añadir la informaci´on para formar el control personalizado
    onAdd: function() {
        const controlDiv = DomUtil.create('span', 'title-subtitle');
        controlDiv.innerHTML = `<h5>${this.options.title}</h5><span>${this.options.subtitle}</span>`;
        controlDiv.style.backgroundColor = 'white';
        controlDiv.style.textAlign = 'center';
        controlDiv.style.padding = '3px';
        controlDiv.style.borderRadius = '6px';
        controlDiv.style.border = '1px solid green';
        controlDiv.style.marginBottom = '5px';
        controlDiv.style.width = '100%';
        return controlDiv;
    }
});

export const titleSubtitle = (options?: {
    position?: ControlPosition, title?: string, subtitle?: string
}) => new TitleSubtitle(options);