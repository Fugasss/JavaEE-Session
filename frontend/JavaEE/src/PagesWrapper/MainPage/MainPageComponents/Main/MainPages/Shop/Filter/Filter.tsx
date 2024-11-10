import FilterSearch from "./FilterComponents/FilterSearch";
import PartSelector from "./FilterComponents/PartSelector";
import Prices from "./FilterComponents/Prices";

export default function Filter() {
  return (
    <aside className="bg-passive w-full">
      <div className="flex flex-col gap-6 p-6 ">
        <FilterSearch/>
        <PartSelector/>
        <Prices/>
      </div>
    </aside>
  )
}
