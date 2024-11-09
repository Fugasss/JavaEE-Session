import EModalContent from "../../../../../../../Modal/EModalContent";
import { useModal } from "../../../../../../../Hooks/contextHooks";

export default function LoginButton() {

  const setModal = useModal()

  return (
    <button className="px-5 bg-passive p-2" onClick={()=>{
      setModal(EModalContent.LOGIN);
    }}>Войти</button>
  )
}
