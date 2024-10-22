import { useEffect, useRef, useState } from 'react';
import { MalleableODIProps } from '../MalleableODI/MalleableODI';
import { useMalleableODI } from '../../store/malleable-odi-store';

export const MalleableDetail = ({
  id,
  itemList,
  children,
}: MalleableODIProps) => {
  const detailRef = useRef<HTMLDivElement | null>(null);

  const {
    malleableODIMap,
    setMalleableODI,
    isCustomizing,
    selectedAttributeIds,
    addSelectedAttributeIds,
    removeSelectedAttributeIds,
  } = useMalleableODI();

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

  // Listen for click events to select an attribute whether to show or hide
  useEffect(() => {
    const clickEvent = (e: Event) => {
      console.log('clicked', e);
      if (isCustomizing) {
        const target = e.target as HTMLElement;
        const { attributeId, element } = findDataOdiAttribute(target);

        if (attributeId && element) {
          console.log(selectedAttributeIds, attributeId);
          if (selectedAttributeIds.includes(attributeId)) {
            removeSelectedAttributeIds(attributeId);
            element.setAttribute('data-odi-selecting', 'false');
          } else {
            addSelectedAttributeIds(attributeId);
            element.setAttribute('data-odi-selecting', 'true');
          }
        }
      }
    };

    if (detailRef.current) {
      const attributes = detailRef.current.querySelectorAll('[data-odi]');

      if (isCustomizing) {
        attributes.forEach((attribute) => {
          attribute.addEventListener('click', clickEvent);
        });
      } else {
        attributes.forEach((attribute) => {
          attribute.removeEventListener('click', clickEvent);
        });
      }
    }

    // Clean up the event listeners when the component unmounts
    return () => {
      if (detailRef.current) {
        const attributes = detailRef.current.querySelectorAll('[data-odi]');
        attributes.forEach((attribute) => {
          attribute.removeEventListener('click', clickEvent);
        });
      }
    };
  }, [isCustomizing, selectedAttributeIds]);

  const detailUI = children ? children : malleableODIState.overviewUI;

  if (malleableODIState && malleableODIState.selectedIndex >= 0 && detailUI) {
    return (
      <div
        ref={detailRef}
        className={`odi-detail ${
          isCustomizing ? 'odi-customizing' : ''
        } flex-1 w-full h-fit`}
        key={itemList.at(malleableODIState.selectedIndex)?.name}
      >
        {detailUI &&
          detailUI({
            item: itemList.at(malleableODIState.selectedIndex) ?? null,
            index: malleableODIState.selectedIndex, // TODO: need to also input the index of this???,
            isSelected: false,
          })}
        {selectedAttributeIds.length > 0 && (
          <button
            className="px-2 py-1 bg-zinc-100 hover:bg-zinc-300"
            onClick={() => {}}
          >
            Show in main page
          </button>
        )}
      </div>
    );
  } else {
    return <div>No item selected</div>;
  }
};

const findDataOdiAttribute = (
  target: HTMLElement | null
): { attributeId: string | null; element: HTMLElement | null } => {
  while (target && !target.classList.contains('odi-detail')) {
    const attributeId = target.getAttribute('data-odi');

    if (attributeId) {
      return { attributeId, element: target }; // Return both the attribute and the element
    }

    // Traverse up to the parent element
    target = target.parentElement;
  }

  // Return null values if no `data-odi` attribute is found or `odi-detail` is reached
  return { attributeId: null, element: null };
};
