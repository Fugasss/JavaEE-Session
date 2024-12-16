import { createContext, useState } from "react";
import EModalContent from "../Modal/EModalContent";
import ModalWindowWrapper from "../Modal/ModalWindowWrapper";
import MainPage from "./MainPage/MainPage";

export const ModalContext = createContext<Function>(()=>{})

export default function PagesWrapper() {

  const[ modalType , setModal ] = useState<{type : EModalContent , data?:string }>({ type : EModalContent.NONE })

  return (
    <div className="flex min-h-screen">
      <ModalContext.Provider value={setModal}>

        <MainPage/>
        
        <ModalWindowWrapper type={modalType.type } data={modalType.data}/>

      </ModalContext.Provider>
    </div>
  )
}
