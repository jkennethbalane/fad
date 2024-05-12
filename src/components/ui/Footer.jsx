import foot from './assets/Footer.png'
import facebook from './assets/Facebook.png'
import instagram from './assets/Instagram.png'
import mail from './assets/Letter.png'
import phone from './assets/Phone.png'
import { NavLink } from 'react-router-dom'

export default function Footer(){
    return(
        <>
            <div className="w-full h-80 xl:h-96 relative font-body font-[500]">
                <img src={foot} className='w-full object-cover h-full'></img>
                <div className='text-white py-3 px-6 absolute left-0 top-0 flex flex-col h-full justify-between'>
                    <div>
                        <span className='text-3xl xl:text-4xl'>CONNECT WITH US</span>
                        <div className='flex flex-row space-x-5'>
                            <NavLink to="https://www.facebook.com/ExpressYourheART2o17?mibextid=ZbWKwL"><img src={facebook} className='transition duration-300 transform hover:scale-105 aspect-square xl:w-10 w-8'></img></NavLink>
                            <NavLink to="https://www.instagram.com/fineartstup?igsh=MTFxMDFnOXU1d2tvYg=="><img src={instagram} className='transition duration-300 transform hover:scale-105 aspect-square xl:w-10 w-8'></img></NavLink>
                        </div>
                    </div>
                    <div className='text-2xs xl:text-xs'>
                        <div className='flex flex-col'>
                            <span>TECHNOLOGICAL UNIVERSITY OF THE PHILIPPINES - MANILA</span>
                            <span>Ayala Boulevard, Ermita, Manila, Philippines, 1000 </span>
                        </div>
                        <div>
                            <div className='flex flex-row items-center space-x-5'>
                                <img src={mail} className='transition duration-300 transform hover:scale-105'></img>
                                <span className=''>tup_fineartsdepartment@tup.edu.ph</span>
                            </div>
                            <div className='flex flex-row items-center space-x-5'>
                                <img src={phone} className='transition duration-300 transform hover:scale-105'></img>
                                <span className=''>5301.3001 loc 310</span>
        
                            </div>
                            <NavLink to="/fad/credits">
                                <span>Credits and Attribution</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center bg-gradient-to-r from-[#0C0808] to-[#841E1C]'>
                <span className='text-[#8c8c8c] font-ebgaramond text-2xs'>©2024 TUP-FAD. ALL RIGHTS RESERVE</span>
            </div>
        </>
    )
}