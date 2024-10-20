import { useEffect, useState } from 'react';
import { MalleableODIProps } from '../MalleableODI/MalleableODI';
import { useMalleableODIStore } from '../../store/malleable-odi-store';

export const MalleableDetail = ({
  id,
  itemList,
  children,
}: MalleableODIProps) => {
  const { malleableODIMap, setMalleableODI } = useMalleableODIStore();

  const malleableODIState = malleableODIMap[id];

  // Initialize the state only if it doesn't exist
  useEffect(() => {
    if (!malleableODIState) {
      setMalleableODI(id, {
        itemList,
        detailUI: children,
        selectedIndex: -1,
      });
    }
  }, [id, malleableODIState, setMalleableODI, itemList, children]);

  if (malleableODIState && malleableODIState.selectedIndex >= 0) {
    if (children) {
      return (
        <div
          className="flex-1 w-full h-fit"
          key={itemList.at(malleableODIState.selectedIndex)?.name}
        >
          {children &&
            children({
              item: itemList.at(malleableODIState.selectedIndex) ?? null,
              index: 0, // TODO: need to also input the index of this???,
              isSelected: false,
            })}
        </div>
      );
    } else if (malleableODIState.overviewUI) {
      return (
        <div
          className="flex-1 w-full h-fit"
          key={itemList.at(malleableODIState.selectedIndex)?.name}
        >
          {malleableODIState.overviewUI &&
            malleableODIState.overviewUI({
              item: itemList.at(malleableODIState.selectedIndex) ?? null,
              index: 0, // TODO: need to also input the index of this???,
              isSelected: false,
            })}
        </div>
      );
    }
  } else {
    return <div>No item selected</div>;
  }
};
