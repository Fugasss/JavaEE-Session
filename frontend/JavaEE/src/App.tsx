import { createContext, useState } from "react"
import EModalContent from "./Modal/EModalContent"
import ModalWindowWrapper from "./Modal/ModalWindowWrapper"
import MainPage from "./PagesWrapper/MainPage/MainPage"

export const ModalContext = createContext<Function>(()=>{})

function App() {
  const[modalType , setModal] = useState(EModalContent.LOGIN_WARNING)

  return (
    <>
    <ModalContext.Provider value={setModal}>

      <MainPage/>

      <ModalWindowWrapper type={modalType}/>

    </ModalContext.Provider>
    </>  
  )
}

export default App