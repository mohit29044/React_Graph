import CommonGraph from "./CommonGraph";
import Timeview from "./Timeview";

function GraphStatistics() {
  return (
    <>
      <div className="flex flex-col md:row-span-2 md:col-span-2 xl:col-span-1">
        <div className="bg-white p-3 m-3 rounded-lg shadow-lg font-semibold ">
          <h3>Statistics</h3>
          <div className="flex text-center mt-3 gap-16 justify-center items-center">
            <div className="flex flex-col">
              <div>
                <CommonGraph
                  size={100}
                  maxValue={2000}
                  thickness={10}
                  value={219}
                />
              </div>
              <div className="text-mono flex flex-col gap-3">
                <div>
                  <div className="text-gray-600">Subscribers</div>
                  <div className="font-semibold text-xl">14855</div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <CommonGraph
                  size={100}
                  maxValue={2000}
                  thickness={10}
                  value={978}
                />
              </div>
              <div className="text-mono flex flex-col gap-3">
                <div>
                  <div className="text-gray-600">View</div>
                  <div className="font-semibold text-xl">211348</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 flex justify-center items-center">
            <Timeview />
          </div>
        </div>
      </div>
    </>
  );
}

export default GraphStatistics;
