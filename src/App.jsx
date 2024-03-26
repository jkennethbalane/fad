import { useState } from 'react'
import vid from './components/ui/assets/FAD-VIDEO-COMPILATION\.mp4'
import alumimg from './components/ui/assets/ALUMNI.png'
import eventimg from './components/ui/assets/EVENT.png'
import exhibitimg from './components/ui/assets/Exhibit.png'
import picture from './components/ui/assets/PLATE.png'
import './App.css'
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

function App() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )
  return (
    <>
      <Carousel className="w-full flex justify-center max-w-full h-96 xl:h-auto">
        <CarouselContent>
          <CarouselItem key="0" >
          <div>
            <Card className="border-black">
              <CardContent className="p-0 bg-cover flex items-left justify-left flex max-w-full w-full">
                <div className='relative'>
                  <video src={vid} autoPlay loop muted className='xl:h-full object-cover h-96'></video>
                  <div className='text-white py-3 px-12 absolute left-0 bottom-0 flex flex-col space-y-1 font-ebgaramond font-[500] w-full'>
                    <span className='text-2xs xl:text-3xl'>TECHNOLOGICAL UNIVERSITY<br/> OF THE PHILIPPINES - MANILA</span>
                    <span className='text-3xl xl:text-5xl'>FINE ARTS DEPARTMENT</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          </CarouselItem>
          <CarouselItem key="1">
          <div>
            <Card className="border-black">
              <CardContent className="p-0 bg-cover flex items-left justify-left flex">
                <div className='relative'>
                  <img src={picture} className='xl:h-full object-cover h-96'></img>
                  <div className='text-white py-3 px-12 absolute left-0 bottom-0 flex flex-col font-ebgaramond font-[500] w-full'>
                    <span className='text-md xl:text-3xl'>FINE ARTS DEPARTMENT</span>
                    <span className='text-5xl xl:text-5xl'>PLATES</span>
                    <Button className="text-white bg-learnmore-btn rounded hover:bg-white w-1/2 xl:w-1/4 font-roboto">Learn More</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          </CarouselItem>

          <CarouselItem key="2">
          <div>
            <Card className="border-black">
              <CardContent className="p-0 bg-cover flex items-left justify-left flex">
                <div className='relative'>
                  <img src={eventimg} className='xl:h-full object-cover h-96'></img>
                  <div className='text-white py-3 px-12 absolute left-0 bottom-0 flex flex-col font-ebgaramond font-[500] w-full'>
                    <span className='text-md xl:text-3xl'>FINE ARTS DEPARTMENT</span>
                    <span className='text-5xl xl:text-5xl'>EVENTS</span>
                    <Button className="text-white bg-learnmore-btn rounded hover:bg-white w-1/2 xl:w-1/4 font-roboto">Learn More</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          </CarouselItem>
          <CarouselItem key="3">
          <div>
            <Card className="border-black">
              <CardContent className="p-0 bg-cover flex items-left justify-left flex">
                <div className='relative'>
                  <img src={exhibitimg} className='xl:h-full object-cover h-96' ></img>
                  <div className='text-white py-3 px-12 absolute left-0 bottom-0 flex flex-col font-ebgaramond font-[500] w-full'>
                    <span className='text-md xl:text-3xl'>FINE ARTS DEPARTMENT</span>
                    <span className='text-5xl xl:text-5xl'>EXHIBIT</span>
                    <Button className="text-white bg-learnmore-btn rounded hover:bg-white w-1/2 xl:w-1/4 font-roboto">Learn More</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          </CarouselItem>
          <CarouselItem key="4">
          <div>
            <Card className="border-black">
              <CardContent className="p-0 bg-cover flex items-left justify-left flex">
                <div className='relative'>
                  <img src={alumimg} className='xl:h-full object-cover h-96 overflow-hidden'></img>
                  <div className='text-white py-3 px-12 absolute left-0 bottom-0 flex flex-col font-ebgaramond font-[500] w-full'>
                    <span className='text-md xl:text-3xl'>FINE ARTS DEPARTMENT</span>
                    <span className='text-5xl xl:text-5xl'>ALUMNI</span>
                    <Button className="text-white bg-learnmore-btn rounded hover:bg-white w-1/2 xl:w-1/4 font-roboto">Learn More</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </>
  )
}

export default App
