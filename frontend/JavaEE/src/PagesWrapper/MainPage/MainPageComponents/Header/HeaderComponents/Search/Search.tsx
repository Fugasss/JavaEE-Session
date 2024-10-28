
export default function Search() {
    return (
          <div className="w-full">
              <form className="w-full h-10 flex">  
                <input type="text" placeholder="Поиск..." className="w-full border-b-2 h-full focus:outline-none focus:border-blue-300"></input>
                <button className="bg-blue-200 h-full px-4 ">Найти</button>
              </form>
          </div>
    )
  }
  