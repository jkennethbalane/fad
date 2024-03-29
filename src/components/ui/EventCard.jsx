import { Card, CardContent } from "@/components/ui/card"

export default function EventCard(res){
    const cardContentStyle = res.bgImg + " flex flex-col bg-cover bg-center aspect-square h-80 transition duration-300 transform hover:scale-105 rounded-xl p-0"
    return(
        <>
            <Card className="flex justify-center">
                <CardContent className={cardContentStyle}> 
                    <div className="flex flex-col justify-end h-full w-full">
                        <div className='px-6 py-2 bg-[#841E1C]/[.8] rounded-b-xl flex flex-col h-1/3 justify-center'>
                            <span className='font-ebgaramond text-xl'>{res.title}</span>
                            <span className='font-roboto text-sm'>Learn More</span>
                        </div>
                    </div>
                </CardContent>
            </Card>
    </>
    )
}