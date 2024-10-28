import EModalContent from "./EModalContent"
import LoginWarning from "./ModalContents/LoginWarning"
import ModalWindow from "./ModalWindow"

export default function ModalWindowWrapper({type}:{type:EModalContent}) {

  const renderModalWindow = () =>{
    switch(type){
      case EModalContent.NONE:{
        return <></>
      }
      case EModalContent.LOGIN_WARNING:{
        return (
          <ModalWindow>
            <LoginWarning></LoginWarning>
          </ModalWindow>
        )
      }
    
    }
  }

  return (
    renderModalWindow()
  )
}
