
import Footer from "../components/ui/Footer";
import NavBar from "../components/ui/NavBar";
import header from '/assets/R&E.jpg'
import { Button } from "@/components/ui/button"
import GalleryCard from '../components/ui/GalleryCard.jsx'
import Gal1 from '/assets/Exhib1.png'
import Gal2 from '/assets/Exhib2.png'
import Gal3 from '/assets/Exhib3.png'
import Gal4 from '/assets/Exhib4.png'
import Gal5 from '/assets/Exhib5.png'
import Gal6 from '/assets/Exhib6.png'
import Gal7 from '/assets/Exhib7.png'
import Gal8 from '/assets/Exhib8.png'
import Gal9 from '/assets/Exhib9.png'
import Gal10 from '/assets/Exhib10.png'
import sGal1 from '/assets/sExhib1.jpg'
import sGal2 from '/assets/sExhib2.jpg'
import sGal3 from '/assets/sExhib3.jpg'
import sGal4 from '/assets/sExhib4.jpg'
import sGal5 from '/assets/sExhib5.jpeg'
import sGal6 from '/assets/sExhib6.jpg'
import sGal7 from '/assets/sExhib7.jpg'
import sGal8 from '/assets/sExhib8.jpg'
import sGal9 from '/assets/sExhib9.jpg'
import sGal10 from '/assets/sExhib10.jpg'
import EventCard from '../components/ui/EventCard.jsx'
import { NavLink } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios'

