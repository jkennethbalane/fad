import Header from '/assets/StudentHead.png'
import NavBar from '../components/ui/NavBar.jsx'
import Gal1 from '/assets/gal1.jpg'
import Gal2 from '/assets/gal2.jpeg'
import Gal3 from '/assets/gal3.jpeg'
import Gal4 from '/assets/gal4.png'
import Gal5 from '/assets/gal5.jpg'
import Gal6 from '/assets/gal6.png'
import Gal7 from '/assets/gal7.jpg'
import Gal8 from '/assets/gal8.jpg'
import Gal9 from '/assets/gal9.jpg'
import Gal10 from '/assets/gal10.jpg'
import Gal11 from '/assets/gal11.png'
import Gal12 from '/assets/gal12.jpg'
import CP1 from '/assets/CP1.png'
import CP2 from '/assets/CP2.png'
import CP3 from '/assets/CP3.png'
import GalleryCard from '../components/ui/GalleryCard.jsx'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Footer from '../components/ui/Footer.jsx'
import EventCard from '../components/ui/EventCard.jsx'

import NAA1 from '/assets/indayog.png'
import NAA2 from '/assets/LunetaArt.png'
import NAA3 from '/assets/BFA4B.jpg'
import NAA4 from '/assets/BFA4A.jpg'
import NAA5 from '/assets/Dexter.png'
import NAA6 from '/assets/CARE.jpg'
import NAA7 from '/assets/UST.jpg'
import NAA8 from '/assets/ArtInThePark.png'
import NAA9 from '/assets/CAFASYALAN.jpg'
import NAA10 from '/assets/RAMON.jpg'

import jsonData from "../assets/alumni.json"
import { useEffect, useState, useCallback } from 'react'
import axios from 'axios'


import alumni1 from '/assets/HERALD.jpg'
import alumni2 from '/assets/Jesa.jpg'
import alumni3 from '/assets/Jhosa.jpg'
import alumni4 from '/assets/JOHN.jpeg'
import alumni5 from '/assets/Mary.jpg'
import alumni6 from '/assets/PATRICIA.jpg'
import alumni7 from '/assets/Ash.png'
import alumni8 from '/assets/Mary.png'
import alumni9 from '/assets/Poula.jpg'
import alumni10 from '/assets/fac9.png'
import alumni11 from '/assets/Kevin.jpg'
import alumnimg1 from '/assets/heraldo-1.png'
import alumnimg2 from '/assets/heraldo-2.png'
import alumnimg3 from '/assets/heraldo-3.png'
import { NavLink, useLocation } from "react-router-dom"
import facebook from '/assets/Facebook.png'
import test1 from '/assets/HANNAH.jpeg'
import test2 from '/assets/FRANK.jpg'
import test3 from '/assets/DESIREI.jpeg'
import test4 from '/assets/CARLOS.jpeg'


function Gallery(){
    return(
    <div>
        <div className='p-6 space-y-3' id='platesSection'>
            <div className='text-center flex flex-col space-y-3 text-black'>
                <span className="xl:text-3xl text-xl font-[500]">FINE ARTS DEPARTMENT</span>
                <span className="xl:text-3xl text-xl font-[500]">BEST PLATES</span>
                <span className='xl:text-3xl text-md xl:text-center text-left px-8  font-ebgaramond font-[400]'>"Unique artworks crafted by students as part of their academic curriculum, each plate representing their specific subject or field of study."</span>
            </div>
            <div className='grid xl:grid-cols-3 grid-cols-1 gap-1 xl:h-[40rem] h-full'>
                <div className='grid grid-cols-2 space-x-2 w-full overflow-hidden'>
                    <div className='grid grid-rows-3 space-y-2 overflow-hidden'>
                        <GalleryCard imgSrc={Gal1} title='"SWAN LAKE"' material="BOOK ILLUSTRATION" canvas="600PPI DIGITAL ILLUSTRATION" artist="DARRYL ROSE P. LEGARDE" section="BFA-4A" span="2"/>
                        <GalleryCard imgSrc={Gal3} title='"REMINISCENCE OF THE GOOD DAYS"' material="Acrylic paint" canvas="18x24 inch canvas" artist="Troy C. Agbu" section="Bfa-1A"/>
                    </div>
                    <div className='grid grid-rows-3 space-y-2 overflow-hidden'>
                        <GalleryCard imgSrc={Gal2} title='Book Cover Design - Written on the Body' material="" canvas="" artist="Aliya Gene C." section="BFA-4A"/>
                        <GalleryCard imgSrc={Gal4} span="2" title='Deafening Whispers' material="Digital Illustration" canvas="768 x 1024 px" artist="Zessa T. Palac" section="BFA-4A"/>
                    </div>
                </div>
                <div className='grid grid-cols-2 space-x-2 w-full overflow-hidden'>
                    <div className='grid grid-rows-3 space-y-2 overflow-hidden'>
                        <GalleryCard imgSrc={Gal5} title='"Clowned"' material="acrylic on canvas" canvas='18x24"' artist="DANIEL GONZALES" section="BFA-3B"/>
                        <GalleryCard imgSrc={Gal7} span="2" title='"TODA"' material="MAGAZINE AND PAPER" canvas="15X20" artist="Darryl Rose Legarde" section="BFA-4A"/>
                    </div>
                    <div className='grid grid-rows-3 space-y-2 overflow-hidden'>
                        <GalleryCard imgSrc={Gal6} span="2" title='Sprite Thirst For Yours' material="Digital Art" canvas="3:4 (768x1024)" artist="DOMASIAN, JOSEPH LAWRENCE T." section="BFA - 3B"/>
                        <GalleryCard imgSrc={Gal8} title='"Salto Padapa"' material="Mixed Media on Canvas" canvas="12x12" artist="Jan Marion Feliciano" section="BFA - 4E"/>
                    </div>
                </div>
                <div className='grid grid-cols-2 space-x-2 w-full overflow-hidden'>
                    <div className='grid grid-rows-3 space-y-2 overflow-hidden'>
                        <GalleryCard imgSrc={Gal9} span="2" title='Sahira' material="Digital Artwork" canvas="A4" artist="Eren Josh Ryu" section="4th Year"/>
                        <GalleryCard imgSrc={Gal11} title='starbucks frappuccino' material="product photography" canvas="3000 px x 3000 px" artist="Angelica S. Villanueva" section="BFA 4C"/>
                    </div>
                    <div className='grid grid-rows-3 space-y-2 overflow-hidden'>
                        <GalleryCard imgSrc={Gal10} title='"The Highlights"' material="Digital" canvas="1560x1170" artist="Paolo P. Tenorio" section="BFA-4A"/>
                        <GalleryCard imgSrc={Gal12} span="2" title='"Grace Before Meal"' material="oil on canvas" canvas="2x3ft" artist="Ash Iverson Forlaje" section="BFA 1-D"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
)}

