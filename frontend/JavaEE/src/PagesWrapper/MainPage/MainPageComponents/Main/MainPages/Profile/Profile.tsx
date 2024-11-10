
import Bukket from "./ProfileComponents/Bukket";
import ProfileBuilds from "./ProfileComponents/ProfileBuilds";
import ProfileSettings from "./ProfileComponents/ProfileSettings/ProfileSettings";

export default function Profile() {
  return (
    <div className="flex">
      <div className="flex flex-col w-1/4">
        <ProfileSettings/>
        <div className="mt-4">
        <ProfileBuilds/>
        </div>
      </div>
      <Bukket/>
    </div>
  )
}
