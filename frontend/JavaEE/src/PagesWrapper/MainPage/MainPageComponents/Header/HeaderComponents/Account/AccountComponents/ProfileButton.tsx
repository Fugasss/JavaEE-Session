import { useNavigate } from "react-router-dom"
import { ERoutes } from "../../../../../../../api/ERoutes";

export default function ProfileButton() {
  const navigator = useNavigate();
  return (
    <button className="px-5 bg-passive p-2" onClick={()=>{navigator(ERoutes.PROFILE)}}>Профиль</button>
  )
}
