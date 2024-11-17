import FilterSearch from "./FilterComponents/FilterSearch";
import Prices from "./FilterComponents/Prices";
import { TFilterParams } from "../Shop";
import PartsDropdown from "./FilterComponents/DropDowns/PartsDropdown";


// const sortBy = ["По убыванию цены" , "По возрастанию цены" , "По алфаивиту"]

export default function Filter( { setFilterParams , paramsChanges} : {setFilterParams : Function , paramsChanges : TFilterParams}) {

  return (
    <aside className="bg-passive w-full">
      <div className="flex flex-col gap-6 p-6 ">
        <FilterSearch />
        <PartsDropdown paramsChanges={paramsChanges}/>
        <Prices paramsChanges={paramsChanges}/>
        <button className="bg-active p-3" onClick={() => {console.log(paramsChanges);setFilterParams({...paramsChanges})}}>Применить изменения</button>
      </div>
    </aside>
  )
}