function Exhibition(){
    return(
    <div>
        <div className="bg-black p-6" id='exhibitSection'>
            <div className='text-center flex flex-col space-y-3 text-white'>
                <span className="xl:text-3xl text-xl">ONLINE EXHIBITION</span>
                <span className="xl:text-3xl text-xl text-[#FFEECE]">FINE ARTS GALLERY</span>
            </div>
            <div className='grid xl:grid-cols-2 grid-cols-1 gap-2 py-6 px-8'>
                <div className="grid grid-rows-3 space-y-2 overflow-hidden">
                    <div className='grid grid-cols-2 space-x-2 w-full overflow-hidden row-span-2'>
                        <div className='grid grid-rows-3 space-y-2 overflow-hidden'>
                            <GalleryCard imgSrc={Gal1} simgSrc={sGal1} title="A Message For The Bystanders" material="Acrylic" canvas="24' x 36'" artist="Beej" span='2'/>
                            <GalleryCard imgSrc={Gal3} simgSrc={sGal3} title="Peanut Butter" material="Acrylic on Canvas" canvas="20' x 28'" artist="Rai"/>
                        </div>
                        <div className='grid grid-rows-3 space-y-2 overflow-hidden'>
                            <GalleryCard imgSrc={Gal2} simgSrc={sGal2} title="Whim-Sea-Cal Rift" material="Mixed Media on Canvas" canvas="12' x 12'" artist="Rayka Martin"/>
                            <GalleryCard imgSrc={Gal4} simgSrc={sGal4} title="Portrait" material="Acrylic on Canvas" canvas="8' x 12'" artist="Elisha Kentzie" span='2'/>
                        </div>
                    </div>
                    <GalleryCard imgSrc={Gal5} simgSrc={sGal5} title="Femme Fatale" material="Mixed Media" canvas="18' x 24'" artist="Alexi"/>
                </div>
                <div className="grid grid-rows-3 space-y-2 overflow-hidden">
                    <div className='grid grid-cols-2 space-x-2 w-full overflow-hidden row-span-2'>
                        <div className='grid grid-rows-3 space-y-2 overflow-hidden'>
                            <GalleryCard imgSrc={Gal6} simgSrc={sGal6} title="Impermanence I" material="Acrylic on Canvas" canvas="12' x 12'" artist="Joseph Lawrence Domasian" span='2'/>
                            <GalleryCard imgSrc={Gal7} simgSrc={sGal7} title="Vexexd" material="Oil Paint" canvas="20' x 23'" artist="Cynkit"/>
                        </div>
                        <div className='grid grid-rows-3 space-y-2 overflow-hidden'>
                            <GalleryCard imgSrc={Gal8} simgSrc={sGal8} title="forward" material="Mixed Media on Paper" canvas="10' x 8'" artist="Kimkim"/>
                            <GalleryCard imgSrc={Gal9} simgSrc={sGal9} title="Liwanag sa Oras ng Kapaguran" material="Acrylic" canvas="10' x 14'" artist="Litol M." span='2'/>
                        </div>
                    </div>
                    <GalleryCard imgSrc={Gal10} simgSrc={sGal10} title="Psychedelic Pop" material="Mixed Media" canvas="18' x 24'" artist="Alexi"/>
                </div>
            </div>
            <div className="flex flex-row justify-center">
                <Button className="text-white hover:text-black bg-learnmore-btn rounded hover:bg-white w-40 font-roboto xl:w-1/6 w-1/3">Learn More</Button>
            </div>
        </div>
        <div className="bg-white py-12 px-8" id='researchSection'>
            <div className='text-center flex flex-col space-y-3 text-black font-[500]'>
                <span className="xl:text-3xl text-xl">Research</span>
                <span className="xl:text-3xl text-xl">Work In Progress</span>
            </div>
        </div>
        <div className="bg-black py-12 px-8" id='urdsSection'>
            <div className='flex flex-col space-y-3 text-white font-[500] font-roboto'>
                <span className="xl:text-3xl text-xl">URDS</span>
                <span className="xl:text-3xl text-xl font-roboto font-[400]">University Research and Development Services</span>
                <NavLink to="https://tup.edu.ph/?" className='xl:w-1/6 w-1/3'><Button className="text-white hover:text-black bg-learnmore-btn rounded hover:bg-white w-40 font-roboto w-full">Learn More</Button></NavLink>
            </div>
        </div>
        <div className="bg-white py-12 px-8">
            <div className=' text-center flex flex-col space-y-3 text-black font-[500] font-roboto justify-between' id='journalSection'>
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

function Events(ref){
    const [events, setEvents] = useState([]); // Initialize state to an empty array
    useEffect(() => {
        // Define an async function to fetch data
        const fetchEvents = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/events?filters[Page][$eq]=CARE&populate=*`,{
                headers: {
                    'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`
                    }
            });
            const data = response.data.data;
            // Check if data is an array and set state
            if (Array.isArray(data)) {
                const mappedEvents = data.map(item => {
                const { id, attributes } = item;
                const { Title, Description, FacebookURL, Picture} = attributes;
                const imageUrl = Picture.data.attributes.url;
                return {
                    id,
                    title: Title,
                    description: Description,
                    facebookURL: FacebookURL,
                    picture : "http://localhost:1337" + imageUrl,
                };
                });
                setEvents(mappedEvents);
            } else {
            console.error('Response data is not an array');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };

        fetchEvents(); // Call the fetch function
    }, []); // Empty dependency array to run only on mount
    return(
        <div id='extensionSection' className={`${ref.hidden ? 'visible' : 'hidden'}`}>
            <div className='py-12 px-12 font-roboto text-white'>
                <div className='text-center flex flex-col space-y-3 text-black'>
                    <span className="xl:text-3xl text-xl text-testimonialTitle ">EVENTS</span>
                    <span className="xl:text-3xl text-xl font-[300]">EXTENSION PROJECT</span>
                </div>
                <div className='grid grid-cols-1 xl:grid-cols-4 gap-2'>
                    {
                        events.map(event => (
                            <EventCard key={event.id} title={event.title} bgImg={`url('${event.picture}')`} fbLink={event.facebookURL}>
                                {event.description}
                            </EventCard>
                        ))
                    }
                    {/* <EventCard title="Make BIG things out of small things" bgImg="bg-[url('/assets/big.jpg')]" description="The CARE Project has recently collaborated with the Municipal Government of Macalelon
                        Quezon and JA1 Macalelon Quezon. We are grateful to Ms. Shine Tolentino Rios for inviting
                        us to participate in the Women's Month celebration through the Gender and Development
                        program of MGMQ. Additionally, we would like to thank Rev. Ressie Lancap and Ms. Aicah
                        Tolentino Cantos for joining our CARE team in Macalelon Quezon."
                        fbLink="https://www.facebook.com/share/p/L78o4PUcEa4Q3BCD/?mibextid=oFDknk"
                        />
                    <EventCard title="CARE PROJECT AT TUP FOUNDATION DAY 2023" bgImg="bg-[url('/assets/careproject.jpg')]" description="CARE BENTABLES, the Exclusive Merch Collection from the TUP Fine Art Students held
                        at CAFA 101 from December 13-16. Includes PUTO BOOTH,and TARA SHOT during the
                        TUP Foundation Day 2023"
                        fbLink="https://www.facebook.com/share/p/8ZA8qNMfJs6vxN6x/?mibextid=oFDknk"
                        />
                    <EventCard title="Trust the Process: Blind Contour With Music" bgImg="bg-[url('/assets/trust.jpg')]" description="On May 12, 2023, the 'Trust the Process' program was held from 9:00 a.m. to 12:00 p.m at
                        the Juan Luna Elementary School. The program aimed to motivate participants to trust their
                        journey and embrace the growth process. It featured speeches from Mr. Fernando Magalang,
                        Dr. Teofilo Ombaba, and Mr. Emmanuel Borjal."
                        fbLink="https://www.facebook.com/share/p/sY2E7PLXH7WQfezp/?mibextid=oFDknk"
                        />
                    <EventCard title="A Beautiful Mess: Print Making – Decalcomania and String Art" bgImg="bg-[url('/assets/mess.png')]" description="The 'A Beautiful Mess' program celebrated Mother's Day and promoted embracing life's
                        messiness. The event featured art activities, presentations, and a keynote speech by Ms.
                        Marjorie Gomez, who addressed finding beauty in life's challenges."
                        fbLink="https://www.facebook.com/share/p/JqU7d58jsAzzg9Tu/?mibextid=oFDknk"
                        /> */}
                </div>
            </div>
        </div>
    )
}


export default function RandE(ref){
    const [isMore, setIsMore] = useState((data) => ref.scrollTo === 'extensionSection' ? true : false)
    window.scrollTo({top: 0,behavior:'smooth'})
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
                    <img src={header} className='object-cover w-full 2xl:h-[50rem] h-[18rem]'></img>
                </div>
                <div className={`font-roboto px-8 xl:px-12 py-12 flex flex-col font-[500] space-y-10 ${isMore ? 'bg-black text-white' : 'bg-white text-black'}`}>
                    <div className='flex flex-col space-y-5 w-full'>
                        <span className='text-3xl'>CARE Project</span>
                        <span className='text-lg font-[400] font-roboto leading-5 w-full xl:w-1/4'>CARE Project is a collaboration of Art and Psychology to address the increasing mental health problem in the Philippines. This is a partnership between Technological University of the Philippines (TUP) and AMARA Counselling and Training.</span>
                        <Button className="text-white hover:text-black bg-learnmore-btn rounded hover:bg-white w-40 font-roboto xl:w-1/6 w-1/3" onClick={()=> setIsMore(!isMore)}>{isMore ? "See Less" : "Learn More"}</Button>
                    </div>
                </div>
                <Events hidden={isMore}/>
                <Exhibition/>
            </div>
            <Footer />
        </div>
    )
}