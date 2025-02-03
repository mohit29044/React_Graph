import GraphStatistics from "../../Components/GraphStatistics";
import Revenue from "../../Components/Revenue";
import Today from "../../Components/Today";

function Statistics() {
  return (
    <>
      <div className="bg-gray-200 h-fit flex">
        <Today />
        <Revenue />
        <GraphStatistics />
      </div>
    </>
  );
}

export default Statistics;
