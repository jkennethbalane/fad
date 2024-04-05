import { Card, CardContent } from "@/components/ui/card"
import { useRef, useState, useEffect } from "react"

export default function FacultyCard(name){
    return(
        
        <div className="h-full">
            <Card>
                <CardContent className={`p-5 flex flex-col space-y-3 hover:bg-[#fff2f5] ${name.index ? 'border-4' : 'border-0'}`}>
                    <div className="flex flex-row space-x-3 overflow-hidden">
                        <img src={name.picture} className="h-16 flex flex-col justify-center"></img>
                        <div className="flex flex-col text-left">
                            <span className='font-ebgaramond text-2xl'>{name.name}</span>
                            <span className='font-roboto text-xs'>{name.position}</span>
                        </div>
                    </div>
                    {
                        name.index && (
                            <span className="font-ebgaramond text-xl font-[500] animate-accordion-down overflow-hidden text-left">{name.description}</span>
                        )
                    }
                </CardContent>
            </Card>
        </div>
    )
}