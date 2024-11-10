import FilterSearch from "./FilterComponents/FilterSearch";
import PartSelector from "./FilterComponents/DropdownSelector";
import Prices from "./FilterComponents/Prices";
import DropdownSelector from "./FilterComponents/DropdownSelector";

export default function Filter() {

  const partList = ["Процессоры" , "Видеокарты" , "Оперативная Память" , "Накопители" , "Материнская Плата" , "Блок Питания"]
  const sortBy = ["По убыванию цены" , "По возрастанию цены" , "По алфаивиту"]

  return (
    <aside className="bg-passive w-full">
      <div className="flex flex-col gap-6 p-6 ">
        <FilterSearch/>
        <DropdownSelector partList={partList} title="Часть системы :"/>
        <DropdownSelector partList={sortBy} title="Сортировать по:"/>
        <Prices/>
      </div>
    </aside>
  )
}
