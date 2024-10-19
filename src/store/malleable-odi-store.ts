import { create } from "zustand";
import { ODIItemProps } from "../components/MalleableODI/MalleableODI";

export interface MalleableODIComponentState {
  itemList: any[];
  overviewUI: (props: ODIItemProps) => React.ReactElement;
  detailUI: (props: ODIItemProps) => React.ReactElement;
  selectedIndex: number;
}

export type MalleableODIMap = {[id: string]: MalleableODIComponentState};

export interface MalleableODIsCollection {
  malleableODIMap: MalleableODIMap,
  setMalleableODIMap: (map: MalleableODIMap) => void;
  setMalleableODI: (id: string, malleableODI: Partial<MalleableODIComponentState>) => void;

  selectItem: (id: string, itemIndex: number) => void;
  // setItemList: (items: any[]) => void;
  // setSelectedIndex: (index: number) => void;
}

export const useMalleableODIStore = create<MalleableODIsCollection>((set) => ({
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
    console.log('test?', state.malleableODIMap[id])
    return state.malleableODIMap;
  }),
}))