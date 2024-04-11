import { Button } from "@/components/ui/button"
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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function GalleryCard(res){
    return(
        <>
        <Dialog>
        <DialogTrigger asChild>
            <img src={res.imgSrc} className={`transition duration-300 transform hover:scale-105 overflow-hidden w-full h-full row-span-${res.span ? res.span : '1'}`}></img>
        </DialogTrigger>
        <DialogContent className="w-full bg-transparent border-none overflow-y-scroll max-h-screen no-scrollbar">
            <div className="flex flex-col flex justify-center">
                <div className="flex flex-row justify-center"><div className="p-1 bg-white"><img src={res.simgSrc ? res.simgSrc : res.imgSrc} className="h-auto xl:w-[40rem] w-60"></img></div></div>
                <div className="text-center font-ebgaramond flex flex-col text-white">
                    <span className="text-3xl">{res.title}</span>
                    <span className="text-2xl">{res.material}</span>
                    <span className="text-2xl">{res.canvas}</span> <br></br>

                    <span className="text-2xl">{res.artist}</span>
                    <span className="text-2xl">{res.section}</span>
                </div>
            </div>
        </DialogContent>
        </Dialog>
            
        </>
    )
}