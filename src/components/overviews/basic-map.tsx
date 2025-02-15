import { OverviewConfig, Detail } from '../../spec/spec';

export interface BasicMap extends OverviewConfig {
  type: 'basic-map';
  details: Detail[];
  position: { latitude: number; longitude: number }[];
}
