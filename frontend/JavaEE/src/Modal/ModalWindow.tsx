import { useModal } from "../Hooks/contextHooks"
import EModalContent from "./EModalContent"

export default function ModalWindow({children}:{children:React.ReactNode}){
  const setModal = useModal()

  const closeModal = ()=>{
    setModal(EModalContent.NONE)
  }

    return (
        <div className="fixed top-0 left-0 w-screen h-screen bg-modal_shadow flex flex-col items-center justify-center"
              onClick={closeModal}>
          <div className="py-20 px-32 rounded-md bg-WHITE"
              onClick={(event)=>{event.stopPropagation()}}>
            {children}
          </div>
        </div>
      )
}
