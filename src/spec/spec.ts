import { BasicDetail } from "../components/detail-views/basic-detail";
import { BasicGrid } from "../components/overviews/basic-grid";
import { BasicList } from "../components/overviews/basic-list";
import { BasicMap } from "../components/overviews/basic-map";

export interface AttributeSet {
  thumbnail: Attribute[];
  title: Attribute[];
  subtitle: Attribute[];
  descriptions: Attribute[];
  keyPoints: Attribute[];
  buttons: Attribute[];
  additionalInfo: Attribute[];
}

export const emptyAttributeSet: AttributeSet = {
  thumbnail: [],
  title: [],
  subtitle: [],
  descriptions: [],
  keyPoints: [],
  buttons: [],
  additionalInfo: [],
};

// export interface OD {
//   overviews: Overview[];
//   attributeSet: AttributeSet[];
// }

export interface ODI {
  overviews: Overview[];
  attributeSet: AttributeSet[];
}

export type Overview = BasicList | BasicMap | BasicGrid;

export interface OverviewConfig {
  type: string;
  details?: Detail[];
  attributeSet?: AttributeSet[];
}

export type Detail = BasicDetail;

export interface DetailConfig {
  type: string;
  openIn: ODLayout;
}

export interface Attribute {
  type?:
    | 'string'
    | 'number'
    | 'boolean'
    | 'date'
    | 'image'
    | 'array'
    | 'tsx'
    | 'object'; // by default it's a string
  value:
    | string
    | number
    | boolean
    | Date
    | Attribute[]
    | { [key: string]: string }
    | { [key: string]: Attribute };
  // | ReactElement;
  label?: string;
  priority?: number; // This priority determines where the attribute is shown in the UI
  event?: (event: Event) => void;
  // listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions;
}


export type ODLayout = 'new page' | 'side-by-side' | 'replace' | 'popup';
