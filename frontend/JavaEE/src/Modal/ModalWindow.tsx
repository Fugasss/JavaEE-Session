import { useModal } from "../Hooks/contextHooks"
import EModalContent from "./EModalContent"

export default function ModalWindow({children , unclosed}:{children:React.ReactNode , unclosed?:boolean}){
  const setModal = useModal()

  const closeModal = ()=>{
    setModal({type : EModalContent.NONE , data:""})
  }
    return (
        <div className="fixed top-0 left-0 w-screen h-screen bg-modal_shadow flex flex-col items-center justify-center"
              onClick={unclosed ? ()=>{} : closeModal}>
          <div className="py-20 px-32 px- rounded-md bg-WHITE w-1/3"
              onClick={(event)=>{event.stopPropagation()}}>
              {children}
          </div>
        </div>
      )
}
