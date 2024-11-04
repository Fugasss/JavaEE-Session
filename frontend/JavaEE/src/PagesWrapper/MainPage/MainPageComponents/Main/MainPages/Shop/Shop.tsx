import Filter from "./Filter/Filter";
import Products from "./Products/Products";

export default function Shop() {
  return (
    <div className="flex">
        <Filter/>
        <Products/>
    </div>
  )
}
