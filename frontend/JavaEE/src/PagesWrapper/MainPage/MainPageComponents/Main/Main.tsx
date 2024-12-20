import { Route, Routes } from "react-router-dom";
import Shop from "./MainPages/Shop/Shop";
import { ERoutes } from "../../../../api/ERoutes";
import Profile from "./MainPages/Profile/Profile";
import RecoverPage from "./MainPages/Recover/RecoverPage";
import Admin from "./MainPages/Admin/Admin";
import PageNotFound from "./MainPages/PageNotFound/PageNotFound";
import ProductCard from "./MainPages/ProductCard/ProductCard";
export default function Main() {
  return (
    <main className="flex-1">
      <div>
        <Routes>
          <Route path={ERoutes.DEFAULT} element={<Shop/>}/>
          <Route path={ERoutes.PROFILE} element={<Profile/>}/>
          <Route path={ERoutes.RECOVER} element={<RecoverPage/>}/>
          <Route path={ERoutes.ADMIN} element={<Admin/>}/>
          <Route path={ERoutes.PRODUCT} element={<ProductCard/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </div>
    </main>
  )
}
