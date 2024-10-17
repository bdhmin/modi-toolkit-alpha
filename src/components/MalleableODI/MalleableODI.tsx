import React, { useState } from 'react';
import '../../styles/globals.css';

interface MalleableODIProps {
  // - the list of items
  itemList: any[];
  children: (props: { item: any }) => React.ReactElement;
}

// * The design of this ODI is that the developer will design the detail view UI. Then, the overview will be pretty much a subset of the detail view.
// * The developer can also develop a custom overview UI for the contents if they want to.
// * The attributes can be tagged by the developer.

// export function MalleableODI({ itemList, children }: MalleableODIProps) {
export function MalleableODI({ itemList, children }: MalleableODIProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="w-full h-full flex flex-row">
      {/* OVERVIEW COMPONENT */}
      <div className="flex-1 w-full flex flex-col border-r">
        {itemList.map((item, index) => (
          <>
            {index > 0 && <hr />}
            <div key={item.name}>{children({ item })}</div>
          </>
        ))}
      </div>

      {/* DETAIL VIEW COMPONENT */}
      <div
        className="flex-1 w-full h-full"
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
