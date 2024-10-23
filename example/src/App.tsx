import MalleableODI from "malleable-odi-toolkit-0.0/src/components/MalleableODI";
import MalleableOverview from "malleable-odi-toolkit-0.0/src/components/MalleableOverview";
import MalleableDetail from "malleable-odi-toolkit-0.0/src/components/MalleableDetail";

import { Member, members } from "./members";
import React, { useEffect, useState } from "react";
import { useMalleableODI } from "../../src/store/malleable-odi-store";
import { ODIItemProps } from "../../src/components/MalleableODI/MalleableODI";
import edit from "./assets/edit.svg";

function App() {
  const {
    initializeAttributes,
    selectItem,
    getSelectedIndex,
    isCustomizing,
    setIsCustomizing,
  } = useMalleableODI();

  // useEffect(() => {
  //   initializeAttributes("first", [], ["profile-pic", "long-bio"]);
  // }, []);

  const CustomizeButton = () => {
    return (
      <button
        className="flex items-center gap-2 text-sm px-2 py-1 bg-zinc-100 hover:bg-zinc-300 rounded-sm"
        onClick={() => setIsCustomizing()}
      >
        {isCustomizing ? (
          <b>Done Customizing</b>
        ) : (
          <>
            Customize <img src={edit} alt="edit" />
          </>
        )}
      </button>
    );
  };

  return (
    <div className="">
      <div className="w-full flex flex-col items-center">
        <div className="max-w-[960px] w-full my-4">
          <div className="flex justify-end my-2 mb-6">
            <CustomizeButton />
          </div>
          <hr />
          <MalleableOverview
            id="first"
            itemList={members}
            shownAttributeIds={[
              "title",
              // "profile-pic",
              "name",
              "email",
              "short-bio",
            ]}
            hiddenAttributeIds={["profile-pic", "long-bio"]}
          >
            {({ item, index, isSelected }: ODIItemProps) => (
              <div
                className={`w-full flex flex-col gap-2 p-2 ${isSelected ? "bg-zinc-200" : "none"}`}
              >
                <div className="flex flex-row w-full gap-1">
                  <div
                    data-odi="profile-pic"
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
                    <div className="flex justify-end">
                      <p data-odi="title" className="w-fit text-sm">
                        {item.title}
                      </p>
                    </div>
                    {/* path+stringify(children) */}
                    {/* {odi.p('p', <></>, )} */}
                    {/* <ODI.p data-odi-hide='{item.title}' className='flex justify-end'>
                      {item.title}
                    </ODI.p> */}
                    <div className="flex flex-col">
                      <h2
                        data-odi="name"
                        className="w-fit font-bold my-0.5 cursor-pointer"
                        onClick={() => selectItem("first", index)}
                      >
                        {item.name}
                      </h2>
                      <p data-odi="short-bio" className="w-fit text-zinc-400">
                        {item.shortBio}
                      </p>
                    </div>
                    <div className="flex justify-end">
                      <p data-odi="email" className="w-fit text-sm">
                        email
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  data-odi="long-bio"
                  // data-odi-hide="long-bio"
                  // key='long-bio'
                  className="my-2"
                >
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
      {getSelectedIndex("first") !== null && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={() => selectItem("first", -1)}
          />

          {/* Modal content */}
          <div className="w-[80%] max-w-[960px] bg-white p-6 shadow-lg rounded-lg z-10">
            <div className="flex justify-end gap-2">
              <CustomizeButton />
              <button
                className="text-black text-xl font-bold"
                onClick={() => {
                  selectItem("first", -1);
                  setIsCustomizing(false);
                }} // Close modal
              >
                &times;
              </button>
            </div>

            {/* Detail Content */}
            {/* <MalleableDetail id="first" itemList={members} /> */}
            <MalleableDetail id="first" itemList={members}>
              {/* {({ item, index, isSelected }: ODIItemProps) => (
                <div
                  className={`w-full flex flex-col gap-2 p-2 ${isSelected ? "bg-zinc-200" : "none"}`}
                >
                  <OverviewContentOnly {...{ item, index, isSelected }} />

                  <div className="my-2">
                    {item.longBio
                      .split("\n")
                      .map((line: any, index: number) => (
                        <React.Fragment key={index}>
                          {line}
                          <div className="my-4" />
                        </React.Fragment>
                      ))}
                  </div>
                </div>
              )} */}
            </MalleableDetail>
          </div>
        </div>
      )}
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
