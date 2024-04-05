import Header from '../components/ui/assets/StudentHead.png'
import NavBar from '../components/ui/NavBar.jsx'
import Gal1 from '../components/ui/assets/gal1.png'
import Gal2 from '../components/ui/assets/gal2.png'
import Gal3 from '../components/ui/assets/gal3.png'
import Gal4 from '../components/ui/assets/gal4.png'
import Gal5 from '../components/ui/assets/gal5.png'
import Gal6 from '../components/ui/assets/gal6.png'
import Gal7 from '../components/ui/assets/gal7.png'
import Gal8 from '../components/ui/assets/gal8.png'
import Gal9 from '../components/ui/assets/gal9.png'
import Gal10 from '../components/ui/assets/gal10.png'
import Gal11 from '../components/ui/assets/gal11.png'
import Gal12 from '../components/ui/assets/gal12.png'
import CP1 from '../components/ui/assets/CP1.jpg'
import CP2 from '../components/ui/assets/CP2.jpg'
import CP3 from '../components/ui/assets/CP3.jpg'
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

import NAA1 from '../components/ui/assets/indayog.png'
import NAA2 from '../components/ui/assets/LunetaArt.png'
import NAA3 from '../components/ui/assets/BFA4B.jpg'
import NAA4 from '../components/ui/assets/BFA4A.jpg'
import NAA5 from '../components/ui/assets/Dexter.png'
import NAA6 from '../components/ui/assets/CARE.jpg'
import NAA7 from '../components/ui/assets/UST.jpg'
import NAA8 from '../components/ui/assets/ArtInThePark.png'
import NAA9 from '../components/ui/assets/CAFASYALAN.jpg'
import NAA10 from '../components/ui/assets/RAMON.jpg'

import jsonData from "../assets/alumni.json"
import { useEffect, useState } from 'react'

import alumni1 from '../components/ui/assets/HERALD.jpg'
import alumnimg1 from '../components/ui/assets/heraldo-1.png'
import alumnimg2 from '../components/ui/assets/heraldo-2.png'
import alumnimg3 from '../components/ui/assets/heraldo-3.png'
import { NavLink, useLocation } from "react-router-dom"
import facebook from '../components/ui/assets/Facebook.png'

