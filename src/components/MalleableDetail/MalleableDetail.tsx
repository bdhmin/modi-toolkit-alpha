import { useState } from 'react';
import { MalleableODIProps } from '../MalleableODI/MalleableODI';
import useMalleableODIStore from '../../store';

export const MalleableDetail = ({
  id,
  itemList,
  children,
}: MalleableODIProps) => {
  const { malleableODIMap, setMalleableODI } = useMalleableODIStore();

  setMalleableODI(id, {
    itemList,
    overviewUI: children,
    selectedIndex: 0,
  });

  const malleableODIState = malleableODIMap[id];
  console.log(malleableODIState);

  if (malleableODIState) {
    return (
      <div
        className="flex-1 w-full h-fit"
        key={itemList.at(malleableODIState.selectedIndex)?.name}
      >
        {children({
          item: itemList.at(malleableODIState.selectedIndex) ?? null,
        })}
      </div>
    );
  } else {
    return <></>;
  }
};
