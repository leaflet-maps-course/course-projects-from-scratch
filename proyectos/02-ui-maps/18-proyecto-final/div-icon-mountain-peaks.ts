import { DivIcon } from 'leaflet';

export const MountainPeaksMarkers = (selectColor = 'blue') =>
  DivIcon.extend({
    options: {
      html: `<i class="fas fa-mountain peak-${selectColor}"></i>`,
      className: 'mountain-peak',
    },
  });
