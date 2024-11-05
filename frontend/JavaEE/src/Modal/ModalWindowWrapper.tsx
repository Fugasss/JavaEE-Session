import EModalContent from "./EModalContent"
import Login from "./ModalContents/Login/Login"
import RegistrationForm from "./ModalContents/Registration/RegistrationForm"
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
    }
  }

  return (
    renderModalWindow()
  )
}
