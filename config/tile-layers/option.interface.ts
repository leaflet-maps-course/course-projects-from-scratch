export interface ITilerLayerOptions {
    minZoom?: number;
    maxZoom?: number;
    subdomains?: string | string[];
    errorTileUrl?: string;
    zoomOffset?: number;
    tms?: boolean;
    zoomReverse?: boolean;
    detectRetina?: boolean;
    crossOrigin?: boolean | string;
    layers?: string;
    format?: string;
    transparent?: boolean;
    attribution?: string;
}