import NavBar from '../components/ui/NavBar.jsx'
import Footer from '../components/ui/Footer.jsx'
import header from '../components/ui/assets/FAQ.jpg'

function Content(){
    return(
    <div>
        <div className='bg-white'>
            <div className='text-center flex flex-col py-12'>
                <span className="xl:text-3xl text-xs text-testimonialTitle">FAQs</span>
                <span className="xl:text-3xl text-xs text-testimonialTitle">Work in Progress</span>
            </div>
            <div className='text-center flex flex-col space-y-0 py-12'>
                <span className="xl:text-3xl text-xs text-testimonialTitle">Want to connect with us?</span>
                <span className="xl:text-3xl text-md text-black">Visit our page for more.</span>
            </div>
        </div>
    </div>)
}

export default function FAQ(){
    window.scrollTo({top: 0,behavior:'smooth'})
    return(
        <div>
            <NavBar/>
            <div>
                <div className=''>
                    <img src={header} className='object-cover w-full 2xl:h-[50rem] h-[18rem]'></img>
                    <Content/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}