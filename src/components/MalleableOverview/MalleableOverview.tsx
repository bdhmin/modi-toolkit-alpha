import { useEffect } from 'react';
import { useMalleableODIStore } from '../../store/malleable-odi-store';
import { MalleableODIProps } from '../MalleableODI/MalleableODI';
import { create } from 'zustand';

export const MalleableOverview = ({
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
        overviewUI: children,
        selectedIndex: 0,
      });
    }
  }, [id, malleableODIState, setMalleableODI, itemList, children]);

  if (malleableODIState) {
    return (
      <div className="flex-1 w-full h-[400px] flex flex-col overflow-hidden">
        {malleableODIState.selectedIndex}
        <div className="overflow-scroll">
          {itemList.map((item, index) => (
            <div
              onClick={() => {
                console.log(index);
                setMalleableODI(id, { selectedIndex: index });
              }}
            >
              {index > 0 && <hr />}
              <div key={item.name}>{children({ item })}</div>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return <div>This is overview</div>;
  }
};
