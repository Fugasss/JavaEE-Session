import { useLoginStatus } from "../../../../../../Hooks/contextHooks";
import LoginButton from "./AccountComponents/LoginButton";
import ProfileButton from "./AccountComponents/ProfileButton";

export default function Account() {

  const {isLogined , setIsLogined } = useLoginStatus()

  return (
    <div className="flex items-center gap-4 p-3">
      {isLogined ? <ProfileButton/>:<LoginButton/>}
    </div>
  )
}
