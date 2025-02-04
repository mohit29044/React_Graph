import GraphStatistics from "../../Components/GraphStatistics";
import Revenue from "../../Components/Revenue";
import Today from "../../Components/Today";

function Statistics() {
  return (
    <>
      <div className="bg-gray-200 h-screen grid grid-cols-1 xl:grid-cols-3 w-full lg:w-[calc(100%-224px)]">
        <Today />
        <Revenue />
        <GraphStatistics />
      </div>
    </>
  );
}

export default Statistics;
