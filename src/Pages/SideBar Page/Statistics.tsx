import Audience from "../../Components/Audience";
import GraphStatistics from "../../Components/GraphStatistics";
import Revenue from "../../Components/Revenue";
import Today from "../../Components/Today";
import Totalvisits from "../../Components/Totalvisits";

function Statistics() {
  return (
    <>
      <div className="bg-gray-200 h-full grid grid-cols-1 xl:grid-cols-3 w-full lg:w-[calc(100%-224px)]">
        <Today />
        <Revenue />
        <GraphStatistics />
        <Totalvisits />
        <Audience />
      </div>
    </>
  );
}

export default Statistics;
