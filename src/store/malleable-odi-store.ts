import { create } from "zustand";

export interface MalleableODIComponentState {
  itemList: any[];
  overviewUI: (props: { item: any }) => React.ReactElement;
  detailUI: (props: { item: any }) => React.ReactElement;
  selectedIndex: number;
}

export type MalleableODIMap = {[id: string]: MalleableODIComponentState};

export interface MalleableODIsCollection {
  malleableODIMap: MalleableODIMap,
  setMalleableODIMap: (map: MalleableODIMap) => void;
  setMalleableODI: (id: string, malleableODI: Partial<MalleableODIComponentState>) => void;

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
}))