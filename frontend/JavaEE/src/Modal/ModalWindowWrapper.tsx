import EModalContent from "./EModalContent"
import Login from "./ModalContents/Login/Login"
import LoginSuccess from "./ModalContents/Login/LoginSuccess"
import RecoverConfirm from "./ModalContents/RecoverPassword/RecoverConfirm"
import RecoverPassword from "./ModalContents/RecoverPassword/RecoverPassword"
import Registration from "./ModalContents/Registration/Registration"
import RegistrationSuccess from "./ModalContents/Registration/RegistrationSuccess"
import ModalWindow from "./ModalWindow"

export default function ModalWindowWrapper({type , data}:{type:EModalContent , data?:string}) {

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
            <RecoverPassword/>
          </ModalWindow>
        )
      }
      case EModalContent.RECOVER_CONFIRM:{
        return(
          <ModalWindow unclosed>
            <RecoverConfirm/>
          </ModalWindow>
        )
      }
      case EModalContent.OPEN_IMAGE:{
        return(
          <ModalWindow>
            <img className="w-full h-full" src={data} alt="" />
          </ModalWindow>
        )
      }
    }
  }

  return (
    renderModalWindow()
  )
}
