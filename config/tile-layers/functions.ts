import { tileLayer } from "leaflet";
import { tileLayers } from "./data";
import { ITilerLayerOptions } from "./option.interface";

export const tileLayerSelect = (
    layer: string = tileLayers.baseLayers.cartoDb.map.positron,
    options: ITilerLayerOptions = {
        minZoom: 0,
        maxZoom: 20,
        attribution: tileLayers.baseLayers.default.atribution
    }
) => {
    return tileLayer(layer, options);
}