import NavBar from '../components/ui/NavBar.jsx'
import Footer from '../components/ui/Footer.jsx'

function Content(){
    return(
    <div>
        <div className='bg-white'>
            <div className='text-center flex flex-col space-y-12 py-12'>
                <span className="xl:text-3xl text-xs text-testimonialTitle">CREDITS AND ATTRIBUTION</span>
                <div className='flex flex-col'>
                    <span className="xl:text-3xl text-md text-black">KATARINA FRANCHESCA O. STA CLARA</span>
                    <span className="xl:text-3xl text-md text-black">DARRYL ROSE P. LEGARDE</span>
                </div>
            </div>
            <div className='text-center flex flex-col space-y-0 py-12'>
                <span className="xl:text-3xl text-xs text-testimonialTitle">Want to connect with us?</span>
                <span className="xl:text-3xl text-md text-black">Visit our page for more.</span>
            </div>
        </div>
    </div>)
}

export default function Credits(){
    window.scrollTo({top: 0,behavior:'smooth'})
    return(
        <div>
            <NavBar/>
            <div>
                <div className=''>
                    {/* <img src={header} className='object-cover w-full 2xl:h-[50rem] h-[18rem]'></img> */}
                    <Content/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}