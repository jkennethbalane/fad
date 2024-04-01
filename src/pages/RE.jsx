
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
import { useEffect, useState } from 'react';

function Exhibition(){
    return(
    <div>
        <div className="bg-black p-6"  id='exhibitSection'>
            <div className='text-center flex flex-col space-y-3 text-white'>
                <span className="xl:text-3xl text-xl">ONLINE EXHIBITION</span>
                <span className="xl:text-3xl text-xl text-[#FFEECE]">FINE ARTS GALLERY</span>
            </div>
            <div className='grid xl:grid-cols-2 grid-cols-1 gap-1 py-6 px-8'>
                <div className="flex flex-col">
                    <div className='flex flex-row space-x-1 w-full'>
                        <div className='flex flex-col space-y-1 w-1/2 h-full'>
                            <GalleryCard imgSrc={Gal1} title="A Message For The Bystanders" material="Acrylic" canvas="24' x 36'" artist="Beej"/>
                            <GalleryCard imgSrc={Gal3} title="Peanut Butter" material="Acrylic on Canvas" canvas="20' x 28'" artist="Rai"/>
                        </div>
                        <div className='flex flex-col space-y-1 w-1/2'>
                            <GalleryCard imgSrc={Gal2} title="Whim-Sea-Cal Rift" material="Mixed Media on Canvas" canvas="12' x 12'" artist="Rayka Martin"/>
                            <GalleryCard imgSrc={Gal4} title="Portrait" material="Acrylic on Canvas" canvas="8' x 12'" artist="Elisha Kentzie"/>
                        </div>
                    </div>
                    <GalleryCard imgSrc={Gal5} title="Femme Fatale" material="Mixed Media" canvas="18' x 24'" artist="Alexi"/>
                </div>
                <div className="flex flex-col">
                    <div className='flex flex-row space-x-1 w-full'>
                        <div className='flex flex-col space-y-1 w-1/2 h-full'>
                            <GalleryCard imgSrc={Gal6} title="Impermanence I" material="Acrylic on Canvas" canvas="12' x 12'" artist="Joseph Lawrence Domasian"/>
                            <GalleryCard imgSrc={Gal7} title="Vexexd" material="Oil Paint" canvas="20' x 23'" artist="Cynkit"/>
                        </div>
                        <div className='flex flex-col space-y-1 w-1/2'>
                            <GalleryCard imgSrc={Gal8} title="forward" material="Mixed Media on Paper" canvas="10' x 8'" artist="Kimkim"/>
                            <GalleryCard imgSrc={Gal9} title="Liwanag sa Oras ng Kapaguran" material="Acrylic" canvas="10' x 14'" artist="Litol M."/>
                        </div>
                    </div>
                    <GalleryCard imgSrc={Gal10} title="Psychedelic Pop" material="Mixed Media" canvas="18' x 24'" artist="Alexi"/>
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
            <div className='py-12 px-12 font-roboto text-white'>
                <div className='text-center flex flex-col space-y-3 text-black'>
                    <span className="xl:text-3xl text-xl text-testimonialTitle ">EVENTS</span>
                    <span className="xl:text-3xl text-xl font-[300]">EXTENSION PROJECT</span>
                </div>
                <div className='flex xl:flex-row xl:space-y-0 space-y-6 py-6 justify-between flex-col'>
                
                    <EventCard title="Make BIG things out of small things" bgImg="bg-[url('/src/components/ui/assets/big.jpg')]" description="The CARE Project has recently collaborated with the Municipal Government of Macalelon
                        Quezon and JA1 Macalelon Quezon. We are grateful to Ms. Shine Tolentino Rios for inviting
                        us to participate in the Women's Month celebration through the Gender and Development
                        program of MGMQ. Additionally, we would like to thank Rev. Ressie Lancap and Ms. Aicah
                        Tolentino Cantos for joining our CARE team in Macalelon Quezon."
                        fbLink="https://www.facebook.com/share/p/L78o4PUcEa4Q3BCD/?mibextid=oFDknk"
                        />
                    <EventCard title="CARE PROJECT AT TUP FOUNDATION DAY 2023" bgImg="bg-[url('/src/components/ui/assets/careproject.jpg')]" description="CARE BENTABLES, the Exclusive Merch Collection from the TUP Fine Art Students held
                        at CAFA 101 from December 13-16. Includes PUTO BOOTH,and TARA SHOT during the
                        TUP Foundation Day 2023"
                        fbLink="https://www.facebook.com/share/p/8ZA8qNMfJs6vxN6x/?mibextid=oFDknk"
                        />
                    <EventCard title="Trust the Process: Blind Contour With Music" bgImg="bg-[url('/src/components/ui/assets/trust.jpg')]" description="On May 12, 2023, the 'Trust the Process' program was held from 9:00 a.m. to 12:00 p.m at
                        the Juan Luna Elementary School. The program aimed to motivate participants to trust their
                        journey and embrace the growth process. It featured speeches from Mr. Fernando Magalang,
                        Dr. Teofilo Ombaba, and Mr. Emmanuel Borjal."
                        fbLink="https://www.facebook.com/share/p/sY2E7PLXH7WQfezp/?mibextid=oFDknk"
                        />
                    <EventCard title="A Beautiful Mess: Print Making – Decalcomania and String Art" bgImg="bg-[url('/src/components/ui/assets/mess.png')]" description="The 'A Beautiful Mess' program celebrated Mother's Day and promoted embracing life's
                        messiness. The event featured art activities, presentations, and a keynote speech by Ms.
                        Marjorie Gomez, who addressed finding beauty in life's challenges."
                        fbLink="https://www.facebook.com/share/p/JqU7d58jsAzzg9Tu/?mibextid=oFDknk"
                        />
                </div>
            </div>
        </div>
    )
}


export default function RandE(ref){
    const [isMore, setIsMore] = useState(false)
    const handleClickScroll = () => {
        if(ref.scrollTo != undefined){
            const element = document.getElementById(ref.scrollTo)
            element.scrollIntoView({behavior:'smooth'});
        }
      };
    useEffect(() => {
        handleClickScroll();
    }, [ref.scrollTo]);

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
                {isMore && <Events/> }
                <Exhibition/>
            </div>
            <Footer />
        </div>
    )
}