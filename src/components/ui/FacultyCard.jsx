import { Card, CardContent } from "@/components/ui/card"
import { useRef, useState, useEffect } from "react"

export default function FacultyCard(name){
    const [isExpanded, SetIsExpanded] = useState(false)
    const dynamicID = 'fac-card-' + name.index
    function changeStyle(ref){
        useEffect(()=> {
            const FacCard = document.getElementById(dynamicID)
            if(isExpanded){
                FacCard.classList.add('border-4', 'rounded')
            }
            else{
                FacCard.classList.remove('border-4', 'rounded')
            }
        }, [isExpanded])
    }
    const facRef = useRef();
    changeStyle(facRef)

    return(
        <div onClick={() =>
            SetIsExpanded(!isExpanded)
        } id={dynamicID}>
            <Card>
                <CardContent className="p-5 flex flex-col space-y-3  hover:bg-[#EED3D9]">
                    <div className="flex flex-row space-x-3">
                        <img src={name.picture} className="h-12 -translate-y-2 overflow-hidden"></img>
                        <div className="flex flex-col">
                            
                            <span className='font-ebgaramond'>{name.name}</span>
                            <span className='font-roboto text-xs'>{name.position}</span>
                        </div>
                    </div>
                    {
                        isExpanded && (
                            <span className="font-ebgaramond text-lg font-[500] animate-accordion-down overflow-hidden">{name.description}</span>
                        )
                    }
                </CardContent>
            </Card>
        </div>
    )
}