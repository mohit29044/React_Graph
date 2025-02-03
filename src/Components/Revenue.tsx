import React from "react";
import CommonGraph from "./CommonGraph";

function Revenue() {
  return (
    <>
      <div className="bg-white p-3 m-3 rounded-lg shadow-lg font-semibold h-fit">
        <h3>Revenue By Locations</h3>
        <div className="flex flex-col justify-between items-center">
          <div className="h-32 w-40 mt-3">
            <img
              src={
                "https://raw.githubusercontent.com/SyncfusionExamples/nuget-img/master/react/react-map.png  "
              }
              alt=""
            />
          </div>
          <div>
            <CommonGraph
              value={60}
              maxValue={100}
              thickness={10}
              size={100}
              type="revenue"
              label="USA"
            />
            <CommonGraph
              value={32}
              maxValue={100}
              thickness={10}
              size={100}
              label="Europe"
              type="revenue"
            />
            <CommonGraph
              value={8}
              maxValue={100}
              thickness={10}
              size={100}
              type="revenue"
              label="Asia"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Revenue;
