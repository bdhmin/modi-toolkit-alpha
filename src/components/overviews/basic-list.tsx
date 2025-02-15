import { Detail, OverviewConfig } from '../../spec/spec';

export interface BasicList extends OverviewConfig {
  type: 'basic-list';
  details: Detail[];
}
