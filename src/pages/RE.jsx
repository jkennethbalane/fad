import { useState } from "react";
import Footer from "../components/ui/Footer";
import NavBar from "../components/ui/NavBar";
import header from '../components/ui/assets/R&E.png'
import { Button } from "@/components/ui/button"
import GalleryCard from '../components/ui/GalleryCard.jsx'
import Gal1 from '../components/ui/assets/Exhib1.png'
import Gal2 from '../components/ui/assets/Exhib2.png'
import Gal3 from '../components/ui/assets/Exhib3.png'
import Gal4 from '../components/ui/assets/Exhib4.png'
import Gal5 from '../components/ui/assets/Exhib5.png'
import Gal6 from '../components/ui/assets/Exhib6.png'
import Gal7 from '../components/ui/assets/Exhib7.png'
import Gal8 from '../components/ui/assets/Exhib8.png'
import Gal9 from '../components/ui/assets/Exhib9.png'
import Gal10 from '../components/ui/assets/Exhib10.png'
import EventCard from '../components/ui/EventCard.jsx'
import { NavLink } from "react-router-dom";

function Exhibition(){
    return(
    <div>
        <div className="bg-black p-6">
            <div className='text-center flex flex-col space-y-3 text-white'>
                <span className="xl:text-3xl text-xl">ONLINE EXHIBITION</span>
                <span className="xl:text-3xl text-xl text-[#FFEECE]">FINE ARTS GALLERY</span>
            </div>
            <div className='grid xl:grid-cols-2 grid-cols-1 gap-1 py-6 px-8'>
                <div className="flex flex-col">
                    <div className='flex flex-row space-x-1 w-full'>
                        <div className='flex flex-col space-y-1 w-1/2 h-full'>
                            <GalleryCard imgSrc={Gal1}/>
                            <GalleryCard imgSrc={Gal3}/>
                        </div>
                        <div className='flex flex-col space-y-1 w-1/2'>
                            <GalleryCard imgSrc={Gal2}/>
                            <GalleryCard imgSrc={Gal4}/>
                        </div>
                    </div>
                    <GalleryCard imgSrc={Gal5}/>
                </div>
                <div className="flex flex-col">
                    <div className='flex flex-row space-x-1 w-full'>
                        <div className='flex flex-col space-y-1 w-1/2 h-full'>
                            <GalleryCard imgSrc={Gal6}/>
                            <GalleryCard imgSrc={Gal7}/>
                        </div>
                        <div className='flex flex-col space-y-1 w-1/2'>
                            <GalleryCard imgSrc={Gal8}/>
                            <GalleryCard imgSrc={Gal9}/>
                        </div>
                    </div>
                    <GalleryCard imgSrc={Gal10}/>
                </div>
            </div>
            <div className="flex flex-row justify-center">
                <Button className="text-white hover:text-black bg-learnmore-btn rounded hover:bg-white w-40 font-roboto xl:w-1/6 w-1/3">Learn More</Button>
            </div>
        </div>
        <div className="bg-white py-12 px-8">
            <div className='text-center flex flex-col space-y-3 text-black font-[500]'>
                <span className="xl:text-3xl text-xl">Research</span>
                <span className="xl:text-3xl text-xl">Work In Progress</span>
            </div>
        </div>
        <div className="bg-black py-12 px-8">
            <div className='flex flex-col space-y-3 text-white font-[500] font-roboto'>
                <span className="xl:text-3xl text-xl">URDS</span>
                <span className="xl:text-3xl text-xl font-ebgaramond font-[400]">University Research and Development Services</span>
                <NavLink to="https://tup.edu.ph/?"><Button className="text-white hover:text-black bg-learnmore-btn rounded hover:bg-white w-40 font-roboto xl:w-1/6 w-1/3">Learn More</Button></NavLink>
            </div>
        </div>
        <div className="bg-white py-12 px-8">
            <div className=' text-center flex flex-col space-y-3 text-black font-[500] font-roboto justify-between'>
                <div className="flex flex-col">
                    <span className="xl:text-3xl text-xl">Scholarly Journal</span>
                    <span className="xl:text-3xl text-xl">Work in Progress</span>
                </div>
                <div className='text-center flex flex-col space-y-0 py-6'>
                    <span className="xl:text-3xl text-xs text-testimonialTitle">Want to connect with us?</span>
                    <span className="xl:text-3xl text-md text-black">Visit our page for more.</span>
                </div>
            </div>
        </div>
    </div>
    )
}

function Events(){
    return(
        <div>
            <div className='py-6 px-12 font-roboto text-white'>
                <div className='text-center flex flex-col space-y-3 text-black'>
                    <span className="xl:text-3xl text-xl text-testimonialTitle ">EVENTS</span>
                    <span className="xl:text-3xl text-xl font-[300]">EXTENSION PROJECT</span>
                </div>
                <div className='flex xl:flex-row xl:space-y-0 space-y-6 py-6 justify-between flex-col'>
                
                    <EventCard title="Make BIG things out of small things" bgImg="bg-[url('/src/components/ui/assets/big.jpg')]"/>
                    <EventCard title="CARE PROJECT AT TUP FOUNDATION DAY 2023" bgImg="bg-[url('/src/components/ui/assets/careproject.jpg')]"/>
                    <EventCard title="Trust the Process: Blind Contour With Music" bgImg="bg-[url('/src/components/ui/assets/trust.jpg')]"/>
                    <EventCard title="A Beautiful Mess: Print Making – Decalcomania and String Art" bgImg="bg-[url('/src/components/ui/assets/mess.png')]"/>
                </div>
            </div>
        </div>
    )
}


export default function RandE(){
    const [isMore, setIsMore] = useState(false)

    return(
        <div>
            <NavBar />
            <div>
                <div className=''>
                    <img src={header} className='object-cover w-full'></img>
                </div>
                <div className={`font-roboto px-8 xl:px-12 py-12 flex flex-col font-[500] space-y-10 ${isMore ? 'bg-black text-white' : 'bg-white text-black'}`}>
                    <div className='flex flex-col space-y-5 w-full'>
                        <span className='text-3xl'>CARE Project</span>
                        <span className='text-lg font-[400] font-ebgaramond leading-5 w-full xl:w-1/4'>CARE Project is a collaboration of Art and Psychology to address the increasing mental health problem in the Philippines. This is a partnership between Technological University of the Philippines (TUP) and AMARA Counselling and Training.</span>
                        <Button className="text-white hover:text-black bg-learnmore-btn rounded hover:bg-white w-40 font-roboto xl:w-1/6 w-1/3" onClick={()=> setIsMore(!isMore)}>{isMore ? "See Less" : "Learn More"}</Button>
                    </div>
                </div>
                {isMore ? <Events/> : <Exhibition/>  }
            </div>
            <Footer />
        </div>
    )
}