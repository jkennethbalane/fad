import { BrowserRouter, Routes, Route } from "react-router-dom"
import Index from './pages/Index.jsx'
import About from "./pages/About.jsx"
import Faculty from "./pages/Faculty.jsx"

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route index element={<Index/>}/>
        <Route path='/fad' element={<Index/>}/>
        <Route path='/academics' element={<Faculty/>}/>
        <Route path= "/aboutus" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  )
}  

export default App
