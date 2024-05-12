import { BrowserRouter, Routes, Route } from "react-router-dom"
import Index from './pages/Index.jsx'
import About from "./pages/About.jsx"
import Faculty from "./pages/Faculty.jsx"
import Students from "./pages/Students.jsx"
import RandE from "./pages/RE.jsx"
import Organization from "./pages/Organization.jsx"
import Admission from "./pages/Admission.jsx"
import Credits from "./pages/Credits.jsx"
import FAQ from "./pages/FAQ.jsx"

function App() {
  return(
    <BrowserRouter forceRefresh={true}>
      <Routes>
        <Route index element={<Index/>}/>
        <Route path='/fad' element={<Index/>}/>

        <Route path='/fad/academics' element={<Faculty/>}/>
        <Route path='/fad/RandE' element={<RandE/>}/>
        <Route path='/fad/RE-extension' element={<RandE scrollTo='extensionSection'/>}/>
        <Route path='/fad/RE-research' element={<RandE scrollTo='researchSection'/>}/>
        <Route path='/fad/RE-urds' element={<RandE scrollTo='urdsSection'/>}/>
        <Route path='/fad/RE-journal' element={<RandE scrollTo='journalSection'/>}/>
        <Route path='/fad/exhibit' element={<RandE scrollTo='exhibitSection'/>}/>

        <Route path='/fad/organization' element={<Organization />}/>
        <Route path='/fad/admission' element={<Admission />}/>

        <Route path='/fad/students' element={<Students/>}/>
        <Route path='/fad/plates' element={<Students scrollTo='platesSection'/>}/>
        <Route path='/fad/events' element={<Students scrollTo='eventsSection'/>}/>
        <Route path='/fad/alumni' element={<Students scrollTo='alumniSection'/>}/>

        <Route path='/fad/aboutus' element={<About/>}/>
        <Route path='/fad/aboutus-mission' element={<About scrollTo='missionSection'/>}/>
        <Route path='/fad/aboutus-vision' element={<About scrollTo='visionSection'/>}/>
        <Route path='/fad/aboutus-goals' element={<About scrollTo='goalSection'/>}/>
        <Route path='/fad/aboutus-objectives' element={<About scrollTo='objectiveSection'/>}/>

        <Route path='/fad/FAQ' element={<FAQ/>}/>
        <Route path='/fad/credits' element={<Credits/>}/>
      </Routes> 
    </BrowserRouter>
  )
}  

export default App
