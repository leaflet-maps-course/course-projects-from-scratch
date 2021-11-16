import { tileLayer } from 'leaflet';
import { tileLayers, tileLayersWMS } from './data';
import { ITilerLayerOptions } from './option.interface';

export const tileLayerSelect = (
    layer: string = tileLayers.baseLayers.cartoDb.map.positron,
    options: ITilerLayerOptions = {
        minZoom: 0,
        maxZoom: 20,
        attribution: tileLayers.baseLayers.default.atribution
    }
) => {
    return tileLayer(layer, options);
};

export const tileLayerWMSSelect = (
    service: string = tileLayersWMS.mundialis.baseUrl,
    options : ITilerLayerOptions = {
        minZoom: 0,
        maxZoom: 20,
        attribution: tileLayers.baseLayers.default.atribution,
        layers: tileLayersWMS.mundialis.layers.topoOsmWMS,
        format: 'image/png',
        transparent: true,
    }
) => {
    return tileLayer.wms(service, options);
};