import LoginButton from "./AccountComponents/LoginButton";
import Profile from "./AccountComponents/Profile";

export default function Account() {
  return (
    <div className="flex items-center gap-4 p-3">
      <LoginButton/>
      <Profile/>
    </div>
  )
}
