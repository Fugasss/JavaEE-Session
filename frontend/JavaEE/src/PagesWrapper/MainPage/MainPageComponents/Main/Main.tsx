import { Route, Routes } from "react-router-dom";
import Shop from "./MainPages/Shop/Shop";
import { ERoutes } from "../../../../api/ERoutes";
import Profile from "./MainPages/Profile/Profile";
export default function Main() {
  return (
    <main className="flex-1">
      <div>
        <Routes>
          <Route path={ERoutes.DEFAULT} element={<Shop/>}/>
          <Route path={ERoutes.PROFILE} element={<Profile/>}/>
        </Routes>
      </div>
    </main>
  )
}
