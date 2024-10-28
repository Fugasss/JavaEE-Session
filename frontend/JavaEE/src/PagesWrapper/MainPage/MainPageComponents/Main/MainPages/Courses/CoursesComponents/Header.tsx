
export default function Header() {
  return (
    <header className="mt-3 mb-6">
        <div className="flex">
          <div className="w-full">
            <form className="h-10">  
              <input type="text" placeholder="Поиск курсов..." className="border-b-2 w-2/5 h-full focus:outline-none focus:border-blue-300"></input>
              <button className="bg-blue-200 h-full px-4 ">Найти</button>
            </form>
          </div>
        </div>
    </header>
  )
}
