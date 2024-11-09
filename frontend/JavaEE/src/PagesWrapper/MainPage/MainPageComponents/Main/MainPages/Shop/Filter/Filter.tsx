import FilterSearch from "./FilterComponents/FilterSearch";
import Prices from "./FilterComponents/Prices";

export default function Filter() {
  return (
    <aside className="bg-passive w-full">
      <div className="flex flex-col gap-3 p-4">
        <FilterSearch/>
        <Prices/>
      </div>
    </aside>
  )
}
