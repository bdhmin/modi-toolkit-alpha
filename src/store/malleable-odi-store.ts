import { create } from "zustand";
import { ODIItemProps } from "../components/MalleableODI/MalleableODI";

export interface MalleableODIComponentState {
  itemList: any[];
  overviewUI?: (props: ODIItemProps) => React.ReactElement;
  detailUI?: (props: ODIItemProps) => React.ReactElement;
  selectedIndex: number;
}

export type MalleableODIMap = {[id: string]: MalleableODIComponentState};

export interface MalleableODIsCollection {
  malleableODIMap: MalleableODIMap,
  setMalleableODIMap: (map: MalleableODIMap) => void;
  setMalleableODI: (id: string, malleableODI: Partial<MalleableODIComponentState>) => void;

  selectItem: (id: string, itemIndex: number) => void;
  getSelectedIndex: (id: string) => number | null; // The index that is being selected. If nothing is selected, return null

  // ---- CUSTOMIZING ODI ----
  isCustomizing: boolean;
  setIsCustomizing: (isCustomizing?: boolean) => void;

  // setItemList: (items: any[]) => void;
  // setSelectedIndex: (index: number) => void;
}

export const useMalleableODIStore = create<MalleableODIsCollection>((set, get) => ({
  malleableODIMap: {},
  setMalleableODIMap: (map) => set({ malleableODIMap: map }),
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
  setIsCustomizing: (isCustomizing?: boolean) => set((state) => ({isCustomizing: isCustomizing !== undefined ? isCustomizing : !state.isCustomizing}))
}))