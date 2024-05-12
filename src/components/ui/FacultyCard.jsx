import { Card, CardContent } from "@/components/ui/card"
import { useRef, useState, useEffect } from "react"
import gradient from './assets/cut.png'

export default function FacultyCard(name){
    
    return(
        
        <div>
            <Card>
                <CardContent className={`p-12 flex flex-col space-y-3 font-roboto justify-start transition duration-300 transform hover:scale-105 ${name.index ? 'shadow shadow-2xl shadow-bottom' : ''}`}>
                    <div className="flex flex-row h-auto w-auto">
                        <div className="flex flex-row relative">
                            <div className="flex flex-row justify-center w-full">
                                <img src={gradient} className="relative z-10 "></img>
                                <img src={name.picture} className="absolute"></img>
                                <div className="rotate-90 w-full h-full absolute text-left flex flex-col text-[#841E1C]">
                                    <span className="font-[400] xl:text-base lg:text-xs text-2xs">{name.position}</span>
                                    <span className="font-[800] xl:text-base lg:text-xs text-2xs">FINE ARTS</span>
                                </div>
                                <div className="flex flex-col absolute text-right xl:bottom-10 bottom-0 z-20 right-0 text-black">
                                    <span className="font-[400] xl:text-base lg:text-lg sm:text-xs xs:text-2xs 2xs:text-4xs">{name.specialty}</span>
                                    <span className="font-[800] xl:text-base lg:text-lg sm:text-xs xs:text-2xs 2xs:text-4xs">{name.name}</span>
                                </div>
                            </div>
                            {/* <div className="flex flex-col">
                                <div className="">
                                    <div className="flex flex-col text-[#841E1C]">
                                        <span className='xl:text-2xs text-3xs c'>{name.position}</span>
                                        <span className='text-2xs font-[600]'>FINE ARTS</span>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="flex flex-col text-black w-11/12">
                                        <span className='text-xs font-[400]'>{name.position}</span>
                                        <span className='xl:text-xl text-xl font-[800]'>{name.name}</span>
                                        
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        {/* <div className="fle">
                            <div className="rotate-90 flex flex-col text-left w-full">
                                <span className="xl:text-xs text-3xs">{name.position}</span>
                                <span className="">FINE ARTS</span>
                            </div>
                        </div> */}
                    </div>
                    
                    {
                        name.index && (
                            <div className="duration-300 ease-in-out">
                                <span className="xl:text-lg text-xs text-left font-[500] text-black">{name.description}</span>
                            </div>
                        )
                    }
                </CardContent>
            </Card>
        </div>
    )
}