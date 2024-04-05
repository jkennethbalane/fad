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
    <BrowserRouter forceRefresh={true}>
      <Routes>
        <Route index element={<Index/>}/>
        <Route path='/fad' element={<Index/>}/>
        <Route path='/academics' element={<Faculty/>}/>
        <Route path='/RandE' element={<RandE />}/>
        <Route path='/exhibit' element={<RandE scrollTo='exhibitSection'/>}/>
        <Route path='/organization' element={<Organization />}/>
        <Route path='/admission' element={<Admission />}/>
        <Route path='/students' element={<Students/>}/>
        <Route path='/plates' element={<Students scrollTo='platesSection'/>}/>
        <Route path='/events' element={<Students scrollTo='eventsSection'/>}/>
        <Route path='/alumni' element={<Students scrollTo='alumniSection'/>}/>
        <Route path= '/aboutus' element={<About/>}/>
        <Route path= '/aboutus-mission' element={<About scrollTo='missionSection'/>}/>
        <Route path= '/aboutus-vision' element={<About scrollTo='visionSection'/>}/>
        <Route path= '/aboutus-goals' element={<About scrollTo='goalSection'/>}/>
        <Route path= '/aboutus-objectives' element={<About scrollTo='objectiveSection'/>}/>
      </Routes> 
    </BrowserRouter>
  )
}  

export default App
