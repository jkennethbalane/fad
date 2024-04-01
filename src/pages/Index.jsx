import NavBar from '../components/ui/NavBar.jsx'
import Footer from '../components/ui/Footer.jsx'
import { BrowserRouter } from 'react-router-dom'
import Description from '../components/ui/Description.jsx'
import Testimonies from '../components/ui/Testimonies.jsx'
import EmblaCarousel from '../components/ui/EmblaCarousel.jsx'

export default function Index(){
    return(
    <>
        <NavBar />
        <div className='bg-black'>
        <EmblaCarousel />
        <Description />
        </div>
        <div className='bg-white'>
        <Testimonies/>
        </div>
        <Footer />
    </>
)}