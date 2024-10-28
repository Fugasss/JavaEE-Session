import Navigation from "../../../AsideNavigation/AsideNavigationComponents/Navigation";
import Account from "./HeaderComponents/Account/Account";
import Search from "./HeaderComponents/Search/Search";

export default function Header() {
  return (
    <header>
      <div className="flex items-center justify-between">
          <div className="w-5/12">
            <Navigation/>
          </div>
          <div className="w-4/12">
            <Search/>
          </div>
          <div className="w-2/12 ml-10">
            <Account/>
          </div>
      </div>
    </header>
  )
}
