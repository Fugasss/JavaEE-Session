import Footer from "./MainPageComponents/Footer/Footer";
import Main from "./MainPageComponents/Main/Main";
import Header from "./MainPageComponents/Header/Header";

export default function MainPage() {
  return (
    <div className="flex flex-col flex-1 ml-6">
        <Header/>
        <Main/>
        <Footer/>
    </div>
  )
}
