
export default function FilterSearch() {
  return (
    <div className="flex">
        <input type="text" className="p-1 mr-3" placeholder="Ключевое слово..."/>
        <button className="bg-active py-1 px-3 hover:bg-active_light"> Найти </button>
    </div>
  )
}
