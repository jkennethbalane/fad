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
                        <span className='text-lg font-[400] font-roboto leading-5'>The Organization is founded in 2020</span>
                    </div>
                    <img src={IVC} className='xl:h-40 h-20'></img>
                </div>
                {isMore &&
                    <>
                        <span className='text-lg font-[400] font-roboto leading-5 w-full xl:w-1/2'>The Technological University of the Philippines – Institute of Visual Communication (TUP-IVC) is a non-collage-based organization at the Technological University of the Philippines-Manila. The organization is dedicated to merging design craftsmanship and articulate artistic expressions. The organization aims to generate creative strategic concepts and ideas to inspire fellow designers and artists to create works that are intended to promote creative, timely and meaningful messages that produce highly creative individuals.</span>
                        <NavLink to="https://www.facebook.com/ExpressYourheART2o17?mibextid=ZbWKwL" className='w-auto'><img src={facebook} className='transition duration-300 transform hover:scale-105 w-auto'></img></NavLink>                
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
                <div className='flex 2xl:flex-row 2xl:space-y-0 space-y-9 py-6 justify-between flex-col'>
                    <EventCard title="SHEESH, THAT'S CRAZY!: Graphic Design as an instrument for the minority (Dec. 17, 2021)" bgImg="bg-[url('/src/components/ui/assets/sheesh.jpg')]">
                    Through the online webinar event, guest speakers, Mr. Karl Castro
                    and Mr. Ernest Joseph Garcia discussed the application of graphic design in the Filipino 
                    contemporary arts and spreading awareness about the minority through it. IVC aims to educate 
                    future designers about the impact of design on society and its role in addressing social issues. 
                     Let's extend a helping hand to those in need and deepen our knowledge of design arts as a global community.
                    </EventCard>
                    <EventCard title="PRIDE MONTH ART SHOWCASE" bgImg="bg-[url('/src/components/ui/assets/pride.png')]" fbLink="https://www.facebook.com/photo/?fbid=176799084790335&set=pcb.176803
                    721456538">
                    This online exhibit celebrated Pride Month and was open to all, and any
                    genre, including photography, digital art, digital manipulation, traditional art,
                    etc. This event aimed to show the colorful creativity of queer
                    artists as well as to reflect diverse perspectives on the LGBTQIA+ experiences.
                    </EventCard>
                    <EventCard title="TUP INDAYOG 2023: ANG SIMULA NG KABANATA" bgImg="bg-[url('/src/components/ui/assets/palette.jpg')]" fbLink="https://www.facebook.com/photo/?fbid=122116079528010186&set=a.122115
                    476672010186">
                    This event invited and gathered all the organizations to display their booths, showcase their organization’s name, and welcome the students who are interested in joining them. The TUP-IVC booth named ‘PINOY PALETTE Sari-sari Store’ also won 3 rd place Best in Booth Award.
                    </EventCard>
                    <EventCard title="2-Day Workshop Seminar at 122th TUP Foundation Day" bgImg="bg-[url('/src/components/ui/assets/vibe.png')]" fbLink="https://www.facebook.com/profile.php?id=61553920576848">
                    The events aimed to provide TUP-IVC members and Fine Arts students with extensive knowledge, insights, and diverse range of subjects relevant to visual and digital design, branding and film.
                    </EventCard>
                    <EventCard title="LUNETA ART FAIR (FEB. 3-4, 2024)" bgImg="bg-[url('/src/components/ui/assets/LAF.jpg')]" fbLink="https://www.facebook.com/TUPiVisCom/posts/397994486079417">
                    The TUP-IVC participated in this year’s Luneta Art Fair held at Noli Me
                    Tangere Garden, Rizal Park. Our aim was to showcase and sell the amazing
                    Artwork pieces made by our faculty, IVC members, and TUP alumni.
                    </EventCard>
                </div>
            </div>
        </div>
    )
}

export default function Organization(){
    window.scrollTo({top: 0,behavior:'smooth'})
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