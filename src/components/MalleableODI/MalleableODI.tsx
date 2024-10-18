import React, { useState } from 'react';
import '../../styles/globals.css';

export interface MalleableODIProps {
  // - the list of items
  id: string;
  itemList: any[];
  children: (props: { item: any }) => React.ReactElement;
}

// * The design of this ODI is that the developer will design the detail view UI. Then, the overview will be pretty much a subset of the detail view.
// * The developer can also develop a custom overview UI for the contents if they want to.
// * The attributes can be tagged by the developer.

// export function MalleableODI({ itemList, children }: MalleableODIProps) {
export function MalleableODI({ itemList, children }: MalleableODIProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // - Things to do:
  // [ ] Add selectable attribute — adding a selecable attribute to a component, this component is clickable to select this item in the detail.
  //     - By default, the entire overview item component should be selectable.
  //     - Also provide like an "hovering" listener or somerthing...

  return (
    <div className="w-fit flex flex-row">
      {/* OVERVIEW COMPONENT */}
      <div className="flex-1 w-full h-[400px] flex flex-col border-r overflow-hidden">
        <div className="overflow-scroll">
          {itemList.map((item, index) => (
            <>
              {index > 0 && <hr />}
              <div key={item.name}>{children({ item })}</div>
            </>
          ))}
        </div>
      </div>

      {/* DETAIL VIEW COMPONENT */}
      <div
        className="flex-1 w-full h-fit"
        key={itemList.at(selectedIndex)?.name}
      >
        {children({ item: itemList.at(selectedIndex) ?? null })}
      </div>
    </div>
  );
}

/**
 * ---- USAGE ----
 * <MalleableODI itemList={myItems}>
 * {({ item }) => (
 *   <div>
 *     <h2>{item.title}</h2>
 *     <p>{item.description}</p>
 *     </div>
 *   )}
 * </MalleableODI>
 */
