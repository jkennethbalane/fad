import React, { useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import './css/carousel.css'
import { useState } from 'react'
import vid from './assets/FAD-VIDEO-COMPILATION.mp4'
import alumimg from './assets/ALUMNI.png'
import eventimg from './assets/EVENT.png'
import exhibitimg from './assets/Exhibit.png'
import picture from './assets/PLATE.png'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay"
import { NavLink } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'


export default function EmblaCarousel() {
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
      // console.log(emblaApi.slideNodes()) // Access API
    }
  }, [emblaApi])

  return (
    <div className="embla relative" ref={emblaRef}>
      <div className="embla__container flex relative">
        <div className='embla__slide'>
          <div>
            <Card className="border-black">
              <CardContent className="p-0 bg-cover flex items-left justify-left flex max-w-full w-full">
                <div className='relative'>
                  <video src={vid} autoPlay loop muted className='xl:h-full object-cover h-[30rem]'></video>
                  <div className='text-white py-3 xl:px-12 px-3 absolute left-0 bottom-0 flex flex-col space-y-1 font-ebgaramond font-[500] w-full leading-tight'>
                    <span className='text-2xs xl:text-3xl'>TECHNOLOGICAL UNIVERSITY<br/> OF THE PHILIPPINES - MANILA</span>
                    <span className='text-3xl xl:text-5xl'>FINE ARTS DEPARTMENT</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className='embla__slide'>
          <div>
            <Card className="border-black">
              <CardContent className="p-0 bg-cover flex items-left justify-left flex">
                <div className='relative'>
                  <img src={picture} className='xl:h-full object-cover h-[30rem]'></img>
                  <div className='text-white py-3 xl:px-12 px-3 absolute left-0 bottom-0 flex flex-col font-ebgaramond font-[500] w-full leading-tight'>
                    <span className='text-md xl:text-3xl'>FINE ARTS DEPARTMENT</span>
                    <span className='text-5xl xl:text-5xl'>PLATES</span>
                    <Button className="text-white bg-learnmore-btn rounded hover:bg-white w-1/2 xl:w-1/6 font-roboto">Learn More</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className='embla__slide'>
          <div>
            <Card className="border-black">
              <CardContent className="p-0 bg-cover flex items-left justify-left flex">
                <div className='relative'>
                  <img src={eventimg} className='xl:h-full object-cover h-[30rem]'></img>
                  <div className='text-white py-3 xl:px-12 px-3 absolute left-0 bottom-0 flex flex-col font-ebgaramond font-[500] w-full leading-tight'>
                    <span className='text-md xl:text-3xl'>FINE ARTS DEPARTMENT</span>
                    <span className='text-5xl xl:text-5xl'>EVENTS</span>
                    <Button className="text-white bg-learnmore-btn rounded hover:bg-white w-1/2 xl:w-1/6 font-roboto">Learn More</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className='embla__slide'>
          <div>
            <Card className="border-black">
              <CardContent className="p-0 bg-cover flex items-left justify-left flex">
                <div className='relative'>
                  <img src={exhibitimg} className='xl:h-full object-cover h-[30rem]' ></img>
                  <div className='text-white py-3 xl:px-12 px-3 absolute left-0 bottom-0 flex flex-col font-ebgaramond font-[500] w-full leading-tight'>
                    <span className='text-md xl:text-3xl'>FINE ARTS DEPARTMENT</span>
                    <span className='text-5xl xl:text-5xl'>EXHIBIT</span>
                    <Button className="text-white bg-learnmore-btn rounded hover:bg-white w-1/2 xl:w-1/6 font-roboto">Learn More</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className='embla__slide'>
          <div>
            <Card className="w-full">
              <CardContent className="p-0 bg-cover flex items-left justify-left flex">
                <div className='relative'>
                  <img src={alumimg} className='xl:h-full object-cover h-[30rem] transform'></img>
                  <div className='text-white py-3 xl:px-12 px-3 absolute left-0 bottom-0 flex flex-col font-ebgaramond font-[500] w-full leading-tight'>
                    <span className='text-md xl:text-3xl'>FINE ARTS DEPARTMENT</span>
                    <span className='text-5xl xl:text-5xl'>ALUMNI</span>
                    <Button className="text-white bg-learnmore-btn rounded hover:bg-white w-1/2 xl:w-1/6 font-roboto">Learn More</Button>
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
    </div>
  )
}