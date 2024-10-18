import { useState } from 'react';
import { MalleableODIProps } from '../MalleableODI/MalleableODI';
import useMalleableODIStore from '../../store';

export const MalleableDetail = ({
  id,
  itemList,
  children,
}: MalleableODIProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const { malleableODIMap, setMalleableODI } = useMalleableODIStore();
  const malleableODIState = malleableODIMap[id];

  if (malleableODIState) {
    return (
      <div
        className="flex-1 w-full h-fit"
        key={itemList.at(selectedIndex)?.name}
      >
        {children({ item: itemList.at(selectedIndex) ?? null })}
      </div>
    );
  } else {
    return <></>;
  }
};
