import { OverviewConfig, Detail } from '../../spec/spec';

export interface BasicGrid extends OverviewConfig {
  type: 'basic-grid';
  details: Detail[];
}
