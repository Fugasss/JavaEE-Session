import { createContext, useState } from "react"
import EModalContent from "./Modal/EModalContent"
import { verifyToken } from "./utils/verificationRequests"
import PagesWrapper from "./PagesWrapper/PagesWrapper"

export const LoginStatusContext = createContext<{ isLogined : boolean , setIsLogined : Function}>({isLogined : false , setIsLogined : ()=>{}})

const isLoginedRequested = await verifyToken();

function App() {
  
  const[ isLogined , setIsLogined] = useState(isLoginedRequested)
  console.log(isLogined)


  
  return (
    <>
    
    <LoginStatusContext.Provider value={{isLogined , setIsLogined }}>

      <PagesWrapper/>
    
    </LoginStatusContext.Provider>
    </>  
  )
}

export default App