function Gallery(){
    return(
    <div>
        <div className='p-6 space-y-3' id='platesSection'>
            <div className='text-center flex flex-col space-y-3 text-black'>
                <span className="xl:text-3xl text-xl font-[500]">FINE ARTS DEPARTMENT</span>
                <span className="xl:text-3xl text-xl font-[500]">BEST PLATES</span>
                <span className='xl:text-3xl text-md xl:text-center text-left px-8  font-ebgaramond font-[400]'>"Unique artworks crafted by students as part of their academic curriculum, each plate representing their specific subject or field of study."</span>
            </div>
            <div className='grid xl:grid-cols-3 grid-cols-1 gap-1'>
                <div className='flex flex-row space-x-1 w-full'>
                    <div className='flex flex-col space-y-1 w-1/2 h-full'>
                        <GalleryCard imgSrc={Gal1} title="Deadly Stubbornness" material="Acrylic on Cartolina" canvas="22' x 28'" artist="Rafael O. Bodota" section="BFA-4C"/>
                        <GalleryCard imgSrc={Gal3}/>
                    </div>
                    <div className='flex flex-col space-y-1 w-1/2'>
                        <GalleryCard imgSrc={Gal2}/>
                        <GalleryCard imgSrc={Gal4}/>
                    </div>
                </div>
                <div className='flex flex-row space-x-1 w-full'>
                    <div className='flex flex-col space-y-1 w-1/2'>
                        <GalleryCard imgSrc={Gal5}/>
                        <GalleryCard imgSrc={Gal7}/>
                    </div>
                    <div className='flex flex-col space-y-1 w-1/2'>
                        <GalleryCard imgSrc={Gal6}/>
                        <GalleryCard imgSrc={Gal8}/>
                    </div>
                </div>
                <div className='flex flex-row space-x-1 w-full'>
                    <div className='flex flex-col space-y-1 w-1/2'>
                        <GalleryCard imgSrc={Gal9}/>
                        <GalleryCard imgSrc={Gal11}/>
                    </div>
                    <div className='flex flex-col space-y-1 w-1/2'>
                        <GalleryCard imgSrc={Gal10}/>
                        <GalleryCard imgSrc={Gal12}/>
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
        <div className='py-6 font-roboto font-[400] text-black 2xl:h-[40rem] h-[30rem]'>
            <div className='text-center flex flex-col space-y-3 font-[500]'>
                <span className="xl:text-3xl text-xl text-testimonialTitle ">FINE ARTS DEPARTMENTS</span>
                <span className="xl:text-3xl text-xl">EXPERIENCE TESTIMONIALS</span>
            </div>
            <Carousel className="w-full flex justify-center max-w-full px-6 py-6">
                <CarouselContent>
                    <CarouselItem key="0" className="2xl:basis-1/3">
                    <div className='p-1'>
                        <Card className="flex justify-center border-none">
                            <CardContent className="flex flex-col bg-cardbg font-[600] justify-between p-6 h-auto 2xl:min-h-[18rem] min-h-[10rem] lg:w-[32rem] lg:text-base text-2xs w-80 rounded-xl space-y-5">
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
                                <div>
                                    <span>Hannah Gozon<br></br></span>
                                    <span>BFA - 1A</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    </CarouselItem>

                    <CarouselItem key="1" className="2xl:basis-1/3" >
                    <div className='p-1'>
                        <Card className="flex justify-center border-none">
                            <CardContent className="flex flex-col bg-cardbg font-[600] justify-between p-6 h-auto 2xl:min-h-[18rem] min-h-[10rem] lg:w-[32rem] lg:text-base text-2xs w-80 rounded-xl space-y-5">
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
                                <div>
                                    <span>Frank Genesis P. Lomboy<br></br></span>
                                    <span>BFA - 4A</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    </CarouselItem>

                    <CarouselItem key="2" className="2xl:basis-1/3">
                    <div className='p-1'>
                        <Card className="flex justify-center border-none">
                            <CardContent className="flex flex-col bg-cardbg font-[600] justify-between p-6 h-auto 2xl:min-h-[18rem] min-h-[10rem] lg:w-[32rem] lg:text-base text-2xs w-80 rounded-xl space-y-5">
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
                                <div>
                                    <span>Desirei G. Roca<br></br></span>
                                    <span>BFA - 3A</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    </CarouselItem>

                    <CarouselItem key="3" className="2xl:basis-1/3">
                    <div className='p-1'>
                        <Card className="flex justify-center border-none">
                            <CardContent className="flex flex-col bg-cardbg font-[600] justify-between p-6 h-auto 2xl:min-h-[18rem] min-h-[10rem] lg:w-[32rem] lg:text-base text-2xs w-80 rounded-xl space-y-5">
                                <div>
                                    <span className='font-[400]'>“Nagpapasalamat ako sa Fine Arts Department ng TUP-Manila sa pagbibigay 
                                    sa akin ng kaalaman at kasanayan sa sining at sa pagpapalago bilang indibidwal.
                                        {count == 4 ? <span> Na-inspire ako ng mga guro at kasama
                                        ang aking mga kapwa mag-aaral, masigasig kaming nagtutulungan sa aming paglalakbay sa mundo
                                        ng sining. Ang departamento ay hindi lamang nagbibigay ng edukasyon kundi pati na rin ng isang
                                        komunidad na nagtataguyod ng pag-unlad ng kakayahan at kasanayan. Salamat sa lahat ng
                                        oportunidad at sa mga kaibigan at guro na aking nakilala.” 
                                        <button onClick={() => setCount(0)} className='font-[600]'> See Less</button></span> : 
                                        <button onClick={() => setCount(4)} className='font-[600]'>..See More</button>}
                                    </span>
                                </div>
                                <div>
                                    <span>Carlos Hermo A. Baldemoro<br></br></span>
                                    <span>BFA - 3B</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    </CarouselItem>
                </CarouselContent>
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
            <Carousel className="w-full flex justify-center max-w-full px-6 py-6">
                <CarouselContent>
                    <CarouselItem key="0" className="2xl:basis-1/3 overflow-hidden">
                        <img src={CP1} className='rounded-xl w-full 2xl:h-[24rem] h-[48rem] object-cover'></img>
                    </CarouselItem>

                    <CarouselItem key="1" className="2xl:basis-1/3 overflow-hidden">
                        <img src={CP2} className='rounded-xl w-full 2xl:h-[24rem] h-[48rem] object-cover'></img>
                    </CarouselItem>

                    <CarouselItem key="2" className="2xl:basis-1/3 overflow-hidden">
                        <img src={CP3} className='rounded-xl w-full 2xl:h-[24rem] h-[48rem] object-cover'></img>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
        </div>
    )
}

