import NavBar from '../components/ui/NavBar.jsx'
import Footer from '../components/ui/Footer.jsx'
import header from '../components/ui/assets/admission.png'
import { Button } from "@/components/ui/button"
import { NavLink } from 'react-router-dom'

function Content(){
    return(<div>
        <div className='h-auto bg-black text-white py-12 xl:py-12'>
            <div className='font-roboto px-6 xl:px-8 flex flex-col font-[500] space-y-10 space-y-5 w-full'>
                <div className='flex flex-col justify-between w-1/2 space-y-12'>
                    <div className='flex flex-col space-y-3'>
                        <span className='text-3xl'>Enrollment Application</span>
                        <NavLink to="http://ers.tup.edu.ph/aims/applicants"><Button className="text-white hover:text-black bg-learnmore-btn rounded hover:bg-white w-40 font-roboto xl:w-1/6 w-1/2" >Learn More</Button></NavLink>
                    </div>
                    <div className='flex flex-col space-y-3'>
                        <span className='text-3xl'>ERS Portal</span>
                        <NavLink to="http://ers.tup.edu.ph/aims/students"><Button className="text-white hover:text-black bg-learnmore-btn rounded hover:bg-white w-40 font-roboto xl:w-1/6 w-1/2" >Learn More</Button></NavLink>
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-white'>
            <div className='text-center flex flex-col space-y-0 py-12'>
                <span className="xl:text-3xl text-xs text-testimonialTitle">Want to connect with us?</span>
                <span className="xl:text-3xl text-md text-black">Visit our page for more.</span>
            </div>
        </div>
    </div>)
}

export default function Admission(){
    return(
        <div>
            <NavBar/>
            <div>
                <div className=''>
                    <img src={header} className='object-cover w-full'></img>
                    <Content/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}