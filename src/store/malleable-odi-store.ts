import { create } from "zustand";
import { ODIItemProps } from "../components/MalleableODI/MalleableODI";

export interface MalleableODIComponentState {
  itemList: any[];
  overviewUI?: (props: ODIItemProps) => React.ReactElement;
  detailUI?: (props: ODIItemProps) => React.ReactElement;
  selectedIndex: number;
  attributes: { [attributeId: string]: Attribute };
}

export type MalleableODIMap = {[id: string]: MalleableODIComponentState};

export interface Attribute {
  id: string;
  shown: boolean; // Whether this attribute is shown in the overview
}

export type AttributeUIType = 'text-main' | 'text' | 'image';

export interface AttributeUIObject {
  id: string;
  value: any;
  type: AttributeUIType;
  shown: boolean;
}

export type ComponentDefault = 'profile';

export interface MalleableODIsCollection {
  malleableODIMap: MalleableODIMap,
  setMalleableODIMap: (map: MalleableODIMap) => void;
  addMalleableODI: (id: string, malleableODI: MalleableODIComponentState) => void;
  setMalleableODI: (id: string, malleableODI: Partial<MalleableODIComponentState>) => void;

  selectItem: (id: string, itemIndex: number) => void;
  getSelectedIndex: (id: string) => number | null; // The index that is being selected. If nothing is selected, return null

  // ---- CUSTOMIZING ODI ----
  isCustomizing: boolean;
  setIsCustomizing: (isCustomizing?: boolean) => void;

  selectedAttributeIds: string[];
  setSelectedAttributeIds: (attributeIds: string[]) => void;
  toggleSelectedAttributeIds: (...attributeIds: string[]) => void;
  addSelectedAttributeIds: (...attributeIds: string[]) => void;
  removeSelectedAttributeIds: (...attributeIds: string[]) => void;
  clearSelectedAttributeIds: () => void;

  // TODO: create funciton that initializes all attributes — also make a way to initialized show or not shown in overview!
  initializeAttributes: (id: string, shownAttributeIds: string[], hiddenAttributeIds?: string[]) => void;


  addShownAttributeIds: (id: string, attributeIds: string[]) => void;
  // removeShownAttributeIds: (...attributeIds: string[]) => void;

  // setItemList: (items: any[]) => void;
  // setSelectedIndex: (index: number) => void;
}

export const useMalleableODI = create<MalleableODIsCollection>((set, get) => ({
  malleableODIMap: {},
  setMalleableODIMap: (map) => set({ malleableODIMap: map }),
  addMalleableODI: (id, malleableODI) => set((state) => {
    state.malleableODIMap[id] = {
      ...(state.malleableODIMap[id]??{}),
      ...malleableODI
    };
    return state.malleableODIMap;
  }),
  setMalleableODI: (id, malleableODI) => set((state) => {
    state.malleableODIMap[id] = {
      ...(state.malleableODIMap[id]??{}),
      ...malleableODI
    };
    return state.malleableODIMap;
  }),
  selectItem: (id, itemIndex) => set((state) => {
    state.malleableODIMap[id] = {
      ...(state.malleableODIMap[id]??{}),
      selectedIndex: itemIndex,
    };
    return state.malleableODIMap;
  }),
  getSelectedIndex: (id) => {
    const malleableODIState = get().malleableODIMap[id];
    return malleableODIState && malleableODIState.selectedIndex >= 0 ? malleableODIState.selectedIndex : null;
  },

  // ---- CUSTOMIZING ODI ----
  isCustomizing: false,
  setIsCustomizing: (isCustomizing?) => set((state) => ({isCustomizing: isCustomizing !== undefined ? isCustomizing : !state.isCustomizing})),

  selectedAttributeIds: [],
  setSelectedAttributeIds: (attributeIds) => set({selectedAttributeIds: attributeIds}),
  toggleSelectedAttributeIds: (...attributeIds) => set((state) => ({
    selectedAttributeIds: state.selectedAttributeIds.some(id => attributeIds.includes(id))
      ? state.selectedAttributeIds.filter(id => !attributeIds.includes(id)) // Remove if exists
      : [...state.selectedAttributeIds, ...attributeIds] // Add if doesn't exist
  })),
  addSelectedAttributeIds: (...attributeIds) => set((state) => ({
    selectedAttributeIds: [...state.selectedAttributeIds, ...attributeIds],
  })),
  removeSelectedAttributeIds: (...attributeIds) => set((state) => ({
    selectedAttributeIds: state.selectedAttributeIds.filter(attributeId => !attributeIds.includes(attributeId))
  })),
  clearSelectedAttributeIds: () => set({ selectedAttributeIds: [] }),

  // TODO: Add two functions to add and remove attributes in the customized list.
  // TODO: Update attributes to data-odi-hide or data-odi-show
  initializeAttributes: (id, shownAttributeIds, hiddenAttributeIds?) => set((state) => {
    const malleableODI = state.malleableODIMap[id];
    if (!malleableODI) return state;

    shownAttributeIds.forEach(attributeId => {
      malleableODI.attributes[attributeId] = {
        id: attributeId,
        shown: true,
      }
    })
    hiddenAttributeIds?.forEach(attributeId => {
      malleableODI.attributes[attributeId] = {
        id: attributeId,
        shown: false,
      }
    })
    state.malleableODIMap[id] = malleableODI;
    return state.malleableODIMap;
  }),

  addShownAttributeIds: (id, attributeIds) => set((state) => {
    const malleableODI = {...state.malleableODIMap[id]};
    if (malleableODI) {
      attributeIds.forEach(attributeId => {
        if (malleableODI.attributes[attributeId]) {
          malleableODI.attributes[attributeId].shown = true;
        } else {
          malleableODI.attributes[attributeId] = {
            id: attributeId,
            shown: true,
          }
        }
      })
    }

    state.malleableODIMap[id] = malleableODI;
    return state.malleableODIMap;
  })


}))