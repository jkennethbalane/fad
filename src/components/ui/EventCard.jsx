import { Card, CardContent } from "@/components/ui/card"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
  } from "@/components/ui/dialog"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { NavLink } from 'react-router-dom'
import facebook from './assets/Facebook.png'

function ECard(res){
    const cardContentStyle = res.bgImg + " flex flex-col bg-cover bg-center aspect-square h-80 transition duration-300 transform hover:scale-105 rounded-xl p-0"
    return(
        <>
            <Card className="flex justify-center">
                <CardContent className={cardContentStyle}> 
                    <div className="flex flex-col justify-end h-full w-full">
                        <div className='px-6 py-2 bg-[#841E1C]/[.8] rounded-b-xl flex flex-col h-1/3 justify-center text-left'>
                            <span className='font-ebgaramond text-lg'>{res.title}</span>
                            <span className='font-roboto text-sm'>Learn More</span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}

export default function EventCard(res){
    const [open, setIsOpen] = useState(false)
    const imgSrc = res.bgImg.replace('bg-','')
    const dynamicStyle = res.bgImg + " p-1 xl:h-80 xl:w-80 h-48 w-48 bg-cover bg-center"
    return(
    <>
         
        <Dialog open={open} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <button><ECard title={res.title} bgImg={res.bgImg}/></button>
            </DialogTrigger>
            <DialogContent className="w-full bg-transparent border-none overflow-y-scroll max-h-screen no-scrollbar">
                <div className="w-full flex flex-col flex justify-center items-center">
                    <div className="xl:w-1/2 w-full">
                        <div className="flex flex-row justify-center"><div className={dynamicStyle}></div></div>
                        <div className="font-ebgaramond flex flex-col text-white">
                            <span className="text-xl xl:text-3xl py-2 text-center">{res.title}</span>
                            <span className="text-xs xl:text-xl py-2">{res.description}</span>
                            {res.description1 && (
                                <>
                                
                                <span className="text-xs xl:text-xl py-2">{res.description1}</span>
                                </>
                            )}
                            {res.description2 && (
                                <>
                                <span className="text-xs xl:text-xl py-2">{res.description2}</span>
                                </>
                            )}
                        </div>
                    </div>
                    {res.fbLink && (
                        <>
                            <NavLink to={res.fbLink}><img src={facebook} className='transition duration-300 transform hover:scale-105 aspect-square xl:w-10 w-8 flex flex-row justify-center'></img></NavLink>
                        </>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    </>
    )
}