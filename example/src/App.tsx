import MalleableODI from "../../src/components-old/MalleableODI";
import MalleableOverview from "../../src/components-old/MalleableOverview";
import MalleableDetail from "../../src/components-old/MalleableDetail";

import { Member, members } from "./members";
import React, { useEffect, useState } from "react";
import { useMalleableODI } from "../../src/store/malleable-odi-store";
import { ODIItemProps } from "../../src/components-old/MalleableODI/MalleableODI";
import edit from "./assets/edit.svg";

function App() {
  const {
    initializeAttributes,
    selectItem,
    getSelectedIndex,
    isCustomizing,
    setIsCustomizing,
    malleableODIMap,
  } = useMalleableODI();

  // malleableODIMap["first"].attributes;

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
            // shownAttributeIds={
            //   [
            //     // "title",
            //     // "profile-pic",
            //     // "name",
            //     // "email",
            //     // "short-bio",
            //   ]
            // }
            // hiddenAttributeIds={[
            //   // "profile-pic",
            //   // "short-bio",
            //   "long-bio",
            // ]}
            attributeUIs={members.map((member) => [
              {
                id: "title",
                value: member.title,
                type: "text",
                shown: false,
              },
              {
                id: "name",
                value: member.name,
                type: "text",
                shown: false,
              },
              {
                id: "profile-pic",
                value: member.profilePic,
                type: "image",
                shown: false,
              },
            ])}
          >
            {() => <div>hello</div>}
            {/* {({ item, index, isSelected }: ODIItemProps) => (
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
                    <div className="flex justify-end gap-4">
                      <p
                        data-odi="email"
                        className="w-fit text-sm hover:bg-zinc-300 px-2 py-1 cursor-pointer"
                      >
                        email
                      </p>
                      <p
                        data-odi="email"
                        className="w-fit text-sm hover:bg-zinc-300 px-2 py-1 cursor-pointer"
                      >
                        website
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
            )} */}
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
            <div className="flex justify-end gap-2 mb-4">
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
              {({ item, index, isSelected }: ODIItemProps) => (
                <div
                  className={`w-full flex flex-col gap-2 p-2 ${isSelected ? "bg-zinc-200" : "none"}`}
                >
                  <div className="flex flex-row w-full gap-4">
                    <div
                      data-odi="profile-pic"
                      className="min-w-[260px] max-w-[260px] h-[320px] overflow-hidden cursor-pointer"
                      onClick={() => selectItem("first", index)}
                    >
                      <img
                        className="w-full h-full object-cover"
                        alt={`profile-${item.name}`}
                        src={item.profilePic}
                      />
                    </div>
                    <div className="w-full flex flex-col justify-start p-2 gap-4">
                      <div className="flex justify-between">
                        <div className="flex flex-col">
                          <h2
                            data-odi="name"
                            className="w-fit font-bold my-0.5 text-2xl"
                            // onClick={() => selectItem("first", index)}
                          >
                            {item.name}
                          </h2>
                          <p
                            data-odi="short-bio"
                            className="w-fit text-zinc-400"
                          >
                            {item.shortBio}
                          </p>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <p data-odi="title" className="w-fit">
                            {item.title}
                          </p>
                          <div className="flex justify-end gap-4">
                            <p
                              data-odi="email"
                              className="w-fit text-sm hover:bg-zinc-300 px-2 py-1 cursor-pointer"
                            >
                              email
                            </p>
                            <p
                              data-odi="email"
                              className="w-fit text-sm hover:bg-zinc-300 px-2 py-1 cursor-pointer"
                            >
                              website
                            </p>
                          </div>
                        </div>
                      </div>

                      <div data-odi="long-bio" className="my-2">
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
                  </div>
                </div>
              )}
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
