import NavBar from '../components/ui/NavBar.jsx'
import Footer from '../components/ui/Footer.jsx'
import Header from '../components/ui/assets/FacultyHead.png'
import FacultyCard from '../components/ui/FacultyCard.jsx'
import Fac1 from '../components/ui/assets/fac1.png'
import Fac2 from '../components/ui/assets/fac2.png'
import Fac3 from '../components/ui/assets/fac3.png'
import Fac4 from '../components/ui/assets/fac4.png'
import Fac5 from '../components/ui/assets/fac5.png'
import Fac6 from '../components/ui/assets/fac6.png'
import Fac7 from '../components/ui/assets/fac7.png'
import Fac8 from '../components/ui/assets/fac8.png'
import Fac9 from '../components/ui/assets/fac9.png'
import Fac10 from '../components/ui/assets/fac10.png'
import Fac11 from '../components/ui/assets/fac11.png'
import Fac12 from '../components/ui/assets/fac12.png'
import Fac13 from '../components/ui/assets/fac13.png'
import Fac14 from '../components/ui/assets/fac14.png'
import Fac15 from '../components/ui/assets/fac15.png'
import Fac16 from '../components/ui/assets/fac16.png'
import Fac17 from '../components/ui/assets/fac17.png'
import Fac18 from '../components/ui/assets/fac18.png'
import Fac19 from '../components/ui/assets/fac19.png'
import Fac20 from '../components/ui/assets/fac20.png'

import { Button } from "@/components/ui/button"

export default function Faculty() {
    return(
        <div>
            
            <NavBar />
            <div className='w-full'>
                <div className='relative'>
                    <img src={Header} className='xl:h-full object-cover h-[28rem] aspect-video w-full'></img>
                    <div className='text-white py-3 xl:px-12 px-3 absolute left-0 bottom-0 flex flex-col space-y-1 font-ebgaramond font-[500] w-full leading-tight'>
                        <span className='text-2xl xl:text-3xl'>MEET THE</span>
                        <span className='text-3xl xl:text-5xl'>FACULTY</span>
                    </div>
                </div>

                <div className='px-8 xl:px-12 py-6'>
                    <div className='text-center flex flex-col space-y-3 text-black font-roboto leading-tight'>
                        <span className="xl:text-3xl text-xl font-[500] text-[#470302]">FINE ARTS DEPARTMENT</span>
                        <span className="xl:text-3xl text-xl font-[500]">FACULTY</span>
                    </div>
                    {/* Cards */}
                    <div className='py-6'>
                        <div className='grid xl:grid-cols-3 grid-cols-1'>
                            <FacultyCard name='Ramon Talaga De La Cruz' position='Head, Fine Arts Department' index='1' picture={Fac1}/>
                        </div>
                        <div className='py-3'>
                            <div className='border-0 border-b border-[#9B9B9B] w-full'>
                                <span className='text-[#9B9B9B] w-full'>Full-time Permanent</span>
                            </div>
                            <div className='grid xl:grid-cols-3 grid-cols-1'>
                                <FacultyCard name='Almina T. Tengco-Chan' position='Full-time Permanent' index='2' picture={Fac2}/>
                                <FacultyCard name='Ferdinand R. Doctolero' position='Full-time Permanent' index='3' picture={Fac3}/>
                                <FacultyCard name='Wima Dollisen-Enriquez' position='Full-time Permanent' index='4' picture={Fac4}/>
                            </div>
                        </div>

                        <div className='py-3'>
                            <div className='border-0 border-b border-[#9B9B9B] w-full'>
                                <span className='text-[#9B9B9B] w-full'>Full-time Temporary</span>
                            </div>
                            <div className='grid xl:grid-cols-3 grid-cols-1'>
                                <FacultyCard name='Ernest Joseph Garcia' position='Full-time Temporary' index='5' picture={Fac5}/>
                                <FacultyCard name='Maria Regina D. Frejas' position='Full-time Temporary' index='6' picture={Fac6}/>
                                <FacultyCard name='Majhalina I. Apuyan' position='Full-time Temporary' index='7' picture={Fac7}/>
                            </div>
                        </div>

                        <div className='py-3'>
                            <div className='border-0 border-b border-[#9B9B9B] w-full'>
                                <span className='text-[#9B9B9B] w-full'>Part-time</span>
                            </div>
                            <div className='grid xl:grid-cols-3 grid-cols-1'>
                                <FacultyCard name='Edward Simon' position='Part-time' index='8' picture={Fac8}/>
                                <FacultyCard name='Emmanuel Luis G. Borjal' position='Part-time' index='9' picture={Fac9}/>
                                <FacultyCard name='Eric G. Guazon' position='Part-time' index='10' picture={Fac10}/>
                                <FacultyCard name='Jayne Pauline C. Masigan' position='Part-time' index='11' picture={Fac11}/>
                                <FacultyCard name='Jerrica Sabariaga' position='Part-time' index='12' picture={Fac12}/>
                                <FacultyCard name='Jesa T. De Vera' position='Part-time' index='13' picture={Fac13}/>
                                <FacultyCard name='Jhosa Tiozen-Corpuz' position='Part-time' index='14' picture={Fac14}/>
                                <FacultyCard name='John Ace C. Hingada' position='Part-time' index='15' picture={Fac15}/>
                                <FacultyCard name='Kevin Ortega' position='Part-time' index='16' picture={Fac16}/>
                                <FacultyCard name='Leticia L. Paldez' position='Part-time' index='17' picture={Fac17}/>
                                <FacultyCard name='Lorena P. Pacampara' position='Part-time' index='18' picture={Fac18}/>
                                <FacultyCard name='Paul M. Alfonso' position='Part-time' index='19' picture={Fac19}/>
                                <FacultyCard name='Rolando Jr. Defeo' position='Part-time' index='20' picture={Fac20}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='items-center text-center flex flex-col space-y-0 py-6 font-[500] space-y-5'>
                <div className='flex flex-col'> 
                    <span className="xl:text-3xl text-xs text-testimonialTitle">Our Student Life</span>
                    <span className="xl:text-3xl text-md text-black">Learn More About Us</span>
                </div>
                <Button className="text-white text-3xs bg-learnmore-btn rounded hover:bg-white h-auto font-roboto w-1/5 xl:w-1/6 xl:text-xl">Learn More</Button>
            </div>
            <Footer/>
        </div>
    )
}