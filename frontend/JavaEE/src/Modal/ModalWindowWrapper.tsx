import EModalContent from "./EModalContent"
import Login from "./ModalContents/Login/Login"
import LoginSuccess from "./ModalContents/Login/LoginSuccess"
import RegistrationForm from "./ModalContents/Registration/RegistrationForm"
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
            <RegistrationForm/>
          </ModalWindow>
        )
      }  
      case EModalContent.LOGIN_SUCCESS:{
        return(
          <ModalWindow>
            <LoginSuccess/>
          </ModalWindow>
        )
      }
      case EModalContent.REGISTRATION_SUCCESS:{
        return(
          <ModalWindow>
            <RegistrationSuccess/>
          </ModalWindow>
        )
      }
      case EModalContent.RECOVER_PASSWORD:{
        return(
          <ModalWindow>
            <></>
          </ModalWindow>
        )
      }
    }
  }

  return (
    renderModalWindow()
  )
}
