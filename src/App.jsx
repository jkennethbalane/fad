import { BrowserRouter, Routes, Route } from "react-router-dom"
import Index from './pages/Index.jsx'
import About from "./pages/About.jsx"
import Faculty from "./pages/Faculty.jsx"
import Students from "./pages/Students.jsx"
import RandE from "./pages/RE.jsx"
import Organization from "./pages/Organization.jsx"
import Admission from "./pages/Admission.jsx"

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route index element={<Index/>}/>
        <Route path='/fad' element={<Index/>}/>
        <Route path='/academics' element={<Faculty/>}/>
        <Route path='/RandE' element={<RandE />}/>
        <Route path='/organization' element={<Organization />}/>
        <Route path='/admission' element={<Admission />}/>
        <Route path='/students' element={<Students/>}/>
        <Route path= "/aboutus" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  )
}  

export default App
