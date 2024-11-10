import { useState } from "react";

export default function PartSelector(){
  
  const partList = ["CPU" , "GPU" , "Memory" , "Disk" , "Motherboard" , "Power Block"]
  const [currentSelection , setSelection] = useState(partList[0]);
  const [isListVisible , setListVisability] = useState(false);

  const openDropdown = () => {
    
    console.log("Set list vis : " + !isListVisible)
    setListVisability(!isListVisible);
  }

  return(
    <div className="relative flex flex-col">
      <input type="text" className="bg-WHITE w-full p-1 outline-none" onChange={()=>{}} value={currentSelection} onClick={(e) => {e.preventDefault();openDropdown()}}/>
      <div className="bg-WHITE flex justify-center items-center px-4 absolute right-0 top-2" onClick={() => {openDropdown()}}>
        <div className="border-l-2 border-b-2 border-active_dark w-3 h-3 mb-1 -rotate-45"></div>
      </div>
      {isListVisible && 
        <ul className="flex flex-col w-full absolute">
          {partList.map((item) => <li className="w-full bg-white hover:bg-active_light p-2" key={item} onClick={(e) => {e.preventDefault(); setSelection(item) ; setListVisability(false)}}>{item}</li>)}
        </ul>
      }
    </div>
  )
};
