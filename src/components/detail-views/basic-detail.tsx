import { DetailConfig, ODLayout, AttributeSet } from '../../spec/spec';

export interface BasicDetail extends DetailConfig {
  type: 'basic-detail';
  openIn: ODLayout;
  attributeSet?: AttributeSet[];
}
