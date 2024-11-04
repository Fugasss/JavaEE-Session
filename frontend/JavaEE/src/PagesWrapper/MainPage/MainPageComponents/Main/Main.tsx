import { Route, Routes } from "react-router-dom";
import Shop from "./MainPages/Shop/Shop";
export default function Main() {
  return (
    <main className="flex-1">
      <div>
        <Routes>
          <Route path="/" element={<Shop/>}/>
        </Routes>
      </div>
    </main>
  )
}