function Testimony(){
    const [count, setCount] = useState(0)

    const handleClick = (param) => {
        setCount(param); // Update the count state with the parameter value
    };
    return(
        <div className='py-6 font-roboto font-[400] text-black h-auto'>
            <div className='text-center flex flex-col space-y-3 font-[500]'>
                <span className="xl:text-3xl text-xl text-testimonialTitle ">FINE ARTS DEPARTMENTS</span>
                <span className="xl:text-3xl text-xl">EXPERIENCE TESTIMONIALS</span>
            </div>
            <Carousel className="w-full flex justify-center max-w-full px-6 py-6">
                <CarouselContent>
                    <CarouselItem key="0" className="2xl:basis-1/3">
                    <div className='p-1'>
                        <Card className="flex justify-center border-none">
                            <CardContent className="flex flex-col bg-cardbg font-[600] justify-between p-6 h-auto h-auto min-h-[10rem] lg:w-[32rem] lg:text-base text-2xs w-80 rounded-xl space-y-5">
                                <div>
                                    <span className='font-[400]'>“As a person who was never really a fan of going to school, 
                                    what kept me going was the people I met during my time in school. Studying fine arts isn't 
                                    really the most simple thing, but the people who study alongside me really pushed and motivated 
                                    me to strive better.
                                        {count == 1 ? <span> One good experience I
                                        had so far is the showcasing of talents that the fine arts students do. They truly keep my spark going
                                        and give me the energy to become a better artist.<br/><br/>
                                        The fine arts community so far has been really welcoming and they also credit where it is due. In
                                        the most genuine way possible, I do feel like I am accepted and that I belong.” 
                                        <button onClick={() => setCount(0)} className='font-[600]'> See Less</button></span> : 
                                        <button onClick={() => setCount(1)} className='font-[600]'>..See More</button>}
                                    </span>
                                </div>
                                <div className='flex flex-row space-x-4'>
                                    <img src={test1} className='xl:h-[3rem] h-[2rem] aspect-square object-cover rounded-full'></img>
                                    <div className='flex flex-col'>
                                        <span>Hannah Gozon<br></br></span>
                                        <span>BFA - 1A</span>
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
                                    <span className='font-[400]'>“First two years of my college have been bland because of the pandemic. 
                                    I thought it would be like that all the way up to my senior year. TUP Fine Arts, guided me.
                                    {count == 2 ? <span>  They made sure my remaining
                                    two years would be full of magical learning and memorable experiences. <br/><br/>
                                    Aside from learning, there have been great opportunities that the faculty and staff gave me. It
                                    molded the artist who I am today.” 
                                    <button onClick={() => setCount(0)} className='font-[600]'> See Less</button></span> : 
                                    <button onClick={() => setCount(2)} className='font-[600]'>..See More</button>}
                                    </span>
                                </div>
                                <div className='flex flex-row space-x-4'>
                                    <img src={test2} className='xl:h-[3rem] h-[2rem] aspect-square object-cover rounded-full'></img>
                                    <div className='flex flex-col'>
                                        <span>Frank Genesis P. Lomboy<br></br></span>
                                        <span>BFA - 4A</span>
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
                                    <span className='font-[400]'>“As a student in Fine Arts, I can guarantee na may matututunan dito sa TUP Manila especially on enhancing your skills through traditional and digital arts.
                                        {count == 3 ? <span> More so, sobrang thankful ako sa mga
                                        experience na nangyari sa'kin dahil mas lalo akong nag-grow as person and nagboost ang self
                                        confidence.<br/><br/>
                                        Lahat ng bagay may impact, siguro dahil na rin sa magagaling ang mga professors, instructors and
                                        maging sa mga kaklase na willing kang turuan sa mga knowledge na di kapa pamilyar sa ganto. Kaya
                                        sa mga susunod na panahon bago makatapos ng pag-aaral, inaasahan kong mas magiging
                                        improving at memorable ang experience ko dito sa TUP Manila.” 
                                        <button onClick={() => setCount(0)} className='font-[600]'> See Less</button></span> : 
                                        <button onClick={() => setCount(3)} className='font-[600]'>..See More</button>}
                                    </span>
                                </div>
                                <div className='flex flex-row space-x-4'>
                                    <img src={test3} className='xl:h-[3rem] h-[2rem] aspect-square object-cover rounded-full'></img>
                                    <div className='flex flex-col'>
                                        <span>Desirei G. Roca<br></br></span>
                                        <span>BFA - 3A</span>
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
                                    <span className='font-[400]'>“Nagpapasalamat ako sa Fine Arts Department ng TUP-Manila sa pagbibigay 
                                    sa akin ng kaalaman at kasanayan sa sining at sa pagpapalago bilang indibidwal.
                                        {count == 4 ? <span className=''> Na-inspire ako ng mga guro at kasama
                                        ang aking mga kapwa mag-aaral, masigasig kaming nagtutulungan sa aming paglalakbay sa mundo
                                        ng sining. Ang departamento ay hindi lamang nagbibigay ng edukasyon kundi pati na rin ng isang
                                        komunidad na nagtataguyod ng pag-unlad ng kakayahan at kasanayan. Salamat sa lahat ng
                                        oportunidad at sa mga kaibigan at guro na aking nakilala.” 
                                        <button onClick={() => setCount(0)} className='font-[600]'> See Less</button></span> : 
                                        <button onClick={() => setCount(4)} className='font-[600]'>..See More</button>}
                                    </span>
                                </div>
                                <div className='flex flex-row space-x-4'>
                                    <img src={test4} className='xl:h-[3rem] h-[2rem] aspect-square object-cover rounded-full'></img>
                                    <div className='flex flex-col'>
                                        <span>Carlos Hermo A. Baldemoro<br></br></span>
                                        <span>BFA - 3B</span>
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
    )
}   

