import { useNavigate } from "react-router-dom"
import { ERoutes } from "../../../../../../../api/ERoutes";

export default function ProfileButton() {
  const navigator = useNavigate();
  return (
    <button onClick={()=>{navigator(ERoutes.PROFILE)}}>
      <div className="rounded-full">
          <div className="w-12 h-12 rounded-full">
              <img src="https://avatars.mds.yandex.net/i?id=ea001baf70b9cf1acf25b608af204e9d_l-5488843-images-thumbs&n=13" className="rounded-full"></img>        
          </div>
      </div>
    </button>
  )
}
