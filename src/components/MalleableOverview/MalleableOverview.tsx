import {
  cloneElement,
  isValidElement,
  ReactElement,
  useEffect,
  useRef,
} from 'react';
import { useMalleableODI } from '../../store/malleable-odi-store';
import { MalleableODIProps } from '../MalleableODI/MalleableODI';
import React from 'react';
import '../../styles/odi-attributes.css';

export const MalleableOverview = ({
  id,
  itemList,
  children,
}: MalleableODIProps) => {
  const overviewRef = useRef<HTMLDivElement | null>(null);

  const { malleableODIMap, setMalleableODI } = useMalleableODI();
  const malleableODIState = malleableODIMap[id];

  // Initialize the state only if it doesn't exist
  useEffect(() => {
    if (!malleableODIState) {
      setMalleableODI(id, {
        itemList,
        overviewUI: children,
        selectedIndex: -1,
      });
    }
  }, [id, malleableODIState, setMalleableODI, itemList, children]);

  // // Upon loading, hide all attributes that are tagged by default to be hidden
  // useEffect(() => {

  // }, [malleableODIState]);

  if (malleableODIState) {
    return (
      <div
        ref={overviewRef}
        className="odi-overview flex-1 w-full h-[400px] flex flex-col overflow-hidden"
      >
        <div className="overflow-scroll">
          {itemList.map((item, index) => (
            <div>
              {index > 0 && <hr />}
              <div key={item.name}>
                {children &&
                  children({
                    item,
                    index,
                    isSelected: malleableODIState.selectedIndex === index,
                  })}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return <div>This is overview</div>;
  }
};
