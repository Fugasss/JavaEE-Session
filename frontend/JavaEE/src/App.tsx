import { createContext, useState } from "react"
import EModalContent from "./Modal/EModalContent"
import ModalWindowWrapper from "./Modal/ModalWindowWrapper"
import MainPage from "./PagesWrapper/MainPage/MainPage"

export const ModalContext = createContext<Function>(()=>{})
export const LoginStatusContext = createContext<{}>({isLogined : false , setIsLogined : ()=>{}})

function App() {

  const[ modalType , setModal ] = useState(EModalContent.LOGIN)
  const[ isLogined , setIsLogined] = useState(false)

  return (
    <>
    <ModalContext.Provider value={setModal}>
    <LoginStatusContext.Provider value={{isLogined , setIsLogined }}>

      <MainPage/>

      <ModalWindowWrapper type={modalType}/>

    </LoginStatusContext.Provider>
    </ModalContext.Provider>
    </>  
  )
}

export default App