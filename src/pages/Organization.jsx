import NavBar from '../components/ui/NavBar.jsx'
import Footer from '../components/ui/Footer.jsx'
import header from '../components/ui/assets/organization.jpg'
import IVC from '../components/ui/assets/IVC.png'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import facebook from '../components/ui/assets/Facebook.png'
import { NavLink } from 'react-router-dom'
import EventCard from '../components/ui/EventCard.jsx'

function Content(){
    const [isMore, setIsMore] = useState(false)
    return(<div>
        <div className='h-auto bg-black text-white py-14 xl:py-12'>
            <div className='font-roboto px-6 xl:px-8 flex flex-col font-[500] space-y-10 space-y-5 w-full'>
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-col space-y-3'>
                        <span className='text-lg'>Technological University of the Philippines – Institute of Visual Communication</span>
                        <span className='text-lg font-[400] font-ebgaramond leading-5'>The Organization is founded in 2020</span>
                    </div>
                    <img src={IVC} className='aspect-square h-20 max-h-20'></img>
                </div>
                {isMore &&
                    <>
                        <span className='text-lg font-[400] font-ebgaramond leading-5 w-full xl:w-1/2'>The Technological University of the Philippines – Institute of Visual Communication (TUP-IVC) is a non-collage-based organization at the Technological University of the Philippines-Manila. The organization is dedicated to merging design craftsmanship and articulate artistic expressions. The organization aims to generate creative strategic concepts and ideas to inspire fellow designers and artists to create works that are intended to promote creative, timely and meaningful messages that produce highly creative individuals.</span>
                        <NavLink to="https://www.facebook.com/ExpressYourheART2o17?mibextid=ZbWKwL"><img src={facebook} className='transition duration-300 transform hover:scale-105'></img></NavLink>                
                    </>
                }
                <Button className="text-white hover:text-black bg-learnmore-btn rounded hover:bg-white w-40 font-roboto xl:w-1/6 w-1/3" onClick={()=> setIsMore(!isMore)}>{isMore ? "See Less" : "Learn More"}</Button>
            </div>
        </div>
        <div className='bg-white'>
            <Events/>
            <div className='text-center flex flex-col space-y-0 py-6'>
                <span className="xl:text-3xl text-xs text-testimonialTitle">Want to connect with us?</span>
                <span className="xl:text-3xl text-md text-black">Visit our page for more.</span>
            </div>
        </div>
    </div>)
}

function Events(){
    return(
        <div>
            <div className='py-6 px-12 font-roboto text-white'>
                <div className='text-center flex flex-col space-y-3 text-black'>
                    <span className="xl:text-3xl text-xl text-testimonialTitle ">EVENTS</span>
                    <span className="xl:text-3xl text-xl font-[300]">Institute of Visual Communication</span>
                </div>
                <div className='flex xl:flex-row xl:space-y-0 space-y-6 py-6 justify-between flex-col'>
                
                    <EventCard title="Make BIG things out of small things" bgImg="bg-[url('/src/components/ui/assets/KST.jpg')]"/>
                    <EventCard title="CARE PROJECT AT TUP FOUNDATION DAY 2023" bgImg="bg-[url('/src/components/ui/assets/HALA.jpg')]"/>
                    <EventCard title="Trust the Process: Blind Contour With Music" bgImg="bg-[url('/src/components/ui/assets/GAWAD.jpg')]"/>
                    <EventCard title="A Beautiful Mess: Print Making – Decalcomania and String Art" bgImg="bg-[url('/src/components/ui/assets/GAWAD23.jpg')]"/>
                    <EventCard title="A Beautiful Mess: Print Making – Decalcomania and String Art" bgImg="bg-[url('/src/components/ui/assets/GAWAD23.jpg')]"/>

                </div>
            </div>
        </div>
    )
}

export default function Organization(){
    return(<div>
        <NavBar/>
        <div>
            <div className=''>
                <img src={header} className='object-cover w-full'></img>
            </div>
            <Content/>
        </div>
        <Footer/>
    </div>)
}