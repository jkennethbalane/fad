import NavBar from '../components/ui/NavBar.jsx'
import Footer from '../components/ui/Footer.jsx'
import header from '../components/ui/assets/aboutus.png'
import header1 from '../components/ui/assets/about-1.png'
import { Button } from "@/components/ui/button"
import { useState } from 'react'

export default function About(){
    const [isMore, setIsMore] = useState(false);
    function toggleMore(){
        setIsMore(!isMore)
    };

    return(
    <div>
        <NavBar />
        <div className='w-full'>
            <div>
                <div className=''>
                    <img src={header} className='object-cover w-full'></img>
                </div>
                <div className='h-auto bg-black text-white py-3 xl:py-12'>
                    <div className='font-roboto px-8 xl:px-12 py-6 flex flex-col font-[500] space-y-10'>
                        <div className='flex flex-col space-y-3'>
                            <span className='text-3xl'>ABOUT US</span>
                            <span className='text-lg font-[400] font-ebgaramond leading-5'>Our Fine Arts Department at the Technological University of the Philippines-Manila, with a focus on Advertising, equips students to create visually appealing narratives that are relevant in today's digital world. We combine innovation and creativity with state-of-the-art technology to prepare graduates for success in the fast-paced fields of visual communication and advertising.</span>
                        </div>
                        <div className='flex flex-col space-y-3'>
                            <span className='text-3xl'>RATIONALE</span>
                            <div className='text-lg font-[400] font-ebgaramond leading-5'>
                                <span >Fine Arts Program Description<br/><br/>
                                CHED MEMORANDUM ORDER No. 43 Series of 2017<br/><br/>
                                The degree name under this program shall be called BACHELOR OF FINE ARTS, specialization in Advertising. The Fine Arts course is a program that combines a context of firm foundation (Fine Arts Core subjects, Advertising Design, Creative Visual Perception and Management, Digital Design, Photography, and Other Media Development). Initially, these are treated as separate subject areas leading to a production experience in each of the different Fine Arts disciplines. However, as the course develops over the four years, students are encouraged to look at the ways in which these different media forms relate and feed into each other. In-depth studies may be pursued in different areas</span>
                                {isMore ? <span>, but at the same time, the curriculum affords the students a wide range of choices and flexibility. This interrelation of media forms is seen as a crucial part of the course and is designed to prepare the student to work in an industry of rapidly converging technologies. Strategies for credit units on lecture using theory, studio with consultation, and laboratory hands-on Fine Arts courses are included.<br/><br/>
                                Graduates of the Bachelor of Fine Arts are envisioned to be advertising artists. Graduates of the Bachelor of Fine Arts and Design can also become animators, art directors, cartographers, cartoonists, costume and fine jewelry designers, creative directors, design managers, educators, fashion designers, fashion stylists, film directors, furniture designers, game environment designers, graphic designers, illustrators, installation artists, layout artists, model makers, package designers, painters, photographers, printmakers, product designers, production designers, sculptors, shoe designers, special effects artist, tattoo artists, textile designers, video editors, visual developers, visual merchandisers, web designers, account executives, art critics, art conservators and restorers, art dealers, decorative art artist, art historians, art managers, curators, copywriters, cultural heritage workers, gallery managers, event organizers, exhibition designers, food stylists, and production assistants. (Art. IV Section 5.5 page 4)<br/><br/>
                                The Fine Arts Department program is focused on the advancement of the ability to use traditional and current technologies to create effective advertising, publishing, editorial, corporate information, websites, and multimedia designs. The students are educated to become visual socialist who gives form to ideas and information. Equal emphasis is given to concept development and problem-solving skills that may be applicable to professional pursuits.</span>: <span>.........</span>}
                            </div>
                            <Button className="text-white hover:text-black bg-learnmore-btn rounded hover:bg-white w-40 font-roboto xl:w-1/6 w-1/3" onClick={toggleMore}>{isMore ? "See Less" : "Learn More"}</Button>
                        </div>
                    </div>
                    <img src={header1} className='w-full'></img>
                </div>
                <div className='h-auto bg-white py-6 xl:py-12 font-roboto px-8 xl:px-12 flex flex-col font-[500] space-y-10'>
                    <div className='flex flex-col'>
                        <span className='font-[500] text-3xl'>TUP MISSION</span>
                        <span className='font-[400] font-ebgaramond'>The University shall provide higher and advanced vocational, technical, industrial, and professional education and training in the industries and technology and practical arts leading to certificates, diplomas and degrees. It shall provide progressive leadership in applied research, development studies in technical, industrial and technological fields and production using indigenous materials; effect technology transfer in the countryside; and assist in the development of small and medium scale industries in identified growth centers. (as embodied in Section 2 P.D. No. 1518) </span>
                    </div>
                    <div className='flex flex-col'> 
                        <span className='font-[500] text-3xl'>TUP VISION</span>
                        <span className='font-[400] font-ebgaramond'>The Technological University of the Philippines shall be a premier state university with recognized excellence in engineering and technology education at par with leading universities in the ASEAN region.”  </span>
                    </div>
                </div>
                <div className='bg-gradient-to-b from-[#9E1906] text-white to-[#0C0808] h-auto px-8 xl:px-12 py-6 xl:py-12 space-y-10'>
                    <div className='text-center'>
                        <span className='text-[#FFEECE] font-[500] text-xl text-center'>Our Goals and Objectives</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className='font-[500] text-3xl'>TUP-CAFA GOAL</span>
                        <span className='font-[400] font-ebgaramond'>The College of Architecture and Fine Arts shall prepare the students to become the world’s leading Architects, Artists, Designers and Draftsmen who are creative, competent, morally upright and innovative in their respective disciplines for environmental, cultural, national, and international advantage. </span>
                    </div>
                    <div className='flex flex-col'>
                        <span className='font-[500] text-3xl'>Fine Arts Program Educational Objectives (PEOs)</span>
                        <span className='font-[400] font-ebgaramond'>CMO 43 S.2017Art. IV Section 5.3 page 4<br/><br/>
                        To produce art and design professionals:<br/>
                        1. Whose creative works exhibit core Filipino values;<br/>
                        2. Who demonstrate high level of competencies in artistic production in local and international settings; and<br/>
                        3. Who are committed to nation-building and lifelong learning.<br/><br/>
                        Illustrate and describe the historical formulation, monitoring and review of the VMGO.<br/><br/>
                        The President, under the guidance of the Executive Committee and Administrative Council, develops and oversees the University's VMGO, which is subsequently cascaded to all relevant parties. </span>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
)}