import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import EventCard from './EventCard.jsx'
import alum1 from '/assets/HERALD.jpg'
import alum2 from '/assets/PATRICIA.jpg'
import alum3 from '/assets/POULAI.jpg'
import alum4 from '/assets/JOHN.jpeg'
import { useEffect, useState } from 'react';
import axios from 'axios'

function Testimonies() {
  const [count, setCount] = useState(0)

  const handleClick = (param) => {
    setCount(param); // Update the count state with the parameter value
  };
  const [events, setEvents] = useState([]); // Initialize state to an empty array
    useEffect(() => {
        // Define an async function to fetch data
        const fetchEvents = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/events?filters[Page][$eq]=Landing&populate=*`,{
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
                    picture : import.meta.env.VITE_API_URL + imageUrl,
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
  return (
    <>
        <div className='py-6 font-roboto font-[400] text-black h-auto'>
            <div className='text-center flex flex-col space-y-3 font-[500]'>
                <span className="xl:text-3xl text-xl text-testimonialTitle ">Testimonials</span>
                <span className="xl:text-3xl text-xl">We taught thousands of<br></br>amazing students</span>
            </div>
            <Carousel className="w-full flex justify-center max-w-full px-6 py-6">
                <CarouselContent>
                    <CarouselItem key="0" className="2xl:basis-1/3">
                    <div className='p-1'>
                        <Card className="flex justify-center border-none">
                            <CardContent className="flex flex-col bg-cardbg font-[600] justify-between p-6 h-auto min-h-[10rem] lg:w-[32rem] lg:text-base text-2xs w-80 rounded-xl space-y-5">
                                <div>
                                    <span className='font-[400]'>“I would say that being a TUPian was not an easy feat and a fine art student at that. Some would
                                        say that fine arts is an easy course. Some of my mates even chose to be a fine arts student because of
                                        that notion.
                                        {count == 1 ? <span className=''> But honestly, it wasn't. It takes a lot of grit and the never-ending explosion of ideas to continue with this course, especially in TUP. You have to be resourceful and could often feel like you are at your end wits. But at the end of the day, it's how we always stand up after crying our eyes out, wiping the tears from our cheeks, and moving on to our next plate; until The Pomp and Circumstance marches play that is.”
                                        <button onClick={() => setCount(0)} className='font-[600] animate-wiggle'> See Less</button></span> : 
                                        <button onClick={() => setCount(1)} className='font-[600]'>..See More</button>}
                                    </span>
                                </div>
                                <div className='flex flex-row space-x-4'>
                                    <img src={alum2} className='xl:h-[3rem] h-[2rem] aspect-square object-cover rounded-full'></img>
                                    <div className='flex flex-col'>
                                        <span>Patricia Serrano<br></br></span>
                                        <span>Painting & 3D Artist</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    </CarouselItem>

                    <CarouselItem key="1" className="2xl:basis-1/3" >
                    <div className='p-1'>
                        <Card className="flex justify-center border-none">
                            <CardContent className="flex flex-col bg-cardbg font-[600] justify-between p-6 h-auto min-h-[10rem] lg:w-[32rem] lg:text-base text-2xs w-80 rounded-xl space-y-5">
                                <div>
                                    <span className='font-[400]'>“Marami akong nadiscover like building a connection. Kumuha lang talaga ako ng fine arts course kasi ayoko maging boring pagkatao ko and hindi ko rin aakalain na magiging career ko ito and 'yung opportunities na binigay ng TUP grinab ko na like art in the Park
                                        {count == 2 ? <span>. It's cool kasi doon ako nakapag build ng connection. All throughout ng college life ko nakafocus sa career ko na mismo.” <button onClick={() => setCount(0)} className='font-[600]'> See Less</button></span> : 
                                        <button onClick={() => setCount(2)} className='font-[600]'>..See More</button>}
                                    </span>
                                </div>
                                <div className='flex flex-row space-x-4'>
                                    <img src={alum3} className='xl:h-[3rem] h-[2rem] aspect-square object-cover rounded-full'></img>
                                    <div className='flex flex-col'>
                                        <span>Poula Andrei Sitjar<br></br></span>
                                        <span>Painting</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    </CarouselItem>

                    <CarouselItem key="2" className="2xl:basis-1/3">
                    <div className='p-1'>
                        <Card className="flex justify-center border-none">
                            <CardContent className="flex flex-col bg-cardbg font-[600] justify-between p-6 h-auto min-h-[10rem] lg:w-[32rem] lg:text-base text-2xs w-80 rounded-xl space-y-5">
                                <div>
                                    <span className='font-[400]'>“As a student, may mga certain experiences na naging bahagi ng aking journey. 
                                        One such moment for me was receiving a grade of 1.0 in our Anatomy subject, a challenging subject that 
                                        tested my perseverance and resilience.
                                        {count == 3 ? <span>Yet, kahit may mga academic trials, isa sa mga nag stand out as vibrant
                                        highlight ng aking pagiging Fine Arts Student ay ang pag participate sa mga various student art
                                        competitions. Not only did these events ignite yung aking creative passion, but they also provided
                                        the opportunity to forge connections with students from other schools. Yung friendship, nanganak
                                        lang from shared artistic endeavors, mga struggle when joing a competitions, na I think
                                        nag-enriched sa aming mga buhay with lasting fellowship and support.”
                                        <button onClick={() => setCount(0)} className='font-[600]'> See Less</button></span> : 
                                        <button onClick={() => setCount(3)} className='font-[600]'>..See More</button>}
                                    </span>
                                </div>
                                <div className='flex flex-row space-x-4'>
                                    <img src={alum1} className='xl:h-[3rem] h-[2rem] aspect-square object-cover rounded-full'></img>
                                    <div className='flex flex-col'>
                                        <span>Heraldo G. Corpus<br></br></span>
                                        <span>Visual Artist & Painting</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    </CarouselItem>

                    <CarouselItem key="3" className="2xl:basis-1/3">
                    <div className='p-1'>
                        <Card className="flex justify-center border-none">
                            <CardContent className="flex flex-col bg-cardbg font-[600] justify-between p-6 h-auto min-h-[10rem] lg:w-[32rem] lg:text-base text-2xs w-80 rounded-xl space-y-5">
                                <div>
                                    <span className='font-[400]'>“Being TUP fine arts student the education that they offer to me amplify my skills and shaped my personality to become professional with the help of our dear instructor
                                        {count == 4 ? 
                                        <span> that gives the true essence of having a practice to school to become equipped and ready for the real outside world” <button onClick={() => setCount(0)} className='font-[600]'> See Less</button></span> : 
                                        <button onClick={() => setCount(4)} className='font-[600]'>..See More</button>}
                                    </span>

                                </div>
                                <div className='flex flex-row space-x-4'>
                                    <img src={alum4} className='xl:h-[3rem] h-[2rem] aspect-square object-cover rounded-full'></img>
                                    <div className='flex flex-col'>
                                        <span>John Cris Marquez<br></br></span>
                                        <span>Visual Artist & Freelance Photographer</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
        <div className='py-6 px-12 font-roboto text-white'>
            <div className='text-center flex flex-col space-y-3 text-black'>
                <span className="xl:text-3xl text-xl font-[500]">Highlights</span>
                <span className="xl:text-3xl text-xs font-[300]">LATEST NEWS AND EVENTS</span>
            </div>
            <div className='grid grid-cols-1 xl:grid-cols-4 gap-2 py-6'>
                {
                    events.map(event => (
                        <EventCard key={event.id} title={event.title} bgImg={`url('${event.picture}')`} fbLink={event.facebookURL}>
                            {event.description}
                        </EventCard>
                    ))
                }
                {/* <EventCard title="PINAKA-KAVOUGE NA BOOTH-TUP INDAYOG 2023" bgImg="bg-[url('/assets/indayog.png')]">
                Various student organizations enthusiastically showcased their groups to the TUP Community through engaging booth setups, with the Booth Planning Committee selecting the top three 'Pinaka-kavogue na Booth' for TUP Indayog 2023. TUP - Institute for Visual Communication won third place, receiving a price of PHP 700 worth of SM Gift Certificates.
                </EventCard>
                <EventCard title="Luneta Art Fair" bgImg="bg-[url('/assets/LunetaArt.png')]">
                The Luneta Art Fair, taking place on February 4th and 5th, transformed Rizal Park into a vibrant showcase of emerging artists' works from diverse backgrounds. TUP - Institute for Visual Communication participated alongside the TUP Fine Arts Department faculty.
                </EventCard>
                <EventCard title="Meet Dexter Fernandez" bgImg="bg-[url('/assets/Dexter.png')]">
                Meeting Dexter Fernandez (Garapata), the Filipino artist behind this global streetwear collaboration. Behold the artistic essence of Dexter Fernandez as his mesmerizing street art seamlessly integrates into the realm of fashion alongside H&M and DBTK.
                </EventCard>
                <EventCard title="Art in the Park at Jaime Velasquez Park" bgImg="bg-[url('/assets/ArtInThePark.png')]">
                On March 19, 2023, 'Art in the Park' was held at the Jaime Velasquez Park in Makati City, featuring around 60 exhibitors participating in the fair's 17th edition.
                </EventCard> */}
            </div>
            <div className='text-center flex flex-col space-y-0 py-6'>
                <span className="xl:text-3xl text-xs text-testimonialTitle">Want to connect with us?</span>
                <span className="xl:text-3xl text-md text-black">Visit our page for more.</span>
            </div>
        </div>
    </>
  )
}

export default Testimonies