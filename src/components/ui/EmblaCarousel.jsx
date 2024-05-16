import React, { useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import './css/carousel.css'
import { useState } from 'react'
import vid from './assets/FAD-VIDEO-COMPILATION_1.mp4'
import alumimg from './assets/ALUMNI.png'
import eventimg from './assets/EVENT.png'
import exhibitimg from './assets/Exhibit.png'
import picture from './assets/PLATE.png'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay"
import { NavLink } from 'react-router-dom'
import { ChevronLeft, ChevronRight, Dot } from 'lucide-react'


export default function EmblaCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ playOnInit: true, delay: 5000 })
  ])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', () => {
        const index = emblaApi.selectedScrollSnap(); // Get the index of the selected scroll snap
        setSelectedIndex(index)
      });
    }
  }, [emblaApi])

  document.onkeydown = function (e) {
    var keyCode = e.key;
    if(keyCode === 'ArrowRight') {
      emblaApi.scrollNext();
    }
    else if(keyCode === 'ArrowLeft') {
      emblaApi.scrollPrev();
    }
    };

  return (
    <div className="embla relative w-full h-auto" ref={emblaRef}>
      <div className="embla__container flex relative w-full xl:h-[50rem] h-[30rem]">
        <div className='embla__slide relative h-full' key='0'>
          <div className='h-full'>
            <Card className="border-black h-full">
              <CardContent className="p-0 bg-cover flex items-left justify-left flex max-w-full w-full h-full">
                <div className='relative w-full'>
                  <video src={vid} autoPlay loop muted className='object-cover object-cover w-full h-full'></video>
                  <div className='text-white py-3 xl:px-12 px-3 absolute left-0 bottom-0 flex flex-col space-y-1 font-ebgaramond font-[500] w-full leading-tight'>
                    <span className='text-2xs xl:text-3xl'>TECHNOLOGICAL UNIVERSITY<br/> OF THE PHILIPPINES - MANILA</span>
                    <span className='text-3xl xl:text-5xl'>FINE ARTS DEPARTMENT</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className='embla__slide relative h-full' key='1'>
          <div className='h-full'>
            <Card className="border-black h-full">
              <CardContent className="p-0 bg-cover flex items-left justify-left flex max-w-full w-full h-full">
                <div className='relative w-full'>
                  <img src={picture} className='lg:object-fill object-cover w-full h-full'></img>
                  <div className='text-white py-3 xl:px-12 px-3 absolute left-0 bottom-0 flex flex-col font-ebgaramond font-[500] w-full leading-tight'>
                    <span className='text-md xl:text-3xl'>FINE ARTS DEPARTMENT</span>
                    <span className='text-5xl xl:text-5xl'>PLATES</span>
                    <NavLink to='/fad/plates' className="w-1/3 xl:w-1/6"><Button className="text-white bg-learnmore-btn rounded hover:bg-white w-full font-roboto">Learn More</Button></NavLink>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className='embla__slide relative h-full' key='2'>
          <div className='h-full'>
            <Card className="border-black h-full">
              <CardContent className="p-0 bg-cover flex items-left justify-left flex max-w-full w-full h-full">
                <div className='relative w-full h-full'>
                  <img src={eventimg} className='lg:object-fill object-cover w-full h-full'></img>
                  <div className='text-white py-3 xl:px-12 px-3 absolute left-0 bottom-0 flex flex-col font-ebgaramond font-[500] w-full leading-tight'>
                    <span className='text-md xl:text-3xl'>FINE ARTS DEPARTMENT</span>
                    <span className='text-5xl xl:text-5xl'>EVENTS</span>
                    <NavLink to='/fad/events' className="w-1/4 xl:w-1/6"><Button className="text-white bg-learnmore-btn rounded hover:bg-white w-full font-roboto">Learn More</Button></NavLink>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className='embla__slide relative h-full' key='3'>
          <div className='h-full'>
            <Card className="border-black h-full">
              <CardContent className="p-0 bg-cover flex items-left justify-left flex max-w-full w-full h-full">
                <div className='relative w-full h-full'>
                  <img src={exhibitimg} className='lg:object-fill object-cover w-full h-full'></img>
                  <div className='text-white py-3 xl:px-12 px-3 absolute left-0 bottom-0 flex flex-col font-ebgaramond font-[500] w-full leading-tight'>
                    <span className='text-md xl:text-3xl'>FINE ARTS DEPARTMENT</span>
                    <span className='text-5xl xl:text-5xl'>EXHIBIT</span>
                    <NavLink to='/fad/exhibit' className="w-1/4 xl:w-1/6"><Button className="text-white bg-learnmore-btn rounded hover:bg-white w-full font-roboto">Learn More</Button></NavLink>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className='embla__slide' key='4'>
          <div className='h-full'>
            <Card className="border-black h-full">
              <CardContent className="p-0 bg-cover flex items-left justify-left flex max-w-full w-full h-full">
                <div className='relative w-full h-full'>
                  <img src={alumimg} className='lg:object-fill object-cover w-full h-full'></img>
                  <div className='text-white py-3 xl:px-12 px-3 absolute left-0 bottom-0 flex flex-col font-ebgaramond font-[500] w-full leading-tight'>
                    <span className='text-md xl:text-3xl'>FINE ARTS DEPARTMENT</span>
                    <span className='text-5xl xl:text-5xl'>ALUMNI</span>
                    <NavLink to='/fad/alumni' className="w-1/4 xl:w-1/6"><Button className="text-white bg-learnmore-btn rounded hover:bg-white w-full font-roboto">Learn More</Button></NavLink>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
      </div>
      {/* Buttons */}
      <div className='w-full flex flex-row justify-between p-12 absolute top-1/2 '>
          <button className='transition duration-300 transform hover:scale-105 w-12 h-12 rounded-full bg-white opacity-0 xl:opacity-100' onClick={scrollPrev}> <ChevronLeft className='flex flex-row w-full justify-center'/></button>
          <button className='transition duration-300 transform hover:scale-105 w-12 h-12 rounded-full bg-white opacity-0 xl:opacity-100' onClick={scrollNext}> <ChevronRight className='flex flex-row w-full justify-center'/></button>
      </div>

      <div className='text-white flex flex-row w-full justify-center xl:space-x-3 space-x-0 text-3xl'>
        <Dot color={selectedIndex == 0 ? '#FEB000' : '#F9F9F9'}/>
        <Dot color={selectedIndex == 1 ? '#FEB000' : '#F9F9F9'}/>
        <Dot color={selectedIndex == 2 ? '#FEB000' : '#F9F9F9'}/>
        <Dot color={selectedIndex == 3 ? '#FEB000' : '#F9F9F9'}/>
        <Dot color={selectedIndex == 4 ? '#FEB000' : '#F9F9F9'}/>
      </div>
    </div>
  )
}