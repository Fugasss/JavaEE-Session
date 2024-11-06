import Filter from "./Filter/Filter";
import Products from "./Products/Products";

export default function Shop() {
  return (
    <div className="flex">
        <div className=" w-1/5 mr-4">
          <Filter/>
        </div>
        <Products/>
    </div>
  )
}
