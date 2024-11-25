import { TFilterParams } from "../Shop";
export type TProducts = {
  productsData : JSX.Element , 
  maxPages : number , 
  filterParams : TFilterParams , 
  setFilterParams : Function ,
}
export default function Products( {productsData , maxPages , filterParams ,setFilterParams} : TProducts) {

  const createPaginationArray = (maxNumber : number) => {

    const resultArray = []

    for (let i = 1; i < maxNumber+1; i++) {
      resultArray.push(i)
    }
    console.log(maxNumber)
    return resultArray
  }

  const changePage = (e : React.MouseEvent<HTMLButtonElement, MouseEvent> , newPage : number) =>{
    e.preventDefault();
    const newFilter = filterParams
    newFilter.page = newPage
    setFilterParams({...newFilter})
  }

  const paginationSequence = createPaginationArray(maxPages); 
  console.log(paginationSequence)
  return (
    <section>
      <div className="flex flex-col">
        <div className="flex flex-wrap gap-4">
          {productsData}         
        </div>
        <nav>
          <div className="flex m-2 gap-1">
            { paginationSequence.map(item=> <button className="bg-passive  p-2 hover:bg-active disabled:bg-active_dark" disabled={filterParams.page+1==item} onClick={(e)=>{changePage(e,item-1)}}>{item}</button>) }
          </div>
        </nav>
      </div>
    </section>
  )
}
