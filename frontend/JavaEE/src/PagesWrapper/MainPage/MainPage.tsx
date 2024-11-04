import Footer from "./MainPageComponents/Footer/Footer";
import Main from "./MainPageComponents/Main/Main";
import Header from "./MainPageComponents/Header/Header";

export default function MainPage() {
  return (
    <div className="flex flex-col flex-1">
      <div className="ml-6 mb-10">
        <Header/>
        <Main/>
        </div>
        <Footer/>
    </div>
  )
}
