import React from "react";
import CommonGraph from "./CommonGraph";

function Today() {
  return (
    <>
      <div className="bg-white h-[330px] p-3 m-3 rounded-lg shadow-lg">
        <h3 className="font-semibold">User Today</h3>
        <div className="flex justify-center items-center ">
          <CommonGraph
            value={573}
            label="User"
            maxValue={1000}
            size={200}
            thickness={20}
          />
          <div className="text-mono flex flex-col gap-3 ml-8">
            <div>
              <div className="text-gray-600">Online</div>
              <div>
                <span className="font-semibold text-xl">179</span> Users
              </div>
            </div>
            <div>
              <div className="text-gray-600">Offline</div>
              <div>
                <span className="font-semibold text-xl">200</span> Users
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Today;
