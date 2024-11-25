
import Bucket from "./ProfileComponents/Bucket/Bucket";
import ProfileBuilds from "./ProfileComponents/ProfileBuilds";
import ProfileSettings from "./ProfileComponents/ProfileSettings/ProfileSettings";

export default function Profile() {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col w-1/4">
        <ProfileSettings/>
        <div className="mt-4">
        <ProfileBuilds/>
        </div>
      </div>
      <div className="mr-8 w-1/2">
        <Bucket/>
      </div>
    </div>
  )
}
