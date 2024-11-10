import Bukket from "./AccountComponents/Bukket";
import LoginButton from "./AccountComponents/LoginButton";
import ProfileButton from "./AccountComponents/ProfileButton";

export default function Account() {
  return (
    <div className="flex items-center gap-4 p-3">
      <LoginButton/>
      <Bukket/>
      <ProfileButton/>
    </div>
  )
}