function ClassPicture(){
    return(
        <div className='py-12 px-12 font-roboto text-white' id='eventsSection'>
            <div className='text-center flex flex-col space-y-3 text-black'>
                <span className="xl:text-3xl text-xl text-testimonialTitle ">CLASS PICTURE</span>
                <span className="xl:text-3xl text-xl">4TH YEAR BATCH 2023-2024</span>
            </div>
            <Carousel className="w-full flex justify-center max-w-full py-6">
                <CarouselContent>
                    <CarouselItem key="0" className="xl:basis-1/3 overflow-hidden">
                        <img src={CP1} className='rounded-xl w-full aspect-video min-h-[10rem] object-cover'></img>
                    </CarouselItem>

                    <CarouselItem key="1" className="xl:basis-1/3 overflow-hidden">
                        <img src={CP2} className='rounded-xl w-full aspect-video min-h-[10rem] object-cover'></img>
                    </CarouselItem>
                    <CarouselItem key="2" className="xl:basis-1/3 overflow-hidden">
                        <img src={CP3} className='rounded-xl w-full aspect-video min-h-[10rem] object-cover'></img>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

function Events(){
    const [events, setEvents] = useState([]); // Initialize state to an empty array
    useEffect(() => {
        // Define an async function to fetch data
        const fetchEvents = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/events?filters[Page][$eq]=Students&populate=*`,{
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
        <div className='py-12 px-12 font-roboto text-white' id='eventsSection'>
            <div className='text-center flex flex-col space-y-3 text-black'>
                <span className="xl:text-3xl text-xl text-testimonialTitle ">FINE ARTS DEPARTMENTS</span>
                <span className="xl:text-3xl text-xl">EVENTS</span>
            </div>
            <div className='grid grid-cols-1 xl:grid-cols-4 gap-2'>
                {
                    events.map(event => (
                        <EventCard key={event.id} title={event.title} bgImg={`url('${event.picture}')`} fbLink={event.facebookURL}>
                            {event.description}
                        </EventCard>
                    ))
                }
                {/* <EventCard title="GAWAD DAKILA YEAR 2 2024" bgImg="bg-[url('/assets/GAWAD.jpg')]">
                In its second year, Gawad Dakila, spearheaded by the Fine Arts students of the Technological University of the Philippines-Manila, under the mentorship of their esteemed professor, Mr. Rolando Jay Defero, continues to serve as a beacon of recognition for stories illuminating the diverse facets of human existence. Featuring narratives both on camera and behind the lenses, showcased through documentaries such as 'Ani ni Ina' by Istudyo Kolab, 'Ambisyong Tumaliwas' by BeeHype, 'Walang Patay, Walang Buhay' by Kariman, and 'Araw-Araw sa Gilid-Gilid' by Aimfire, each serving as a testament to the power of visual storytelling in capturing the essence of the human experience, where the four life stories depicted transcend mere tales, offering profound reflections of resilience, hope, and the intricacies of existence. This invites viewers to empathise, reflect, and appreciate the rich tapestry of life's stories portrayed through the lens of Gawad Dakila Year 2.<br/>
                On February 9, 2024, at 5 PM, the Gawad Dakila YouTube Channel unveiled a series of films designed to take viewers on a profound journey through the depths of human existence. These cinematic creations promise to immerse audiences in a rich tapestry of raw emotions and genuine insights into the complexities of life. Delving into real-life narratives, they explore a range of themes, including women's empowerment, the challenges faced when one's occupation diverges from one's educational background, the remarkable resilience exhibited by communities residing amidst cemetery grounds, and the daily trials and triumphs experienced by street vendors. Each documentary serves as a poignant testament to the boundless diversity and unwavering fortitude of the human spirit, offering viewers a compelling glimpse into the multifaceted nature of the human experience.
                </EventCard>
                <EventCard title="HALA HALA 2023" bgImg="bg-[url('/assets/HALA.jpg')]">
                'Hala-Hala: Pinong Sining Paningningin' was an electrifying showcase of creativity and talent organised by the Bachelor of Fine Arts major in Advertising, 4th-year students of section B, under their esteemed subject professor, Ernest Joseph Garcia. The event, which took place on December 14-15 at the CAFA atrium during the Technological University of the Philippines Foundation Day, was a testament to the dedication and passion of these budding artists.<br/>
                The event featured various attractions, including captivating band performances by renowned acts such as Maize, Longganisa, Da Flamingguards, and Lil Kingdom Crew, setting the stage for an energetic and dynamic atmosphere. Adding to the excitement were the mesmerising drag performances by Draga Queen performers Maki Doll, Veronica Storm, It's WXYZ, Tangerine, and the one and only Slaytina, captivating the audience with their dazzling performances. Additionally, the event boasted vibrant dancing, engaging booths showcasing various artworks and crafts, food stalls, interactive games, and an open mic session where attendees could showcase their talents. Culminating the festivities is the eagerly anticipated Fine Arts night, where the spotlight will shine on the incredible talents of TUP's aspiring artists, leaving a lasting impression on all who attend. 'Hala-Hala: Pinong Sining Paningningin' is more than just an event; it's a celebration of creativity, passion, and the indomitable spirit of the artistic community at TUP.
                </EventCard>
                <EventCard title="SIKHAY LAWIN" bgImg="bg-[url('/assets/Sikhay.jpg')]">
                    <span>SIKHAY LAWIN: CINEMULAN SA ATIN 2023
                    The crew's enthusiastic shouts of 'ROLLING NA RAW!' filled the air, signaling the start of
                    the cinematic journey. Come and witness the seven Filipino films brought to you by BFA-1A;
                    this is Sikhay Lawin: Cinemulan sa atin.
                    Just one more sleep, and we will behold the First Onsite Film Festival of TUP-FAD! It
                    featured the societal issues and how the protagonists creatively tackle them through
                    CINEmulating.
                    Experience these films on June 23, at TUP Manila - IRTC Hall at precisely seven in the
                    morning (7:00 AM). For future announcements and live streams, like, follow, and stay tuned
                    on the Sikhay Lawin Facebook Page.<br/>
                    Sikhay Lawin proudly presents Cinemulan sa atin, a lineup of short films from BFA-1A
                    students:<br/>
                    "Simbahan Daw Ang Quiapo"<br/>
                    "Puta, he!"<br/>
                    "Bukas Makalawa"<br/>
                    "Paru-parong Bukid"<br/>
                    "Sa Pagitan"<br/>
                    "Talang-ka"<br/>
                    "Yung painting sa kanta ng Eheads
                    </span>
                </EventCard>
                <EventCard title="KULTURA SA TELA 2023" bgImg="bg-[url('/assets/KST.jpg')]">
                Experience the fusion of creativity and culture as the Bachelor of Fine Arts major in Advertising, 3rd-year students from sections A and B, along with their subject professor, Mrs. Leticia L. Paldez, proudly present 'KULTURA SA TELA: Philippine Culture through Fashion.' Held on June 14, 2023, from 1:00 PM to 5:00 PM at the prestigious IRTC Conference Hall, Technological University of the Philippines - Manila, this event redefines the essence of style and culture. More than just a fashion showcase, 'KULTURA SA TELA' celebrates Filipino heritage, innovation, and the transformative power of art. Prepare to be inspired as these talented students take you on a journey through the vibrant tapestry of Filipino culture, leaving an indelible mark on your senses and imagination.<br/>
                Attendees were treated to a visual feast as models strutted down the runway in elaborate costumes that seamlessly blended contemporary fashion with traditional Filipino motifs. Vibrant colours, intricate beadwork, and flowing silhouettes captivated the audience, highlighting the students' ingenuity and dedication to their craft. Beyond the aesthetic appeal, 'Kultura sa Tela' served as a cultural exchange and appreciation platform, fostering a deeper understanding of Philippine heritage among local and international spectators. As the event came to a close, it left a lasting impression, inspiring admiration for the talent and creativity of the students and reinforcing the importance of preserving and celebrating Filipino culture through the art of fashion.
                </EventCard>
                <EventCard title="GAWAD DAKILA THE FIRST FILM FESTIVAL 2022-2023" bgImg="bg-[url('/assets/GAWAD23.jpg')]">
                The highly anticipated Gawad Dakila Film Festival 2023 commences with a riveting presentation from Lente Productions as the talented filmmakers of BFA-4E unveil their masterpiece, 'Hanggang Dulo.' This compelling creation promises to captivate audiences with its depth and resonance, setting the stage for an extraordinary cinematic journey. Meanwhile, Himuyong Productions, representing BFA-4C, presents their contribution, a captivating Class Film tailored for the esteemed festival. With meticulous craftsmanship and unwavering dedication, they create a cinematic marvel that will leave a lasting impression. As anticipation peaks, the film festival's grand premiere is set for December 22, 2022, at 3:00 PM, exclusively on the Gawad Dakila YouTube account, marking the beginning of an exhilarating showcase of talent and creativity.<br/>
                Launching into the digital realm on December 31, 2022, is an electrifying talent showcase as BFA-4C and BFA-4E present their latest creations. Comprising six gripping narratives each, these Pandemic Short Films for the GAWAD DAKILA FILM FESTIVAL 2023 promise to enthral audiences with diverse themes and compelling storytelling. From BFA-4C, viewers can expect thought-provoking tales such as 'PaperPlanes' by StudioBlue5, 'RealWorld' by MundoProduction, the intriguing 'SpaghettingPalabas' by BadlingsProduction, the reflective 'Hiatus' by NineOclockProduction, the resonant 'AyudaPo' by DaluyongProductions, and the dreamy 'PaHinga' by MarahuyoProductions. Meanwhile, BFA-4E presents an equally riveting lineup, featuring the dynamic 'Rife' by EliteProductions, the strategic 'Checkmate' by GurumatikaProductions, the poignant 'KasamaKa' by FlickedProductions, the gripping 'Hawakamay' by PathfindersProductions, the profound 'ProvisionDay' by MovileProductions, and the enigmatic 'Masked' by SnapProductions. As the curtain rises on these cinematic endeavours, audiences are in for an immersive experience that transcends boundaries and captivates the imagination.<br/>
                The third wave of films showcased at the GAWAD DAKILA FILM FESTIVAL 2023, set for January 10, presents an enthralling assortment of movies meticulously crafted by BFA 4C/4E. These Official Genre Films for the festival offer a diverse array of genres, including Romance, Adventure, Musical, Film Noir, Sci-Fi, and Horror, ensuring an unforgettable viewing experience. Immerse yourself in the rich tapestry of storytelling with selections such as 'Room 474' by StudioBlue5xMundoProductions, 'Usahay Nagamahay Ako' by 9OClockxDaluyongProductions, the enigmatic 'Okulus' by BadlingsProduction, the evocative 'Makapiling Ka' by MarahuyoProduction, the lyrical 'The Lyricist' by ElitexMovileProductions, and the intriguing 'Project Redo' by FlickedxSnapProductions, as well as the captivating 'Cupid Pysche' by GurumatikaxPathfinders. Each film poster serves as a portal to a world teeming with mystery, emotion, and thrills, beckoning viewers to embark on a journey of discovery. Dive into the unknown and lose yourself in the enchantment of cinema with these captivating and thought-provoking films.<br/>
                </EventCard>
                <EventCard title="ART FOR THE SOUL 2022" bgImg="bg-[url('/assets/AFTS.jpg')]">
                    On November 23, 2022, a transformative event took place, the 'Art for the Soul' webinar, hosted by the Bachelor of Fine Arts major in Advertising, 3rd-year students of section A, under the expert guidance of Professor Leticia L. Paldez. This event served as a crucible for innovation, igniting participants' imaginations and propelling them into the dynamic intersection of art and advertising. From the early hours of 9:00 AM to the afternoon's close at 1:00 PM via Ms Teams, students delved into various disciplines, including media production, video storyboarding, videography, video editing (animation), and art therapy.<br/>
                    Led by distinguished speakers Mr Rommel Pastrana Celespara, Mr Angelo Luigi A. Domingo, and Ms Filipina Deguzman, this event promises to be an enlightening journey through creativity, expression, and healing. Through engaging discussions, practical demonstrations, and interactive exercises, attendees will learn about the technical aspects of media production and discover art's profound impact on mental health and well-being. Whether you're a seasoned media professional, a budding artist, or simply someone interested in the healing power of creativity, 'Art for the Soul' promises to be an enriching experience that transcends the boundaries of traditional webinars, leaving a lasting impression on hearts and minds alike.<br/>
                /
                </EventCard>
                <EventCard title="SINEDEMYA: CINESIGAW NG KABATAAN" bgImg="bg-[url('/assets/Cinegaw.jpg')]">
                    SineDemya: CineSigaw ng Kabataan” 2022
                    Despite facing new challenges, such as limitations in expressing their thoughts and feelings,
                    Filipino youth managed to connect through art, particularly in the form of films. With the
                    determination of our students, the Fine Arts Department of TUP Manila proudly presented
                    the second Annual Film Display.<br/>
                    The event, titled "SineDemya: CineSigaw ng Kabataan," showcased a lineup of short films
                    from BFA-1 students. These films tackled issues related to culture, the current pandemic, and
                    national concerns. We released the films on May 23, 2022, and we are delighted that they
                    gave voice to the youth and their perspectives.<br/>
                    1. "Ang Lihim ni Anna Dela Rosa"<br/>
                    2. "Eyeball"<br/>
                    3. "Ginhawa ng Laya"<br/>
                    4. "Hapag Kainan"<br/>
                    5. "Kalma, Ako Lang 'To"<br/>
                    6. "Kuwadro"<br/>
                    7. "Laro Tayo?"<br/>
                    8. "Leonor"<br/>
                    9. "Padayon"<br/>
                    10. "Pananatili"<br/>
                    11. "Patungo sa Isang Mapanganib na Daan"<br/>
                    12. "Pulpolitika"<br/>
                    13. "Takipsilim"<br/>
                    14. "Tasteless Adobo"<br/>
                    15. "Truth to Nowhere"
                </EventCard>
                <EventCard title="SINEDEMYA 2021" bgImg="bg-[url('/assets/Sine21.jpg')]">
                    During the pandemic, filmmakers and film enthusiasts faced many challenges. Despite these
                    difficulties, the power of art remained strong and continued to bring people together. Our
                    Fine Arts Department recently held its first-ever film exhibition, showcasing the
                    determination and creativity of our students. We were thrilled to present this event and
                    celebrate the enduring strength of artistic expression.<br/>
                    With great excitement, we revealed the lineup for the SineDemya Film Festival, featuring 18
                    captivating films crafted by our Fine Arts students as part of their culminating project in the
                    Creative Visual Writing course. Commencing on June 11, 2021, viewers were invited to
                    immerse themselves in the diverse cinematic experiences showcased on the SineDemya
                    Facebook page.<br/>
                    The lineup included "Basurera sa Gitna ng Pandemya", "Behind my I", "Catharsis",
                    "Connected", "Dear Followers", F.Y.P", "Happy Father's Day", "Ilayaw", "Ligaw",
                    "Lunggati", "Maliliit na Bagay", "Musika ng Tagumpay", "Nathaniel", "Offline", "Project:
                    Mask-aral", "Silent Melody", "Tadhanap", and "Una't Huli". Each film promised to offer a
                    unique perspective, encapsulating our collective journey's myriad emotions and experiences.
                    From tales of resilience and introspection to narratives of love and longing, these cinematic
                    creations invited audiences to explore the depths of human expression.<br/>
                    As we navigated through those challenging times, the SineDemya Film Festival served as a
                    beacon of hope and inspiration, reminding us of the transformative power of storytelling. We
                    came together to celebrate the creativity and ingenuity of our students as we embarked on this
                    cinematic voyage together.
                </EventCard> */}
            </div>
        </div>
    )
}

function NAAdialog(res){
    const dynamicStyle = res.bgImg + " p-1 xl:h-80 xl:w-80 h-48 w-48 bg-cover bg-center"
    return(
        <>
            <Dialog>
            <DialogTrigger asChild>
                <button><NAAcard title={res.title} imgSrc={res.imgSrc}/></button>
            </DialogTrigger>
            <DialogContent className="w-full bg-transparent border-none overflow-y-scroll max-h-screen no-scrollbar">
                <div className="flex flex-col flex justify-center">
                    <div className="flex flex-row justify-center"><img src={res.imgSrc} className='h-auto w-80'></img></div>
                    <div className="text-center flex flex-col text-white">
                        <span className="text-xl xl:text-3xl py-2">{res.title}</span>
                        <div className='w-full flex flex-row justify-center'>
                            <span className="text-xs xl:text-xl py-2 w-full xl:w-1/2 text-left">{res.description}</span>
                        </div>
                    </div>
                    {res.fbLink && (
                        <div className='flex flex-row w-full justify-center'>
                            <NavLink to={res.fbLink}><img src={facebook} className='transition duration-300 transform hover:scale-105 aspect-square xl:w-10 w-8 justify-center'></img></NavLink>
                        </div>
                    )}
                </div>
            </DialogContent>
        </Dialog>
        </>
    )
}
function NAAcard(res){
    return(
        <>
            <Card className="flex">
                <CardContent className="flex flex-row bg-[#D9D9D9] h-auto max-h-28 w-full transition duration-300 transform hover:scale-105 rounded-lg p-0 space-x-3">
                    <img src={res.imgSrc} className='aspect-square w-28'/>
                    <div className='flex flex-col font-roboto justify-between p-3 text-left'>
                        <span className='font-[500] 2xl:text-xl text-xs'>{res.title}</span>
                        <span className='font-[300] 2xl:text-xl text-xs'>Learn More</span>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}

function NewsAndArticles(){
    const [articles, setArticles] = useState([]); // Initialize state to an empty array
    useEffect(() => {
        // Define an async function to fetch data
        const fetchArticles = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/articles?populate=*`,{
                headers: {
                    'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`
                  }
            });
            const data = response.data.data;
            // Check if data is an array and set state
            if (Array.isArray(data)) {
                const mappedArticles = data.map(item => {
                const { id, attributes } = item;
                const { Title, Description, FacebookURL, createdAt, updatedAt, publishedAt , Image} = attributes;
                const imageUrl = Image.data.attributes.url;
                return {
                    id,
                    title: Title,
                    description: Description,
                    facebookURL: FacebookURL,
                    image : "http://localhost:1337" + imageUrl,
                    createdAt,
                    updatedAt,
                    publishedAt,
                    fullTitle: `Title: ${Title}`
                };
                });
                setArticles(mappedArticles);
            } else {
            console.error('Response data is not an array');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };

        fetchArticles(); // Call the fetch function
    }, []); // Empty dependency array to run only on mount
    return(
        <div className='p-6 space-y-2'>
            <div className='text-center flex flex-col space-y-3 text-black'>
                <span className="xl:text-3xl text-xl text-testimonialTitle ">FINE ARTS DEPARTMENTS</span>
                <span className="xl:text-3xl text-xl">NEWS / ARTICLES</span>
            </div>
            <div className='grid grid-cols-1 xl:grid-cols-3 gap-2 py-6'>
                {
                    articles.map(article => (
                        <NAAdialog key={article.id} title={article.title} imgSrc={article.image} description={article.description}
                            fbLink={article.FacebookURL}
                    />
                    ))
                }
                {/* <NAAdialog title="PINAKA-KAVOUGE NA BOOTH-TUP INDAYOG 2023" imgSrc={NAA1} description="Various student organizations have
                    enthusiastically showcased their groups to the
                    TUP Community through engaging booth
                    setups, with the Booth Planning Committee
                    selecting the top three 'Pinaka-kavogue na
                    Booth' for TUP Indayog 2023. TUP - Institute
                    for Visual Communication won TOP 3 - A prize
                    of PHP 700 worth of SM Gift Certificates."
                    fbLink="https://www.facebook.com/photo?fbid=122136709244010186&set=a.122117498048010186"
                    />
                <NAAdialog title="LUNETA ART FAIR" imgSrc={NAA2} description="The Luneta Art Fair, taking place on
                    February 4th and 5th, will transform Rizal
                    Park into a vibrant showcase of emerging
                    artists' works from diverse backgrounds.
                    TUP - Institute for Visual Communication
                    participated alongside the TUP Fine Arts
                    Department faculty."
                    fbLink="https://www.facebook.com/photo/?fbid=397991026079763&set=pcb.397994486079417"
                    />
                <NAAdialog title="BFA - 4B ORIGINAL PILIPINO MUSIC (OPM) ART DIRECTION EXHIBITION" imgSrc={NAA3} description="TUP FAD's BFA 4B students
                    showcase their Art Direction
                    Exhibition, celebrating Original
                    Pilipino Music (OPM), offering a
                    captivating dive into Filipino
                    creativity where music and art
                    intertwine seamlessly."
                    fbLink="https://www.facebook.com/ExpressYourheART2o17/posts/pfbid02HwfVJknHVsALMnwRgz6Sxx6oziDzLMEqMNjgKzYST6QqCArSWTBSCGhfLeUkUr6Sl"
                    />
                <NAAdialog title="BFA - 4A FLAVORS OF HOME ART DIRECTION EXHIBITION" imgSrc={NAA4} description="Experience the captivating journey of TUP
                    FAD's BFA 4A Art Direction exhibition,
                    celebrating the diverse culinary heritage of
                    the Philippines with 'Flavors of Home.'
                    Delve into the vibrant colors, intricate
                    textures, and unforgettable experiences
                    inspired by our beloved regional cuisines
                    and treats."
                    fbLink="https://www.facebook.com/ExpressYourheART2o17/posts/pfbid0TaAbsf2zTBTxhwjH4bFVV8SeGwne796gPvhp5oPVqJ8TRk3LWLZadRnRXnwKKpULl"
                    />
                <NAAdialog title="Meet Dexter Fernandez, the Filipino Artist Behind This International Streetwear Collab" imgSrc={NAA5} description="Meeting Dexter Fernandez (Garapata), the
                    Filipino artist behind this global streetwear
                    collaboration. Unveil the artistic essence
                    of Dexter Fernandez as his mesmerizing
                    street art seamlessly integrates into the
                    realm of fashion alongside H&M and DBTK."
                    fbLink="https://mega-onemega.com/meet-dexter-fernandez-the-filipino-artist-behind-this-international-streetwear-collab/"
                    />
                <NAAdialog title="CARE PROJECT “TRUST THE PROCESS” ART THERAPY" imgSrc={NAA6} description="Conducted on May 23, 2023, the 'Trust
                    the Process' session offered an
                    enriching and significant Art Therapy
                    experience at Juan Luna Elementary
                    School."
                    fbLink="https://www.facebook.com/permalink.php?story_fbid=pfbid0TAaRBt1fvgezQiueddT5LzJuVsqz7K4dTQxpv5CUdLzNQigZJs7y2sqPEZcnD7Jpl&id=100076854947611"
                    />
                <NAAdialog title="UST ANNUAL INTER-SCHOOL ON-THE-SPOT PAINTING COMPETITION" imgSrc={NAA7} description="Mr. Ash Iverson Forlaje secured the first
                    position in the UST annual inter-school
                    on-the-spot painting competition this year
                    alongside all the participating students."
                    fbLink="https://www.facebook.com/ExpressYourheART2o17/posts/pfbid0xiJUA9K7uGiqTeDkmRZdmqp31EfGawUQ4ogMDwBScvfeSgf1tDNf7uYTjL3NkHLhl"
                    />
                <NAAdialog title="Art in the Park at Jaime Velasquez Park" imgSrc={NAA8} description="On March 19, 2023, 'Art in the Park'
                    occurred at Jaime Velasquez Park
                    in Makati City, featuring around 60
                    exhibitors participating in the fair's
                    17th edition."
                    fbLink="https://www.facebook.com/photo?fbid=3432326520257411&set=a.182218585268237"
                    />
                <NAAdialog title="'Tara, G?' CAFAsyalan Advertising Art Direction" imgSrc={NAA9} description="CAFAsyalan is a design
                    exhibition by BFA 4C students,
                    presenting their creative branding
                    projects for different cities as
                    part of their ADV 441: Advertising
                    Art Direction course. This
                    showcase invites us to explore each location's unique beauty and celebrate the
                    Philippines' diverse cultural identities. Visit the exhibition from January 26 to
                    February 3, 2023, at CAFA Fine Arts Department (1st Floor)."
                    fbLink="https://www.facebook.com/ExpressYourheART2o17/posts/pfbid02wy43fRu6zaAuyKujcMf5pg2yHu9N6XnKEu3Xr2UrU42NqRKRAt7kBpfheWLyPriVl"
                    />
                <NAAdialog title="Celebrating the 25th work anniversary of Sir Ramon Talaga Dela Cruz" imgSrc={NAA10} description="Manases Deneil Victor Mira Jr., Bj
                    Domantay, and the other members of
                    BFA-1A were highlighted in the Guhit Jes
                    video for creating the Best Christmas
                    Tree."
                    fbLink="https://www.facebook.com/ExpressYourheART2o17/posts/pfbid02Nm2LXBPnGdhn6sLLA8RPTT3mKPRqnj1wmR3jGimSY1rBTrqzsSs54FX5g21rJ6N8l"
                    /> */}
            </div>
        </div>
    )
}

function StudentAlumniCards({name,year,picture,email,genre,bio,experience,children,quote}){
    return(
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <button className='w-full flex flex-row px-6 p-3 hover:bg-[#EED3D9] space-x-3'>
                        <img src={picture} className='aspect-square h-[4rem]'></img>
                        <div className='flex flex-col text-left'>
                            <span className='font-roboto font-[600] text-xl'>{name}</span>
                            <span className='font-roboto font-[300] text-lg'>BATCH YEAR {year}</span>
                        </div>
                    </button>
                </DialogTrigger>
                <DialogContent className="w-full bg-transparent border-none overflow-y-scroll max-h-screen no-scrollbar">
                    <div className="flex flex-col flex justify-center">
                        <div className="flex flex-row justify-center"><img src={picture} className='h-auto w-40'></img></div>
                        <div className="text-center font-roboto flex flex-col text-white">
                            <span className="text-xl xl:text-4xl font-[600]">{name}</span>
                            <span className="text-xs xl:text-2xl text-center font-[600]">BATCH YEAR {year}</span>
                            <span className="text-xs xl:text-xl text-center">{email}</span>
                            <span className="text-xs xl:text-xl text-center">{genre}</span>
                            <span>{quote}</span>
                            <div className='flex flex-row w-full justify-center py-6'>
                                <span className='text-left xl:w-1/2 w-full'>{bio}</span>
                            </div>
                            <div className='flex flex-row w-full justify-center py-6'>
                                <span className='text-left xl:w-1/2 w-full'>{experience}</span>
                            </div>
                            <div className='flex xl:flex-row flex-col w-full justify-center'>
                                {children}
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
}
function AlumniCards(res){
    const year = res.year
    const dynamicId = "drop-" + res.year
    const [isDrop, setIsDrop] = useState(false);
    const onClickDrop=()=>{
        setIsDrop(!isDrop)
    }
    var card = [];
    if(year == 2000){
        var newCard = { 
            fname : "Heraldo G. Corpuz",
            email : "corpusherald23@gmail.com",
            genre : 'Visual Artist / Painting',
            quote : '"Success in life is a long hard climb"',
            bio:`Herald Corpus says. As a young child, he developed a close kinship with the nature. That kinship is the basis for his art, in which the textures of his artwork turned into intricate line art.
            Herald Corpus is a multidisciplinary visual artist and environmentalist; his art practice traverses from theatre art to ethnomusicology. His ideology is rooted to his daily life
            experiences and encounters, navigating sociopolitical struggles and spiritual triumph of
            success. He is a trailblazer of many ideas, engaging off grid with “Mother Nature” that
            inspire and encompasses his creative work and cleanse his mind, body, and soul. His earliest art can be traced to his passion for climbing mountains."`,
            experience:`“As a student, may mga certain experiences na naging bahagi ng aking journey. One such
            moment for me was receiving a grade of 1.0 in our Anatomy subject, a challenging subject
                that tested my perseverance and resilience. Yet, kahit may mga academic trials, isa sa mga
                nag stand out as vibrant highlight ng aking pagiging Fine Arts Student ay ang pag participate
            sa mga various student art competitions. Not only did these events ignite yung aking creative
            passion, but they also provided the opportunity to forge connections with students from other
            schools. Yung friendship, nanganak lang from shared artistic endeavors, mga struggle when
            joing a competitions, na I think nag-enriched sa aming mga buhay with lasting fellowship and
            support.”`,
            picture:alumni1
        };
        card.push(newCard);
    }
    else if(year == 2009){
        var newCard = {
            fname : "Jesa De Vera",
            email : "jesa_devera@tup.edu.ph",
            genre : 'Design (BPO industry)',
            quote : '',
            bio:`A Visual Designer for 14 years in IBM Business Services, a multinational company and one
            of the big technology and data companies in the BPO industry. She graduated as Cum laude
            from the Technological University of the Philippines with a degree of Bachelor of Fine Arts
            Major in Advertising.
            She is a certified Enterprise Design Thinking Co-creator, Agile Explorer, IBM Garage
            Practitioner, IBM Growth Behaviors Practitioner, Automation Practitioner, and Cognitive
            Practitioner. She is also an AIGPE Yellow Belt certified in Lean Six Sigma process
            improvement method. She had also acquired knowledge in various trainings in Cybersecurity,
            Cyberbullying and Harassment, Watson and Cloud Foundations, Automation, AI, and Project
            Management.
            Throughout her experience as a Visual Designer, she had supported multiple projects such as
            corporate branding development, proposals, video production, website design maintenance,
            mobile screensaver, and event kit materials. She had supported various global clients from
            USA, Europe, Middle East, Australia, India, Japan, and Philippines which caters different
            industries such as energy and power; banking, financial services, and insurance; consumer
            packed goods and agriculture; pharmaceutical and biotechnology, healthcare, research and
            development, technology and telecommunication, aerospace, transportation, construction,
            electronics, mining, automation, artificial intelligence, and data analytics.
            
            She is also a freelance designer and had supported multiple projects from USA and Asian
            clients such as branding development and collateral materials of a resort, restaurant,
            commodity and fuel, and transportation services.
            She had also exhibited her artwork in National Museum as one of the finalists in PLDT-DPC
            Visual Arts competition in 2008.
            Apart from being a Visual Designer, she is also a Part-time Art Instructor at TUP-Manila and
            has been teaching painting, computer and graphics software, children’s book illustration,
            copywriting, art appreciation, and manuscript and scriptwriting courses. Strict sometimes, but
            she likes to motivate and inspire more students to direct them on their right track to achieve
            their goals and dreams.
            She had also served as an industry consultant of different concepts, proposals, and thesis
            campaign of the Fine Arts Students. She had also imparted her insights and motivational
            speeches as Speaker and Panelist from different course campaigns in Fine Arts Department.
            She believes in "Jack of all trades, master on none, but oftentimes better than a master of
            one", and admires people who are "Productive rather than Reactive"`,
            experience:`“I never intended to be a Fine Arts student as my aunties decided that I should be a teacher. I
            didn't take exams from other universities aside from Philippine Normal University. I passed
            the exam, but I failed the interview because the interviewer noticed that I wasn't
            wholeheartedly wanted to be an academe person and suggested that begin my career at TUP.
            Anyways, being a Fine Arts students during our time was so 'MAGASTOS". Art materials
            were not accessible to find, unlike today that we can order them thru online store
            (e-commerce). Digital photography and learning digital graphics software were also difficult
            as most of us didn't have the financial capability to support and comply on these
            requirements. We used to borrow and sharing our computers, cameras, paints, brushes, etc.
            Most of us tend to drop our courses/classes as NEW instructors from different art industries
            were hired. They wanted to learn from these new instructors na nagtuturo sa mga lower years.
            "IN" and "COOL" during our time kapag "IRREGULAR" student ka, but not all has the
            financial ability/confidence to drop our class as some didn't want to spend more money for
            repeated projects/courses. I had also planned to drop and shift to Education at PNU again, but
            maybe God had other plans as biglang may dumating na blessing which could finance my
            studies that time. Our batch had also revolted during our time as we didn't want our assigned
            Instructor to our Thesis subject because hindi naman kami natututo sa kanya since first year
            kami. He liked merging his classes para lang magkaroon siya ng time sa kanyang business
            outside the school (chenes hahaha). We wanted a new instructor, hindi kami pumapasok sa
            Thesis class, but unfortunately, sya pa rin ang naging Instructor namin because of some
            legality in the university. But after that, he started to "teach" us, with camera involved as
            proof na nagtuturo daw siya (LOL) So yung years na dapat itinuturo niya samin had been
            squeezed into that sem para lang matuto kami sa Thesis. Just a reminder that if you really
            want to learn, fight for your right as a student to have a quality education that you deserve.
            Our parents are paying taxes to give us a better future, government allots budgets to schools
            to give us a proper and quality education.”`,
            picture:alumni2
        };
        card.push(newCard);
    }
    else if(year == 2010){
        var newCard = [
            {
                fname : "Emmanuel Luis G. Borjal",
                email : "emmanuelluis_borjal@tup.edu.ph",
                genre : 'Multimedia arts',
                bio:`Emmanuel Luis G. Borjal (Multimedia arts), who specializes in Advertising, graphic design, multimedia arts, photography, furniture design, packaging design, indigenous creative crafts, and history of arts, is a graduate of Bachelor of Fine Arts major in Advertising at the Technological University of the Philippines Manila where he finished his Master in Graphics Technology in 2021.

                In 2017, He is a member of a CHED-funded project worth 10 million pesos granted to TUP entitled, "Capability Building for the Establishment of a Center for Innovation and Technology Entrepreneurship" or CITE. Where he successfully contributed to all Visual Communication paraphernalia needs of the said CHED project. Together with the CITE technical working team they were able to published their research entitled, "Issues and Challenges of Technology Business Incubators in the Philippines" in a Scopus indexed journal which was cited 3 times by various research papers.
                
                Currently, he is the Head of the Multimedia Technology Department under the Integrated Research and Training Center. He is also one of the pool of active Faculty Researchers at TUP. Along side with this, he is an Advocate of Gender and Development and a member of TUP-GAD Technical working team
                `,
                experience:`“Studying in a State University is actually very culture shocking for me. Coming from a private school during my elem and highschool days in which all the materials needed to accomplish task are provided by the school. But when I came to TUP, since it is a semi-public university during my time (may tuition fee po kami noon pero mura lang mas mahal materials sa bawat projects) you have to provide for your own materials. Learn not only from my instructors but as well as from my peers. Learning to help when someone is in need, learning to stand alone when I have to. Above all, TUP help me learned that being resourceful amidst all the lapses would elevate me as an individual. Some will not be able to produce outputs without a specific equipment but we learn we can do it alternatively but with the same mastery. Finding a work around the problem is an important key virtue I learned from TUP as a University. TUP is a University that takes pride in honing students who are not only academically ready but also street wise ready. To become a prmier state unviersity at par with all the asean universities. Which I believe is still timely as of today. I take pride that I am a TUP graduate from my Bachelors of Fine Arts gearing towards my Master in Graphics Technology. If you want to pursue fine arts, and would want to explore eventually in the field of Advertisting, Animation, Multimedia, Studio Arts and Photography and with that I can say with all pride and honor, choose the Technological University of the Philippines.”`,
                picture:alumni10
            },
            {
                fname : `Kevin Ortega`,
                email : "kevin_ortega@tup.edu.ph",
                genre : 'Post Production',
                bio:`Kevin is a Visual Effects Artist and a part time instructor at Technological University of the Philippines also has several award and Group show in Visual Art. 
                Currently he is a Creative Supervisor /Post Production Department at APT Entertainment, he involves in different Film and tv series local and international also in the longest noontime show in the Philippines. In his 15 years’ experience ask a Visual Effects Artist most of his job designated is 3D animation, Visual Effects enhancement, Video Editor, Motion Graphics Etc. he is also an awardee in several art completion like shell art competition, FEU on the spot painting completion, MADE, GSIS Art competition and recently Philippine Art Festival.
                `,
                experience:`“Fun and challenging”`,
                picture:alumni11
            },
        ]
        card = newCard
    }
    else if(year == 2015){
        var newCard = {
            fname : "Jhosa Tiozen-Corpuz",
            email : "tiozenjhosa@gmail.com",
            genre : 'Advertising/Academic/Visual Artist',
            quote : 'https://jhotiozen.weebly.com/',
            bio:`Jhosa Tiozen-Corpus is currently a Part-Time Instructor of the Fine Arts Department at
            Technological University of the Philippines.
            She received her Bachelor’s degree in Fine Arts major in Advertising in 2015. Even before
            teaching at TUP, she became a student assistant to her teachers while she was still studying.
            After graduating, she worked as a CTP operator and a Graphic Designer in a printing press
            company. Apart from this, she continues to work as a freelance graphic designer in large
            companies such as Vista Land, Rockwell Primaries and Voodoo Lounge Bar providing a
            variety of services graphic design and marketing collaterals.
            She is currently a social media manager of an outdoor product and continues to work as a
            freelance graphic designer.`,
            experience:`“For me, one of the standout memories from our time as a Fine Arts Students is the guidance
            and discipline imparted by our professors. Thier unwavering commitment to pushing us
            beyond our limits instilled a sense of determination and resilience that has shaped us into
            accomplished and versatile artists we are today. Most of them ay mataas talaga ang standard
            but it challenged us to strive for excellence in every artwork na gagawin namin, every
            composition and every critique session. Yun ung I think na nag-fuel sa amin on our passion
            and propelling us toward success in the world of art.”`,
            picture:alumni3
        }
        card.push(newCard);
    }
    else if(year == 2023){
        var newCard = [
            {
                fname : "Ash Iverson Forlaje",
                email : "ashforlaje233@gmail.com",
                genre : 'Advertising & Paiting',
                quote : 'https://www.facebook.com/ashiverson22/',
                bio:`Ash Iverson is a visual and graphic artist from Malabon City, Philippines. He honed his
                artistic skills during his formative years at Malabon National High School under a Special
                Program in the Arts (SPA). Since then, Ash has been deeply involved in the local art scene,
                participating in competitions and group exhibitions.
                His journey in the arts began in high school, where he discovered his passion for painting.
                Notably, Ash achieved his first significant milestone as the grand winner of the Pahiyas
                Mural Painting Competition in 2017 during his high school years.
                Before graduating with a Bachelor of Fine Arts, Ash Iverson achieved a memorable victory
                during his final year of school. He secured the Grand Prize at the UST Annual Inter-School
                Painting Competition in 2023, recognising his alma mater and affirming his dedication to the
                craft.`,
                experience:`“As a student at the Technological University of the Philippines (TUP), my journey was filled
                with both challenges and moments of joy. However, the primary obstacle I faced during my
                time at the school was the difficulties I encountered with some of my professors.”`,
                picture:alumni7
            },
            {
                fname : `Mary Nicole "Lev" Manlunas`,
                email : "manlunas.co@gmail.com",
                genre : 'Advertising',
                quote : 'https://www.behance.net/levnuous',
                bio:`My name is Lev Manlunas, and I graduated college with Magna Cum Laude with a degree of
                Bachelors of Fine Arts, Major in Advertising in Technological University of the Philippines. I
                utilize my degree to polish my own brand and merchandise production in conventions, and
                artists events.
                Most of the time – I do Freelancing in Graphic designing and illustrations, and mostly I use
                my time to read books and articles that would broaden my advocacy and knowledge about the
                community I belong with, LGBTQIA+.
                In the future, I aspire to be an advocate and a creative director to further serve the minority
                groups while doing what I’m passionate about since I strongly believe in the change that arts
                could bring into people’s hearts.`,
                experience:`“My experience as a Fine Arts student in TUP-M was a bit of a rollercoaster adventure. Our
                batch wasn’t able to maximize our time inside the campus because of the Pandemic and
                online classes, so we had to make our college experience as memorable as possible in our
                own creative way. One of the best memories we have was the very first DragDen event in the
                CAFA Atrium, and we were happy to be the start of the progressiveness towards diversity of
                our beloved campus.”`,
                picture:alumni8
            },
            {
                fname : `Poula Andrei Sitjar`,
                email : "polaisitjar15@gmail.com",
                genre : 'Painting',
                quote : 'https://www.instagram.com/polai.sitjar15',
                bio:`Poula Andrei Sitjar, 23, graduated cum laude with a bachelor's degree in Fine Arts majoring
                in Advertising from the Technological University of the Philippines-Manila. Now a full-time
                artist, Poula's paintings, often featuring women and themes of isolation,are showcased at the
                Ysobel Art Gallery.`,
                experience:`“Marami akong nadiscover like building a connection. Kumuha lang talaga ako ng fine arts
                course kasi ayoko maging boring pagkatao ko and hindi ko rin aakalain na magiging career
                ko ito and 'yung opportunities na binigay ng TUP grinab ko na like art in the Park. It's cool
                kasi doon ako nakapag build ng connection. All throughout ng college life ko nakafocus sa
                career ko na mismo.”`,
                picture:alumni9
            },
        ]
        card = newCard
    }

    else if(year == 2022){
        var newCard = [
            {
                fname : "John Cris Marquez",
                email : "jcmarquez950@gmail.com",
                genre : 'Visual Artist and Freelance Photographer',
                quote : 'https://www.facebook.com/JohnCrisRuizMarquez?mibextid=ZbWKwL',
                bio:`John Cris Marquez is a visual artist and fine art photographer based in Obando Bulacan.
                Graduated with a bachelors degree in Fine Arts Major in Advertising in Technological
                University of the Philippines Manila.
                He expresses his appreciation in different facets of life holistically through art and story
                telling. his works features dreams. observations and life long learning and real stories.
                some of his achievement is he has a tv exposure in 2019 in Stand For truth ni atom araullo the
                title of the segment is "TATAY DAGS" featuring the story of the padyak driver with unique
                dress and also featured in on air radio at radyo laverdad, he won the 52nd National shell
                Competition as finalist in acrylic and oil category, and many more this are some of his
                stepping stone to become what he was on current period.`,
                experience:`“Being TUP fine arts student the education that they offer to me amplify my skills and shaped
                my personality to become professional with the help of our dear instructor that gives the true
                essence of having a practice to school to become equipped and ready for the real outside
                world”`,
                picture:alumni4
            },
            {
                fname : "Mary Franz Salazar",
                email : "maryfranzsalazar@gmail.com",
                genre : 'Graphic Design (Advertising)',
                quote : 'https://www.facebook.com/Room113Productions',
                bio:`Mary Franz Salazar is a talented artist who excels in various creative fields such as
                filmmaking, graphic design, and digital illustration. Graduating with Magna Cum Laude from
                the Technological University of the Philippines Manila, her passion for the arts has been
                evident since her childhood. She has explored a wide range of artistic mediums including
                traditional and digital painting, music performance, photography, and filmmaking. However,
                it was in the realms of digital illustration and filmmaking where she found her true passion
                and calling. Renowned for her competitive spirit, Mary has achieved numerous accolades,
                demonstrating her excellence across different platforms.
                Mary's talents reach beyond her academic accomplishments, as she has earned acclaim in
                various art competitions. She was honored as a finalist in prestigious events like the 2019
                MACC Painting Competition and the 2021 SHELL National Student Art Competition.
                Continuing her success, in 2022, Mary participated again in the SHELL National Student Art
                Competition, this time securing second place in the digital fine arts category. Additionally,
                she excelled in the NCCA ASEAN-Philippines Digital Art Contest of 2022, clinching another
                
                second-place victory. These achievements underscore her skill and creativity in the field of
                digital art.
                Apart from her achievements in art competitions, Mary has made a significant impact in the
                field of filmmaking. She stood out as a finalist in the 2019 Pista Ng Pelikulang Pilipino for
                Sine Kabataan and clinched second place in the 2019 NCCA Taga Alog Wisik Short Film
                Competition. Her talents were further recognized when she won Best Director at the 2022
                CineIskool Film Festival and received the title of Most Impactful Film at the 2022 RK
                Rubber Film Festival. Despite her current focus on graphic design, Mary eagerly looks
                forward to returning to digital illustration and filmmaking, motivated by her dedication and
                skills honed at TUP-Manila.`,
                experience:`“Being a TUP Fine Arts student has truly shaped Mary's artistic journey, pushing her to
                explore her talents and reach for excellence. The environment at TUP sparked her creativity
                and instilled in her a drive to excel in every aspect of her craft. TUP holds a special place in
                Mary's heart, serving not just as a school but as a nurturing environment where she found the
                support and encouragement needed to blossom as an artist. Mary is immensely grateful for
                the friendships she formed with her classmates, who became not just fellow students but also
                trusted creative allies. She also cherishes the guidance and mentorship provided by the
                professors who helped her expand her artistic horizons. Mary credits TUP with not only
                helping her grow as an artist but also shaping her into a dedicated student striving for
                academic success.”`,
                picture:alumni5
            },
        ]
        card = newCard
    }


    const cards = card.map((item, index) => (
        <StudentAlumniCards 
          key={index}
          year={res.year} 
          name={item.fname} 
          email={item.email} 
          genre={item.genre} 
          quote={item.quote} 
          bio={item.bio} 
          experience={item.experience} 
          picture={item.picture}
        />
    ));


    
    return(
        <>
            <div>
                <div className='border-0 border-b-2 border-[#9B9B9B]' id ={dynamicId} onClick={onClickDrop}><span className='text-3xl'>BATCH YEAR: {res.year}</span></div>
                {isDrop && (
                    <>{cards}</>
                )}
            </div>
        </>
    )
}
function Alumni(){
    const [isDrop, setIsDrop] = useState(false);
    const onClickDrop=()=>{
        setIsDrop(!isDrop)
    }
    const [alumni, setAlumni] = useState([]); // Initialize state to an empty array
    useEffect(() => {
        // Define an async function to fetch data
        const fetchAlumni = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/alumni?populate=*`,{
                headers: {
                    'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`
                  }
            });
            const data = response.data.data;
            // Check if data is an array and set state
            if (Array.isArray(data)) {
                const mappedAlumni = data.map(item => {
                const { id, attributes } = item;
                const { Name, Year, Email, Genre, Quote, Bio, Experience , Picture} = attributes;
                const imageUrl = Picture.data.attributes.url;
                return {
                    id,
                    name: Name,
                    year: Year,
                    email: Email,
                    picture : import.meta.env.VITE_API_URL + imageUrl,
                    genre: Genre,
                    quote: Quote,
                    bio: Bio,
                    experience: Experience
                };
                });
                setAlumni(mappedAlumni);
            } else {
            console.error('Response data is not an array');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };

        fetchAlumni(); // Call the fetch function
    }, []); // Empty dependency array to run only on mount

    const years = alumni.map(alumna => alumna.year);
    const uniqueYears = [...new Set(years)].sort((a, b) => a - b);


    return(
        <div className='p-6 space-y-2' id='alumniSection'>
            <div className='text-center flex flex-col space-y-3 text-black'>
                <span className="xl:text-3xl text-xl text-testimonialTitle ">FINE ARTS DEPARTMENTS</span>
                <span className="xl:text-3xl text-xl">ALUMNI</span>
            </div>
            <div className='grid grid-cols-1 xl:grid-cols-3 gap-3 py-6 text-[#9B9B9B] gap-y-3'>
                {/* <AlumniCards year="2000"/>
                <AlumniCards year="2009"/>
                <AlumniCards year="2010"/>
                <AlumniCards year="2015"/>
                <AlumniCards year="2022"/>
                <AlumniCards year="2023"/> */}
                {/* <div className='border-0 border-b-2 border-[#9B9B9B]' id ={dynamicId} onClick={onClickDrop}><span className='text-3xl'>BATCH YEAR: {res.year}</span></div> */}
                {
                    uniqueYears.map((year,index) => (
                        <div key = {index}>
                            <div>
                                <div className='border-0 border-b-2 border-[#9B9B9B]' id={index} onClick={onClickDrop}><span className='text-3xl'>BATCH YEAR: {year}</span></div>
                                {
                                    alumni.filter(alumna => alumna.year === year).map( alumna =>(
                                        <StudentAlumniCards 
                                            key={alumna.id}
                                            year={alumna.year} 
                                            name={alumna.name} 
                                            email={alumna.email} 
                                            genre={alumna.genre} 
                                            quote={alumna.quote} 
                                            bio={alumna.bio} 
                                            experience={alumna.experience} 
                                            picture={alumna.picture}
                                            />
                                    ))
                                }
                            </div>    
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default function Student(ref){
    const handleClickScroll = () => {
        if(ref.scrollTo != undefined){
            const element = document.getElementById(ref.scrollTo)
            element.scrollIntoView({behavior:'smooth'});
        }
        else{
            window.scrollTo({top: 0,behavior:'smooth'})
        }
    };
    useEffect(() => {
        handleClickScroll();
    }, [ref.scrollTo]);
    return(
        <div>
            <NavBar/>
            <div className="w-full">
            <div className='relative'>
                <img src={Header} className='object-cover w-full 2xl:h-[50rem] h-[18rem]'></img>
                <div className='text-white py-3 xl:px-12 px-3 absolute left-0 bottom-0 flex flex-col space-y-1 font-ebgaramond font-[500] w-full leading-tight'>
                    <span className='text-2xl xl:text-3xl'>STUDENT</span>
                    <span className='text-3xl xl:text-5xl'>LIFE</span>
                </div>
            </div>
            <Gallery/>
            <Testimony/>
            <ClassPicture />
            <Events />
            <NewsAndArticles/>
            <Alumni />
            <Footer/>
            </div>
        </div>
    )
}