import Account from "../MainPage/MainPageComponents/Header/HeaderComponents/Account/Account";
import FastCourses from "./AsideNavigationComponents/FastCourses";
import Navigation from "./AsideNavigationComponents/Navigation";
import Title from "./AsideNavigationComponents/Title";

export default function AsideNavigation() {
  return (
    <nav className="flex flex-col px-4 bg-passive items-center">
        <Title/>
        <Account></Account>
        <FastCourses/>
        <div className="mt-4 w-full">
          <Navigation/>
        </div>
    </nav>
  )
}
