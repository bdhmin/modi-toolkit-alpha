export interface ODI {
  // id: string;
  ODILayout:
    | 'NEW PAGE'
    | 'SIDE-BY-SIDE'
    | 'IN PLACE'
    | 'UNDER OVERVIEW'
    | 'ABOVE OVERVIEW';
  // overviews: Overview<any>[];
  overviews: Overview[];
  attributes: Attribute[];
}

// export interface Overview {
//   shownAttributes: Attribute[] | {[key: string]: Attribute[]};
//   anchorAttributes: Attribute[]; // anchor attributes are attributes that basically filter which layouts are possible
//   layout: Layout<Record<string, Attribute[]>>;
//   // TODO: Synchronization? attributes synchronization, item synchronization, layout synchronization, ...?
// }
// shownAttributes: T; // Ensures consistency with layout's expected attributes
// anchorAttributes: Attribute[]; // Used for filtering applicable layouts
// type: 'LIST' | 'GRID' | 'TABLE' | 'MAP' | 'HIERARCHY' | 'TIMELINE' | 'PLOT';

// export interface Overview<T extends Record<string, Attribute[]>> {
export interface Overview {
  // layout: Layout<T>;
  layout: Layout;
  attributes: [];
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

interface LayoutConfig<T extends Record<string, Attribute[]>> {
  // attributePositions?: { [key: string]: 'top' | 'left' | 'right' | 'bottom' | 'hidden' };
  attributeOrganizations?: T;
  // pagination?: boolean;
  // filtering?: boolean;
  // sorting?: boolean;
}

// export interface Layout<T extends Record<string, Attribute[]>> {
export interface Layout {
  label: string;
  anchorAttributeConditions: ((attributes: Attribute[]) => boolean)[];
  attributeOrganizations: Record<string, Attribute[]>[];
  // config: (attributes: T) => LayoutConfig<T>;
}