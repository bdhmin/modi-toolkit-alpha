import React from 'react';
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
  return (
    <div className="w-full h-fit border flex flex-row justify-evenly">
      <div>Overview</div>
      <div className="flex flex-col">
        {itemList.map((item) => (
          <div key={item.name}>{children({ item })}</div>
        ))}
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
