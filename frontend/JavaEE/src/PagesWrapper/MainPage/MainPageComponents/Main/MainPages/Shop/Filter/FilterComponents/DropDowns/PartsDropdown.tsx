import { useState } from 'react'
import { TFilterParams } from '../../../Shop';

const partList = ["Процессоры" , "Видеокарты" , "Оперативная Память" , "Накопители" , "Материнская Плата" , "Блок Питания"]

export default function PartsDropdown({paramsChanges}:{paramsChanges:TFilterParams}) {

    const [currentSelection , setSelection] = useState(partList[0]);

    const [isListVisible , setListVisability] = useState(false);

    const openDropdown = () => {
      setListVisability(!isListVisible);
    }

    const onItemChosed = (e:React.MouseEvent<HTMLLIElement, MouseEvent> , item : string) => {

        e.preventDefault(); 
        setSelection(item); 
        paramsChanges.type = parseSelection(item);
        setListVisability(false)

    }

    const parseSelection = (item : string) => {
        switch(item){
            case "Процессоры":{
                return "CPU";
            }
            case "Видеокарты":{
                return "GPU";
            }
            case "Оперативная Память": {
                return "RAM";
            }
            case "Накопители" : {
                return "HDD";
            }
            case "Материнская Плата":{
                return "MOTHERBOARD";
            }
            case "Блок Питания":{
                return "PSU";
            }
        }
    }
  
    return(
      <div className="flex flex-col">
        <p className="mb-1">Часть:</p>
        <div className="relative flex flex-col">
          <input type="text" className="bg-WHITE w-full p-1 outline-none" onChange={()=>{}} value={currentSelection} onClick={(e) => {e.preventDefault();openDropdown()}}/>
          <div className="bg-WHITE flex justify-center items-center px-4 absolute right-0 top-2" onClick={() => {openDropdown()}}>
            <div className="border-l-2 border-b-2 border-active_dark w-3 h-3 mb-1 -rotate-45"></div>
          </div>
          {isListVisible && 
            <ul className="flex flex-col w-full z-40">
              {partList.map((item) => <li className="z-40 w-full bg-white hover:bg-active_light p-2" key={item} onClick={(e) => { onItemChosed(e , item)}}>{item}</li>)}
            </ul>
          }
        </div>
      </div>
    )
}
