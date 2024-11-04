import EModalContent from "./EModalContent"
import Login from "./ModalContents/Login/Login"
import LoginWarning from "./ModalContents/Login/LoginWarning"
import Registration from "./ModalContents/Registration/Registration"
import RegistrationSuccess from "./ModalContents/Registration/RegistrationSuccess"
import ModalWindow from "./ModalWindow"

export default function ModalWindowWrapper({type}:{type:EModalContent}) {

  const renderModalWindow = () =>{
    switch(type){
      case EModalContent.NONE:{
        return <></>
      }
      case EModalContent.LOGIN:{
        return(
          <ModalWindow>
          <Login/>
        </ModalWindow>
        )
      }
      case EModalContent.REGISTRATION:{
        return(
          <ModalWindow>
            <Registration/>
          </ModalWindow>
        )
      }  
    }
  }

  return (
    renderModalWindow()
  )
}
