import NavBar from '../components/ui/NavBar.jsx'
import Footer from '../components/ui/Footer.jsx'
import { BrowserRouter } from 'react-router-dom'
import Description from '../components/ui/Description.jsx'
import Testimonies from '../components/ui/Testimonies.jsx'
import EmblaCarousel from '../components/ui/EmblaCarousel.jsx'

export default function Index(){
    window.scrollTo({top: 0,behavior:'smooth'})
    return(
    <>
        <NavBar />
        <div className='bg-black w-full'>
        <EmblaCarousel />
        <Description />
        </div>
        <div className='bg-white w-full'>
        <Testimonies/>
        </div>
        <Footer />
    </>
)}