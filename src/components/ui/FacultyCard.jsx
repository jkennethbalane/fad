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
                <CardContent className="p-5 flex flex-col space-y-3">
                    <div className="flex flex-row space-x-3">
                        <img src={name.picture} className="h-12 -translate-y-2 overflow-hidden"></img>
                        <div className="flex flex-col">
                            
                            <span className='font-ebgaramond'>{name.name}</span>
                            <span className='font-roboto text-xs'>{name.position}</span>
                        </div>
                    </div>
                    {
                        isExpanded && (
                            <span className="font-ebgaramond text-xs">Ramon Talaga De La Cruz, current Head of the Fine Arts Department at the Technological University of the Philippines (T.U.P.) in Manila, has been pursuing a Master's in Graphics Technology since 2015. He holds a Master of Fine Arts from the University of the Philippines (U.P.) Diliman completed in 2001 and received his Professional Education in 1997 and Bachelor of Fine Arts (Advertising) in 1995, both from T.U.P. With his extensive academic background, Ramon brings a wealth of knowledge and experience to his leadership role in the fine arts field.</span>
                        )
                    }
                </CardContent>
            </Card>
        </div>
    )
}