function Events(){
    return(
        <div className='py-12 px-12 font-roboto text-white' id='eventsSection'>
            <div className='text-center flex flex-col space-y-3 text-black'>
                <span className="xl:text-3xl text-xl text-testimonialTitle ">FINE ARTS DEPARTMENTS</span>
                <span className="xl:text-3xl text-xl">EVENTS</span>
            </div>
            <div className='flex 2xl:flex-row 2xl:space-y-0 space-y-6 py-6 justify-between flex-col'>
                <EventCard title="KULTURA SA TELA 2023" bgImg="bg-[url('/src/components/ui/assets/KST.jpg')]" description="Experience the fusion of creativity and culture as the Bachelor of Fine Arts major in Advertising, 3rd-year students from sections A and B, along with their subject professor, Mrs. Leticia L. Paldez, proudly present 'KULTURA SA TELA: Philippine Culture through Fashion.' Held on June 14, 2023, from 1:00 PM to 5:00 PM at the prestigious IRTC Conference Hall, Technological University of the Philippines - Manila, this event redefines the essence of style and culture. More than just a fashion showcase, 'KULTURA SA TELA' celebrates Filipino heritage, innovation, and the transformative power of art. Prepare to be inspired as these talented students take you on a journey through the vibrant tapestry of Filipino culture, leaving an indelible mark on your senses and imagination."
                description1=" Attendees were treated to a visual feast as models strutted down the runway in elaborate costumes that seamlessly blended contemporary fashion with traditional Filipino motifs. Vibrant colours, intricate beadwork, and flowing silhouettes captivated the audience, highlighting the students' ingenuity and dedication to their craft. Beyond the aesthetic appeal, 'Kultura sa Tela' served as a cultural exchange and appreciation platform, fostering a deeper understanding of Philippine heritage among local and international spectators. As the event came to a close, it left a lasting impression, inspiring admiration for the talent and creativity of the students and reinforcing the importance of preserving and celebrating Filipino culture through the art of fashion.
                    "/>
                <EventCard title="HALA HALA 2023" bgImg="bg-[url('/src/components/ui/assets/HALA.jpg')]" description="'Hala-Hala: Pinong Sining Paningningin' was an electrifying showcase of creativity and talent organised by the Bachelor of Fine Arts major in Advertising, 4th-year students of section B, under their esteemed subject professor, Ernest Joseph Garcia. The event, which took place on December 14-15 at the CAFA atrium during the Technological University of the Philippines Foundation Day, was a testament to the dedication and passion of these budding artists."
                description1="The event featured various attractions, including captivating band performances by renowned acts such as Maize, Longganisa, Da Flamingguards, and Lil Kingdom Crew, setting the stage for an energetic and dynamic atmosphere. Adding to the excitement were the mesmerising drag performances by Draga Queen performers Maki Doll, Veronica Storm, It's WXYZ, Tangerine, and the one and only Slaytina, captivating the audience with their dazzling performances. Additionally, the event boasted vibrant dancing, engaging booths showcasing various artworks and crafts, food stalls, interactive games, and an open mic session where attendees could showcase their talents. Culminating the festivities is the eagerly anticipated Fine Arts night, where the spotlight will shine on the incredible talents of TUP's aspiring artists, leaving a lasting impression on all who attend. 'Hala-Hala: Pinong Sining Paningningin' is more than just an event; it's a celebration of creativity, passion, and the indomitable spirit of the artistic community at TUP."
                />
                <EventCard title="GAWAD DAKILA YEAR 2 2024" bgImg="bg-[url('/src/components/ui/assets/GAWAD.jpg')]" description="In its second year, Gawad Dakila, spearheaded by the Fine Arts students of the Technological University of the Philippines-Manila, under the mentorship of their esteemed professor, Mr. Rolando Jay Defero, continues to serve as a beacon of recognition for stories illuminating the diverse facets of human existence. Featuring narratives both on camera and behind the lenses, showcased through documentaries such as 'Ani ni Ina' by Istudyo Kolab, 'Ambisyong Tumaliwas' by BeeHype, 'Walang Patay, Walang Buhay' by Kariman, and 'Araw-Araw sa Gilid-Gilid' by Aimfire, each serving as a testament to the power of visual storytelling in capturing the essence of the human experience, where the four life stories depicted transcend mere tales, offering profound reflections of resilience, hope, and the intricacies of existence. This invites viewers to empathise, reflect, and appreciate the rich tapestry of life's stories portrayed through the lens of Gawad Dakila Year 2."
                description1="On February 9, 2024, at 5 PM, the Gawad Dakila YouTube Channel unveiled a series of films designed to take viewers on a profound journey through the depths of human existence. These cinematic creations promise to immerse audiences in a rich tapestry of raw emotions and genuine insights into the complexities of life. Delving into real-life narratives, they explore a range of themes, including women's empowerment, the challenges faced when one's occupation diverges from one's educational background, the remarkable resilience exhibited by communities residing amidst cemetery grounds, and the daily trials and triumphs experienced by street vendors. Each documentary serves as a poignant testament to the boundless diversity and unwavering fortitude of the human spirit, offering viewers a compelling glimpse into the multifaceted nature of the human experience."
                />
                <EventCard title="GAWAD DAKILA THE FIRST FILM FESTIVAL 2022-2023" bgImg="bg-[url('/src/components/ui/assets/GAWAD23.jpg')]" description="The highly anticipated Gawad Dakila Film Festival 2023 commences with a riveting presentation from Lente Productions as the talented filmmakers of BFA-4E unveil their masterpiece, 'Hanggang Dulo.' This compelling creation promises to captivate audiences with its depth and resonance, setting the stage for an extraordinary cinematic journey. Meanwhile, Himuyong Productions, representing BFA-4C, presents their contribution, a captivating Class Film tailored for the esteemed festival. With meticulous craftsmanship and unwavering dedication, they create a cinematic marvel that will leave a lasting impression. As anticipation peaks, the film festival's grand premiere is set for December 22, 2022, at 3:00 PM, exclusively on the Gawad Dakila YouTube account, marking the beginning of an exhilarating showcase of talent and creativity."
                description1="Launching into the digital realm on December 31, 2022, is an electrifying talent showcase as BFA-4C and BFA-4E present their latest creations. Comprising six gripping narratives each, these Pandemic Short Films for the GAWAD DAKILA FILM FESTIVAL 2023 promise to enthral audiences with diverse themes and compelling storytelling. From BFA-4C, viewers can expect thought-provoking tales such as 'PaperPlanes' by StudioBlue5, 'RealWorld' by MundoProduction, the intriguing 'SpaghettingPalabas' by BadlingsProduction, the reflective 'Hiatus' by NineOclockProduction, the resonant 'AyudaPo' by DaluyongProductions, and the dreamy 'PaHinga' by MarahuyoProductions. Meanwhile, BFA-4E presents an equally riveting lineup, featuring the dynamic 'Rife' by EliteProductions, the strategic 'Checkmate' by GurumatikaProductions, the poignant 'KasamaKa' by FlickedProductions, the gripping 'Hawakamay' by PathfindersProductions, the profound 'ProvisionDay' by MovileProductions, and the enigmatic 'Masked' by SnapProductions. As the curtain rises on these cinematic endeavours, audiences are in for an immersive experience that transcends boundaries and captivates the imagination."
                description2="The third wave of films showcased at the GAWAD DAKILA FILM FESTIVAL 2023, set for January 10, presents an enthralling assortment of movies meticulously crafted by BFA 4C/4E. These Official Genre Films for the festival offer a diverse array of genres, including Romance, Adventure, Musical, Film Noir, Sci-Fi, and Horror, ensuring an unforgettable viewing experience. Immerse yourself in the rich tapestry of storytelling with selections such as 'Room 474' by StudioBlue5xMundoProductions, 'Usahay Nagamahay Ako' by 9OClockxDaluyongProductions, the enigmatic 'Okulus' by BadlingsProduction, the evocative 'Makapiling Ka' by MarahuyoProduction, the lyrical 'The Lyricist' by ElitexMovileProductions, and the intriguing 'Project Redo' by FlickedxSnapProductions, as well as the captivating 'Cupid Pysche' by GurumatikaxPathfinders. Each film poster serves as a portal to a world teeming with mystery, emotion, and thrills, beckoning viewers to embark on a journey of discovery. Dive into the unknown and lose yourself in the enchantment of cinema with these captivating and thought-provoking films."
                />
                <EventCard title="ART FOR THE SOUL 2022" bgImg="bg-[url('/src/components/ui/assets/AFTS.jpg')]" description="On November 23, 2022, a transformative event took place, the 'Art for the Soul' webinar, hosted by the Bachelor of Fine Arts major in Advertising, 3rd-year students of section A, under the expert guidance of Professor Leticia L. Paldez. This event served as a crucible for innovation, igniting participants' imaginations and propelling them into the dynamic intersection of art and advertising. From the early hours of 9:00 AM to the afternoon's close at 1:00 PM via Ms Teams, students delved into various disciplines, including media production, video storyboarding, videography, video editing (animation), and art therapy. "
                    description1="Led by distinguished speakers Mr Rommel Pastrana Celespara, Mr Angelo Luigi A. Domingo, and Ms Filipina Deguzman, this event promises to be an enlightening journey through creativity, expression, and healing. Through engaging discussions, practical demonstrations, and interactive exercises, attendees will learn about the technical aspects of media production and discover art's profound impact on mental health and well-being. Whether you're a seasoned media professional, a budding artist, or simply someone interested in the healing power of creativity, 'Art for the Soul' promises to be an enriching experience that transcends the boundaries of traditional webinars, leaving a lasting impression on hearts and minds alike."
                />
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
                    <div className="text-center font-ebgaramond flex flex-col text-white">
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
                    <div className='flex flex-col font-ebgaramond justify-between p-3 text-left'>
                        <span className='font-[500] 2xl:text-xl text-xs'>{res.title}</span>
                        <span>Learn More</span>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}

function NewsAndArticles(){
    return(
        <div className='p-6 space-y-2'>
            <div className='text-center flex flex-col space-y-3 text-black'>
                <span className="xl:text-3xl text-xl text-testimonialTitle ">FINE ARTS DEPARTMENTS</span>
                <span className="xl:text-3xl text-xl">NEWS / ARTICLES</span>
            </div>
            <div className='grid grid-cols-1 xl:grid-cols-3 gap-2 py-6'>
                <NAAdialog title="PINAKA-KAVOUGE NA BOOTH-TUP INDAYOG 2023" imgSrc={NAA1} description="Various student organizations have
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
                    />
            </div>
        </div>
    )
}

function StudentAlumniCards(res){
    return(
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <button className='w-full flex flex-row px-6 p-3 hover:bg-[#EED3D9] space-x-3'>
                        <img src={res.picture} className='aspect-square h-[4rem]'></img>
                        <div className='flex flex-col text-left'>
                            <span className='font-ebgaramond font-[600] text-xl'>{res.name}</span>
                            <span>BATCH YEAR {res.year}</span>
                        </div>
                    </button>
                </DialogTrigger>
                <DialogContent className="w-full bg-transparent border-none overflow-y-scroll max-h-screen no-scrollbar">
                    <div className="flex flex-col flex justify-center">
                        <div className="flex flex-row justify-center"><img src={res.picture} className='h-auto w-40'></img></div>
                        <div className="text-center font-ebgaramond flex flex-col text-white">
                            <span className="text-xl xl:text-4xl font-[600]">{res.name}</span>
                            <span className="text-xs xl:text-2xl text-center font-[600]">BATCH YEAR {res.year}</span>
                            <span className="text-xs xl:text-xl text-center">{res.email}</span>
                            <span className="text-xs xl:text-xl text-center">{res.genre}</span>
                            <span>{res.quote}</span>
                            <div className='flex flex-row w-full justify-center py-6'>
                                <span className='text-left xl:w-1/2 w-full'>{res.bio}</span>
                            </div>
                            <div className='flex flex-row w-full justify-center py-6'>
                                <span className='text-left xl:w-1/2 w-full'>{res.experience}</span>
                            </div>
                            <div className='flex xl:flex-row flex-col w-full justify-center'>
                                <img src={res.img1} className='h-48'/>
                                <img src={res.img2} className='h-48'/>
                                <img src={res.img3} className='h-48'/>
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
}
function AlumniCards(res){
    const dynamicId = "drop-" + res.year
    const [isDrop, setIsDrop] = useState(false);
    const onClickDrop=()=>{
        setIsDrop(!isDrop)
    }
    return(
        <>
            <div>
                <div className='border-0 border-b-2 border-[#9B9B9B]' id ={dynamicId} onClick={onClickDrop}><span className='text-3xl'>BATCH YEAR: {res.year}</span></div>
                {isDrop && (
                    <div className='text-black animate-accordion-down w-full overflow-hidden'>
                        <StudentAlumniCards name='Heraldo G. Corpuz' year={res.year} email='corpusherald23@gmail.com' genre='Visual Artist / Painting' quote='"Success in life is a long hard climb"'
                        bio="Herald Corpus says. As a young child, he developed a close kinship with the nature. That kinship is the basis for his art, in which the textures of his artwork turned into intricate line
                        art.
                       Herald Corpus is a multidisciplinary visual artist and environmentalist; his art practice traverses from theatre art to ethnomusicology. His ideology is rooted to his daily life
                        experiences and encounters, navigating sociopolitical struggles and spiritual triumph of
                        success. He is a trailblazer of many ideas, engaging off grid with “Mother Nature” that
                        inspire and encompasses his creative work and cleanse his mind, body, and soul. His earliest art can be traced to his passion for climbing mountains."
                       experience='“As a student, may mga certain experiences na naging bahagi ng aking journey. One such
                       moment for me was receiving a grade of 1.0 in our Anatomy subject, a challenging subject
                        that tested my perseverance and resilience. Yet, kahit may mga academic trials, isa sa mga
                        nag stand out as vibrant highlight ng aking pagiging Fine Arts Student ay ang pag participate
                       sa mga various student art competitions. Not only did these events ignite yung aking creative
                       passion, but they also provided the opportunity to forge connections with students from other
                       schools. Yung friendship, nanganak lang from shared artistic endeavors, mga struggle when
                       joing a competitions, na I think nag-enriched sa aming mga buhay with lasting fellowship and
                       support.”'
                       picture={alumni1}
                       img1={alumnimg1}
                       img2={alumnimg2}
                       img3={alumnimg3}
                    />
                    </div>
                )}
            </div>
        </>
    )
}

function Alumni(){
    return(
        <div className='p-6 space-y-2' id='alumniSection'>
            <div className='text-center flex flex-col space-y-3 text-black' >
                <span className="xl:text-3xl text-xl text-testimonialTitle ">FINE ARTS DEPARTMENTS</span>
                <span className="xl:text-3xl text-xl">ALUMNI</span>
            </div>
            <div className='grid grid-cols-1 xl:grid-cols-3 gap-3 py-6 text-[#9B9B9B] gap-y-3'>
                <AlumniCards year="2000"/>
                <AlumniCards year="2009"/>
                <AlumniCards year="2015"/>
                <AlumniCards year="2022"/>
                <AlumniCards year="2023"/>
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