import {
  cloneElement,
  isValidElement,
  ReactElement,
  useEffect,
  useRef,
} from 'react';
import { Attribute, useMalleableODI } from '../../store/malleable-odi-store';
import { MalleableODIProps } from '../MalleableODI/MalleableODI';
import React from 'react';
import '../../styles/odi-attributes.css';

export const MalleableOverview = ({
  id,
  itemList,
  children,
  shownAttributeIds,
  hiddenAttributeIds,
}: MalleableODIProps & {
  shownAttributeIds: string[];
  hiddenAttributeIds: string[];
}) => {
  const overviewRef = useRef<HTMLDivElement | null>(null);

  const { malleableODIMap, setMalleableODI, addShownAttributeIds } =
    useMalleableODI();
  const malleableODIState = malleableODIMap[id];

  // Initialize the state only if it doesn't exist
  useEffect(() => {
    if (!malleableODIState) {
      setMalleableODI(id, {
        itemList,
        overviewUI: children,
        selectedIndex: -1,
        attributes: [
          ...shownAttributeIds.map((a) => ({ id: a, shown: true })),
          ...hiddenAttributeIds.map((a) => ({ id: a, shown: false })),
        ].reduce((acc: { [attributeId: string]: Attribute }, { id, shown }) => {
          acc[id] = { id, shown };
          return acc;
        }, {}),
      });
    }
  }, [id, malleableODIState, itemList, children]);

  useEffect(() => {
    if (malleableODIState?.attributes && overviewRef.current) {
      const attributes = overviewRef.current.querySelectorAll('[data-odi]');
      attributes.forEach((attribute) => {
        const attributeId = attribute.getAttribute('data-odi');
        if (attributeId && malleableODIState.attributes[attributeId]) {
          const { shown } = malleableODIState.attributes[attributeId];

          if (shown) {
            attribute.classList.remove('odi-hide');
          } else {
            attribute.classList.add('odi-hide');
          }
        }
      });
    }
  }, [malleableODIState]);

  if (malleableODIState) {
    return (
      <div
        id={`odi-overview-${id}`}
        ref={overviewRef}
        className="odi-overview flex-1 w-full h-[400px] flex flex-col overflow-hidden"
      >
        <div className="overflow-scroll">
          {itemList.map((item, index) => (
            <div key={index}>
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
