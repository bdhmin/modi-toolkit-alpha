import MalleableODI from "malleable-odi-toolkit-0.0/src/components/MalleableODI";
import MalleableOverview from "malleable-odi-toolkit-0.0/src/components/MalleableOverview";
import MalleableDetail from "malleable-odi-toolkit-0.0/src/components/MalleableDetail";

import { Member, members } from "./members";
import React, { useState } from "react";
import { useMalleableODIStore } from "../../src/store/malleable-odi-store";
import { ODIItemProps } from "../../src/components/MalleableODI/MalleableODI";

function App() {
  const { selectItem } = useMalleableODIStore();

  return (
    <div className="w-full flex flex-col items-center">
      <div className="max-w-[960px]">
        <MalleableDetail id="first" itemList={members}>
          {/* {({}: ODIItemProps) => <div>fdsa</div>} */}
        </MalleableDetail>
        <MalleableOverview id="first" itemList={members}>
          {({ item, index, isSelected }: ODIItemProps) => (
            <div
              className={`w-full flex flex-col gap-2 p-2 ${isSelected ? "bg-zinc-200" : "none"}`}
            >
              <div className="flex flex-row w-full gap-1">
                <div
                  className="min-w-[130px] max-w-[130px] h-[160px] overflow-hidden cursor-pointer"
                  onClick={() => selectItem("first", index)}
                >
                  <img
                    className="w-full h-full object-cover"
                    alt={`profile-${item.name}`}
                    src={item.profilePic}
                  />
                </div>
                <div className="w-full flex flex-col justify-between p-2">
                  <p className="flex justify-end text-sm">{item.title}</p>
                  <div className="flex flex-col">
                    <h2
                      className="font-bold my-0.5 cursor-pointer"
                      onClick={() => selectItem("first", index)}
                    >
                      {item.name}
                    </h2>
                    <p className="text-zinc-400">{item.shortBio}</p>
                  </div>
                  <p className="flex justify-end text-sm">links</p>
                </div>
              </div>
              <div className="my-2">
                {item.longBio.split("\n").map((line: any, index: number) => (
                  <React.Fragment key={index}>
                    {line}
                    <div className="my-4" />
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}
        </MalleableOverview>
      </div>
    </div>

    // Key development process: I feel like it's more intuitive
    // for me to develop the UI for overview first — before the detail view.
    // I'm naturally creating the overview, then adding more details and stuff...
    // Maybe I could encourage simultaneous dev of overview + detail view.
    // Just specifying which to show which not to? not just CSS, but html will change too though.

    // I could maybe guide devs to devleop in an easy way? This feels
    // a bit too forceful though...
    // good design is they can do anything...
    // I gues this is a recommendation
    // 1. Develop the overview with all attributes shown
    // 2. Revise Style/Layout for detail view
    // 3. Choose which attributes to show in overview?
  );
}

export default App;
