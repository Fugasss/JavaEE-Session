import { useState } from "react";

export type TDropdownSelector = {
  partList: string[] , 
  title?:string , 
  currentSelection : string , 
  setSelection : Function
}

export default function DropdownSelector({partList , title , currentSelection , setSelection} : TDropdownSelector){


  const [isListVisible , setListVisability] = useState(false);

  const openDropdown = () => {
    
    console.log("Set list vis : " + !isListVisible)
    setListVisability(!isListVisible);
  }

  return(
    <div className="flex flex-col">
      <p className="mb-1">{title}</p>
      <div className="relative flex flex-col">
        <input type="text" className="bg-WHITE w-full p-1 outline-none" onChange={()=>{}} value={currentSelection} onClick={(e) => {e.preventDefault();openDropdown()}}/>
        <div className="bg-WHITE flex justify-center items-center px-4 absolute right-0 top-2" onClick={() => {openDropdown()}}>
          <div className="border-l-2 border-b-2 border-active_dark w-3 h-3 mb-1 -rotate-45"></div>
        </div>
        {isListVisible && 
          <ul className="flex flex-col w-full z-40">
            {partList.map((item) => <li className="z-40 w-full bg-white hover:bg-active_light p-2" key={item} onClick={(e) => {e.preventDefault(); setSelection(item) ; setListVisability(false)}}>{item}</li>)}
          </ul>
        }
      </div>
    </div>
  )
};
