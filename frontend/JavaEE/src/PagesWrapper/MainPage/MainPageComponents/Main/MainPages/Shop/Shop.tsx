import { createContext, useState } from "react";
import Filter from "./Filter/Filter";
import Products from "./Products/Products";

export type TFilterParams = {
  max : number , 
  min : number , 
  page : number ,
  size : number ,
  type? : string ,
}

const defaultFilter : TFilterParams = {
  max : 10000000 , 
  min : 0 ,
  page : 0 ,
  size : 40 , 
}

export const FilterContext = createContext(defaultFilter)

export default function Shop() {

  const [filterParams , setFilterParams ] = useState(defaultFilter)

  return (
    <FilterContext.Provider value={filterParams}>

    <div className="flex w-full">
        <div className=" w-1/2 mr-4">
          <Filter/>
        </div>
        <div>
          <Products/>
        </div>
    </div>

    </FilterContext.Provider>
  )
}
