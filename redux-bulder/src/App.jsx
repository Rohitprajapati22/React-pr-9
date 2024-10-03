import { BrowserRouter, Route, Routes } from "react-router-dom"
import Add from "./pages/Add"
import View from "./pages/View"
import Hedaer from "./Componet/Hedaer"

function App() {


  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hedaer />} />
        <Route path="/add" element={<Add />} />
        <Route path="/view" element={<View />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
