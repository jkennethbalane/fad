import { Button } from "@/components/ui/button"
import { NavLink } from "react-router-dom"

export default function Description(){
    return(
        <>
            <div className="text-white xl:px-12 px-3 py-12 flex flex-col space-y-5 w-full xl:w-1/2 leading-tight">
                <span className="text-3xl xl:text-5xl font-[500] font-body">WHY FINE ARTS ADVERTISING?</span>
                <span className="text-2xl xl:text-4xl font-ebgaramond font-[400] ">Graduates of the Bachelor of<br className="xl:hidden visisble"/> Fine Arts are envisioned to be<br className="xl:hidden visisble"/>advertising artists</span>
                <span className="text-sm xl:text-xl font-[200] font-body">The Fine Arts Department program is focused on the advancement of the ability to use traditional and current technologies to create effective advertising, publishing, editorial, corporate information, websites, and multimedia designs.</span>
                <NavLink to='/aboutus'><Button className="text-white bg-learnmore-btn rounded hover:bg-white w-40 font-roboto w-1/3">Learn More</Button></NavLink>
            </div>
        </>
    )
}