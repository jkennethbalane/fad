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
import { useState } from 'react'

function Gallery(){
    return(
    <div>
        <div className='p-6 space-y-3'>
            <div className='text-center flex flex-col space-y-3 text-black'>
                <span className="xl:text-3xl text-xl font-[500]">FINE ARTS DEPARTMENT</span>
                <span className="xl:text-3xl text-xl font-[500]">BEST PLATES</span>
                <span className='xl:text-3xl text-md xl:text-center text-left px-8  font-ebgaramond font-[400]'>"Unique artworks crafted by students as part of their academic curriculum, each plate representing their specific subject or field of study."</span>
            </div>
            <div className='grid xl:grid-cols-3 grid-cols-1 gap-1'>
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
    return(
        <div className='py-6 font-roboto font-[400] text-black'>
            <div className='text-center flex flex-col space-y-3 font-[500]'>
                <span className="xl:text-3xl text-xl text-testimonialTitle ">FINE ARTS DEPARTMENTS</span>
                <span className="xl:text-3xl text-xl">EXPERIENCE TESTIMONIALS</span>
            </div>
            <Carousel className="w-full flex justify-center max-w-full px-6 py-6">
                <CarouselContent>
                    <CarouselItem key="0" className="xl:basis-1/3">
                    <div className='p-1'>
                        <Card className="flex justify-center border-none">
                            <CardContent className="flex flex-col bg-cardbg aspect-square font-[800] justify-between p-6 xl:h-[32rem] xl:text-base text-2xs h-80 rounded-xl space-y-5">
                                <div>
                                    <span>“ As a person who was never really a fan of going to school, what kept me going was the people I met during my time in school. Studying fine arts isn't really the most simple thing, but the people who study alongside me really pushed and motivated me to strive better. One good experience I had so far is the showcasing of talents that the fine arts students do. They truly keep my spark going and give me the energy to become a better artist.
                                    The fine arts community so far has been really welcoming and they also credit where it is due. In the most genuine way possible, I do feel like I am accepted and that I belong.”  </span>
                                </div>
                                <div>
                                    <span>Hannah Gozon<br></br></span>
                                    <span>BFA - 1A</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    </CarouselItem>

                    <CarouselItem key="1" className="xl:basis-1/3" >
                    <div className='p-1'>
                        <Card className="flex justify-center border-none">
                            <CardContent className="flex flex-col bg-cardbg aspect-square font-[800] justify-between p-6 xl:h-[32rem] xl:text-base text-xs h-80 rounded-xl space-y-5">
                                <div>
                                    <span>“ First two years of my college have been bland because of the pandemic. I thought it would be like that all the way up to my senior year. TUP Fine Arts, guided me. They made sure my remaining two years would be full of magical learning and memorable experiences.
                                    Aside from learning, there have been great opportunities that the faculty and staff gave me. It molded the artist who I am today.”  </span>
                                </div>
                                <div>
                                    <span>Frank Genesis P. Lomboy<br></br></span>
                                    <span>BFA - 4A</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    </CarouselItem>

                    <CarouselItem key="2" className="xl:basis-1/3">
                    <div className='p-1'>
                        <Card className="flex justify-center border-none">
                            <CardContent className="flex flex-col bg-cardbg aspect-square font-[800] justify-between p-6 xl:h-[32rem] xl:text-base text-2xs h-80 rounded-xl space-y-5">
                                <div>
                                    <span>“As a student in Fine Arts, I can guarantee na may matututunan dito sa TUP Manila especially on enhancing your skills through traditional and digital arts. More so, sobrang thankful ako sa mga experience na nangyari sa'kin dahil mas lalo akong nag-grow as person and nagboost ang self confidence. 
                                    Lahat ng bagay may impact, siguro dahil na rin sa magagaling ang mga professors, instructors and maging sa mga kaklase na willing kang turuan sa mga knowledge na di kapa pamilyar sa ganto. Kaya sa mga susunod na panahon bago makatapos ng pag-aaral, inaasahan kong mas magiging improving at memorable ang experience ko dito sa TUP Manila”. </span>
                                </div>
                                <div>
                                    <span>Desirei G. Roca<br></br></span>
                                    <span>BFA - 3A</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    </CarouselItem>

                    <CarouselItem key="3" className="xl:basis-1/3">
                    <div className='p-1'>
                        <Card className="flex justify-center border-none">
                            <CardContent className="flex flex-col bg-cardbg aspect-square font-[800] justify-between p-6 xl:h-[32rem] xl:text-base text-xs rounded-xl space-y-5">
                                <div>
                                    <span>Nagpapasalamat ako sa Fine Arts Department ng TUP-Manila sa pagbibigay sa akin ng kaalaman at kasanayan sa sining at sa pagpapalago bilang indibidwal. Na-inspire ako ng mga guro at kasama ang aking mga kapwa mag-aaral, masigasig kaming nagtutulungan sa aming paglalakbay sa mundo ng sining. Ang departamento ay hindi lamang nagbibigay ng edukasyon kundi pati na rin ng isang komunidad na nagtataguyod ng pag-unlad ng kakayahan at kasanayan. Salamat sa lahat ng oportunidad at sa mga kaibigan at guro na aking nakilala.</span>
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

function Events(){
    return(
        <div className='py-12 px-12 font-roboto text-white'>
            <div className='text-center flex flex-col space-y-3 text-black'>
                <span className="xl:text-3xl text-xl text-testimonialTitle ">FINE ARTS DEPARTMENTS</span>
                <span className="xl:text-3xl text-xl">EVENTS</span>
            </div>
            <div className='flex xl:flex-row xl:space-y-0 space-y-6 py-6 justify-between flex-col'>
            
                <EventCard title="KULTURA SA TELA 2023" bgImg="bg-[url('/src/components/ui/assets/KST.jpg')]"/>
                <EventCard title="HALA HALA 2023" bgImg="bg-[url('/src/components/ui/assets/HALA.jpg')]"/>
                <EventCard title="GAWAD DAKILA YEAR 2 2024" bgImg="bg-[url('/src/components/ui/assets/GAWAD.jpg')]"/>
                <EventCard title="GAWAD DAKILA THE FIRST FILM FESTIVAL 2022-2023" bgImg="bg-[url('/src/components/ui/assets/GAWAD23.jpg')]"/>
                <EventCard title="ART FOR THE SOUL 2022" bgImg="bg-[url('/src/components/ui/assets/AFTS.jpg')]"/>
            </div>
        </div>
    )
}

function NAAcard(res){
    return(
        <>
            <Card className="flex">
                <CardContent className="flex flex-row bg-[#D9D9D9] h-auto max-h-28 w-full transition duration-300 transform hover:scale-105 rounded-lg p-0 space-x-3">
                    <img src={res.imgSrc} className='aspect-square w-28'/>
                    <div className='flex flex-col font-ebgaramond justify-between p-3'>
                        <span className='font-[500] xl:text-xl text-xs'>{res.title}</span>
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
                <NAAcard title="PINAKA-KAVOUGE NA BOOTH-TUP INDAYOG 2023" imgSrc={NAA1}/>
                <NAAcard title="LUNETA ART FAIR" imgSrc={NAA2}/>
                <NAAcard title="BFA - 4B ORIGINAL PILIPINO MUSIC (OPM) ART DIRECTION EXHIBITION" imgSrc={NAA3}/>
                <NAAcard title="BFA - 4A FLAVORS OF HOME ART DIRECTION EXHIBITION" imgSrc={NAA4}/>
                <NAAcard title="Meet Dexter Fernandez, the Filipino Artist Behind This International Streetwear Collab" imgSrc={NAA5}/>
                <NAAcard title="CARE PROJECT “TRUST THE PROCESS” ART THERAPY" imgSrc={NAA6}/>
                <NAAcard title="UST ANNUAL INTER-SCHOOL ON-THE-SPOT PAINTING COMPETITION" imgSrc={NAA7}/>
                <NAAcard title="Art in the Park at Jaime Velasquez Park" imgSrc={NAA8}/>
                <NAAcard title="'Tara, G?' CAFAsyalan Advertising Art Direction" imgSrc={NAA9}/>
                <NAAcard title="Celebrating the 25th work anniversary of Sir Ramon Talaga Dela Cruz" imgSrc={NAA10}/>
            </div>
        </div>
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
                       {
                        jsonData[2000].map(entry =>{
                            console.log(entry)
                        })
                       }
                        
                    </div>
                )}
            </div>
        </>
    )
}
function Alumni(){
    return(
        <div className='p-6 space-y-2'>
            <div className='text-center flex flex-col space-y-3 text-black'>
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

export default function Student(){
    return(
        <div>
            <NavBar/>
            <div className="w-full">
                <div className='relative'>
                    <img src={Header} className='xl:h-full object-cover h-[30rem] aspect-video w-full'></img>
                    <div className='text-white py-3 xl:px-12 px-3 absolute left-0 bottom-0 flex flex-col space-y-1 font-ebgaramond font-[500] w-full leading-tight'>
                        <span className='text-2xl xl:text-3xl'>STUDENT</span>
                        <span className='text-3xl xl:text-5xl'>LIFE</span>
                    </div>
                </div>
                <Gallery/>
                <Testimony/>
                <Events/>
                <NewsAndArticles/>
                <Alumni/>
                <Footer/>
            </div>
        </div>
    )
}