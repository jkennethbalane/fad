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
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

export default function Faculty() {
    const [open, setOpen] = useState(0)
    // window.scrollTo({top: 0,behavior:'smooth'})
    return(
        <div>
            <NavBar/>
            <div className='w-full'>
                <div className='relative'>
                    <img src={Header} className='object-cover w-full 2xl:h-[50rem] h-[18rem]'></img>
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
                            <button onClick={()=> open == 1 ? setOpen(0): setOpen(1)} className='xl:col-start-2'><FacultyCard name='Ramon Talaga De La Cruz' position='Head, Fine Arts Department' specialty="Advertising" index={open == 1 ? true : false} picture={Fac1} 
                                description="Ramon Talaga De La Cruz, who specializes in advertising, is the
                                current Head of the Fine Arts Department at the Technological University of the
                                Philippines (T.U.P.) in Manila, has been pursuing a Master's in Graphics Technology
                                since 2015. He holds a Master of Fine Arts from the University of the Philippines
                                (U.P.) Diliman completed in 2001 and received his Professional Education in 1997
                                and Bachelor of Fine Arts (Advertising) in 1995, both from T.U.P. With his extensive
                                academic background, Ramon brings a wealth of knowledge and experience to his
                                leadership role in the fine arts field.
                                "/>
                            </button>
                        </div>
                        <div className='py-3'>
                            <div className='border-0 border-b border-[#9B9B9B] w-full'>
                                <span className='text-[#9B9B9B] w-full'>Full-time Permanent</span>
                            </div>
                            <Carousel className="w-full flex justify-center max-w-full px-6 py-6">
                                <CarouselContent>
                                    <CarouselItem className="2xl:basis-1/3">
                                        <button onClick={()=> open == 2 ? setOpen(0): setOpen(2)}><FacultyCard name='Almina T. Tengco-Chan' position='Full-time Permanent' specialty="Arts and Crafts" index={open == 2 ? true : false} picture={Fac2} 
                                        description="Almina T. Tengco-Chan, who specializes in painting, art history,
                                        and arts and crafts, is a former Dean of the College of Architecture and Fine Arts
                                        (2015-2019), previously serving as Head of the Fine Arts Department (2010-2015).
                                        Currently an Associate Professor 1 at the Fine Arts Department.                           
                                        "/></button>
                                    </CarouselItem>
                                    <CarouselItem className="2xl:basis-1/3" >
                                        <button onClick={()=> open == 3 ? setOpen(0): setOpen(3)}><FacultyCard name='Ferdinand R. Doctolero' position='Full-time Permanent' specialty="Painting and Advertising" index={open == 3 ? true : false} picture={Fac3} 
                                        description="Ferdinand R. Doctolero, who specializes in painting, and
                                        advertising, is an acclaimed Filipino visual artist and faculty member at the
                                        Technological University of the Philippines, College of Architecture and Fine Arts, is
                                        renowned for his dynamic and vibrant artworks. With a background in the College of
                                        Fine Arts at the University of the Philippines, Quezon City, Doctolero's paintings,
                                        illustrations, and graphic designs have been featured in numerous group and solo
                                        exhibitions since 1978. His works adorn the collections of banks, museums, and
                                        private collectors, showcasing his talent and versatility. Additionally, he has
                                        contributed to children's literature as a designer and illustrator for publishers such as
                                        Adarna, Bookmark, and Lampara. As a member of the U.P. Artist Circle and Ang
                                        Illustrador ng Kabataan, he continues to inspire through his art and workshops,
                                        capturing life's essence with acrylics and charcoal pencil on canvas.
                                        
                                        "/></button>
                                    </CarouselItem>
                                    <CarouselItem key="2" className="2xl:basis-1/3">
                                        <button onClick={()=> open == 4 ? setOpen(0): setOpen(4)}><FacultyCard name='Wima Dollisen-Enriquez' position='Full-time Permanent' specialty="Graphic Design" index={open == 4 ? true : false} picture={Fac4} 
                                        description="Wima Dollisen-Enriquez, who specializes in art education,
                                        graphic design, creative consultant, and ballpoint pen, also known as Beck F.
                                        Dollisen, explores her art using a ballpoint pen that gives an illuminated or illuminati
                                        effect on each finished artwork. The portraits of her models, with ornamental
                                        backgrounds give a unique composition, which emphasizes and speaks for the
                                        subject's personality. Beck’s artworks do not just portray faces but reflect the inner
                                        beauty of the models, a style that attracted the attention of a prominent art group,
                                        Pilipino Art.ph. Some of her artworks are featured on their website. Ms. Enriquez is a
                                        product of Technological University of the Philippines, graduated in Fine Arts
                                        majoring in Advertising and completed a Master's Degree in Graphic Technology
                                        major in Industrial Design. She worked with various well- known industries like Pepsi
                                        Cola, Phils. and Tutuban Mall as a graphic artist, designer , and event photographer .
                                        Now, currently an assistant professor and an art educator at the College of
                                        Architecture and Fine Arts, And one of the serving officers of the TUPManila Faculty
                                        Association in the same university. Beck’s distinctive impression as an artist is to have
                                        a positive outlook in life. It shows in every single artwork that she creates."/></button>
                                    </CarouselItem>
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Carousel>
                        </div>

                        <div className='py-3'>
                            <div className='border-0 border-b border-[#9B9B9B] w-full'>
                                <span className='text-[#9B9B9B] w-full'>Full-time Temporary</span>
                            </div>
                            <Carousel className="w-full flex justify-center max-w-full px-6 py-6">
                                <CarouselContent className="">
                                    <CarouselItem className="2xl:basis-1/3">
                                        <button onClick={()=> open == 5 ? setOpen(0): setOpen(5)}><FacultyCard name='Ernest Joseph Garcia' position='Full-time Temporary' specialty="Art Direction" index={open == 5 ? true : false} picture={Fac5} 
                                        description="Ernest Joseph Garcia, who specializes in art direction, graphic
                                        design, and research, is an Art director, graphic designer, academic, and creative
                                        entrepreneur based in Manila, Philippines. Mr. Garcia finished his bachelor's degree
                                        in Fine Arts major in Advertising at the Technological University of the Philippines,
                                        Manila. Currently, he is finishing his graduate studies at Philippine Women's
                                        University for his Master in Fine Arts and Design degree. He currently works as a
                                        college instructor/lecturer at TUP Manila.
                                        His current academic works focuses on the integration of creative research in realistic
                                        industry setup, sharing his experience and learnings in the field of graphic design,
                                        exploring the potentials and complexities of Filipino aesthetics and design taste in
                                        relation to history, culture, and society, and to help raise awareness in the importance
                                        of the effects of design in the contemporary era.
                                        "/></button>
                                    </CarouselItem>
                                    <CarouselItem className="2xl:basis-1/3" >
                                        <button onClick={()=> open == 6 ? setOpen(0): setOpen(6)}><FacultyCard name='Maria Regina D. Frejas' position='Full-time Temporary' specialty="Graphics" index={open == 6 ? true : false} picture={Fac6} 
                                        description="Maria Regina D. Frejas, who specializes in graphics, and floral
                                        arrangement, is a Technological University of the Philippines-Manila graduate with a
                                        Bachelor of Fine Arts majoring in Advertising. Currently serving as a full-time
                                        temporary professor at TUP, Maria specializes in teaching Graphics and Floral
                                        Arrangement.
                                        
                                        "/></button>
                                    </CarouselItem>
                                    <CarouselItem key="2" className="2xl:basis-1/3">
                                        <button onClick={()=> open == 7 ? setOpen(0): setOpen(7)}><FacultyCard name='Majhalina I. Apuyan' position='Full-time Temporary' specialty="Graphic Design" index={open == 7 ? true : false} picture={Fac7} 
                                        description="Majhalina I. Apuyan, who specializes in graphic design, is a
                                        Graphic Artist and Designer passionate about traditional and digital mediums.
                                        Currently serving as an Instructor 1 at the Technological University of the Philippines
                                        in Ermita, Manila, she is dedicated to shaping the next generation of creative minds.
                                        Majhalina is pursuing a Master's in Graphics Technology at the same institution,
                                        complementing her Bachelor of Fine Arts degree with a major in Advertising from the
                                        University of the East, Caloocan City (1998-2002). With expertise in arts and design
                                        crafting, painting, and digital art, Majhalina's interests extend to fashion trends,
                                        forecasting, and product development.                                        
                                        "/></button>
                                    </CarouselItem>
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Carousel>
                        </div>
                        <div className='py-3'>
                            <div className='border-0 border-b border-[#9B9B9B] w-full'>
                                <span className='text-[#9B9B9B] w-full'>Part-Time</span>
                            </div>
                            <Carousel className="w-full flex justify-center max-w-full xl:px-6 px-3 xl:py-6 py-3">
                                <CarouselContent>
                                    <CarouselItem className="2xl:basis-1/3">
                                        <button onClick={()=> open == 8 ? setOpen(0): setOpen(8)}><FacultyCard name='Edward Simon' position='Part-time' specialty="Photography" index={open == 8 ? true : false} picture={Fac8} 
                                        description="Edward Simon, who specializes in architecture/commercial
                                        photography, is an architecture photographer professional who specializes in
                                        capturing images of buildings, structures, and other architectural designs. His work
                                        has gained recognition and is frequently featured in prestigious publications like
                                        BLUPRINT Books and magazines. With a commitment to fostering collaboration,
                                        Edsimon actively engages with both local and international designers, bringing a
                                        global perspective to his photography. This collaboration not only enriches his
                                        portfolio but also contributes to the exchange of ideas within the architecture and
                                        design community. In addition to his professional endeavors, Edsimon shares his
                                        expertise and passion for architecture photography as a faculty member of the TUP
                                        Fine Arts Department. His role involves educating and inspiring the next generation
                                        of photographers, imparting both technical skills and an appreciation for the artistry of
                                        architectural photography. Edsimon extends his influence beyond the academic setting
                                        by participating in talks and conventions. Through these engagements, he not only
                                        showcases his work but also shares insights, experiences, and a deep love for the
                                        craft. Edsimon's presentations serve as a source of inspiration for aspiring
                                        photographers and enthusiasts alike, contributing to the ongoing discourse in the field
                                        of architecture photography.
                                        "/></button>
                                    </CarouselItem>
                                    <CarouselItem className="2xl:basis-1/3">
                                        <button onClick={()=> open == 9 ? setOpen(0): setOpen(9)}><FacultyCard name='Emmanuel Luis G. Borjal' position='Part-time' specialty="Multimedia Arts" index={open == 9 ? true : false} picture={Fac9} 
                                        description="Emmanuel Luis G. Borjal, who specializes in Advertising,
                                        graphic design, multimedia arts, photography, furniture design, packaging design,
                                        indigenous creative crafts, and history of arts, is a graduate of Bachelor of Fine Arts
                                        major in Advertising at the Technological University of the Philippines Manila where
                                        he finished his Master in Graphics Technology in 2021.In 2017, He is a member of a CHED-funded project worth 10 million pesos granted to
                                        TUP entitled, 'Capability Building for the Establishment of a Center for Innovation
                                        and Technology Entrepreneurship' or CITE. Where he successfully contributed to all
                                        Visual Communication paraphernalia needs of the said CHED project. Together with
                                        the CITE technical working team they were able to published their research entitled,
                                        'Issues and Challenges of Technology Business Incubators in the Philippines' in a
                                        Scopus indexed journal which was cited 3 times by various research papers.
                                        Currently, he is the Head of the Multimedia Technology Department under the
                                        Integrated Research and Training Center. He is also one of the pool of active Faculty
                                        Researchers at TUP. Along side with this, he is an Advocate of Gender and
                                        Development and a member of TUP-GAD Technical working team
                                        "/></button>
                                    </CarouselItem>
                                    <CarouselItem className="2xl:basis-1/3">
                                        <button onClick={()=> open == 10 ? setOpen(0): setOpen(10)}><FacultyCard name='Eric G. Guazon' position='Part-time' specialty="Mix Media Painting" index={open == 10 ? true : false} picture={Fac10} 
                                        description="Eric Guazon, who specializes in mix media painting and
                                        advertising, is a visual artist, explores the themes of war, violence, and power in his
                                        art practice. His recent mixed media works are about warfare’s global reach, its
                                        complex economies, and the harrowing casualties that are war’s ultimate outcome. He
                                        has by far mounted twelve solo exhibitions in some prominent metro Manila galleries.
                                        He has participated in several group exhibitions such as TutoK Art Projects on Human
                                        Rights in the Cultural Center of the Philippines (2007), Asia Contemporary Art Hong
                                        Kong (2011), Metropolitan Museum of Manila Open Exhibition (2014), and at the Art
                                        Fair Philippines in Makati (2014, 2015 and 2018). His works were notable entries in
                                        art competitions, awarded honourable mentions in the Philipp Morris Philippine Art
                                        Awards, Metrobank Painting competitions, and semi-final entries in the Beppu Asia
                                        Biennale of Contemporary Art in Japan (2007). Eric has Fine Arts degrees from the
                                        University of the Philippines Diliman (Major in Painting) and the Technological
                                        University of the Philippines (Major in Advertising). He was recently awarded
                                        regional winner for NCR at the 25th Philippine Art Awards(2020). Shortlisted in the
                                        Ateneo Art Gallery MGAP Awards (2020). He is currently an Instructor at the Fine
                                        Arts Department, TUP-CAFA, in Manila
                                        
                                        "/></button>
                                    </CarouselItem>
                                    <CarouselItem className="2xl:basis-1/3">
                                        <button onClick={()=> open == 11 ? setOpen(0): setOpen(11)}><FacultyCard name='Jayne Pauline C. Masigan' position='Part-time' specialty="Illustration" index={open == 11 ? true : false} picture={Fac11} 
                                        description="Jayne Pauline C. Masigan, is a CumLaude graduate of the
                                        Technological University of the Philippines. She is a full-time Artist specializing in
                                        2D digital illustrations. She also works as a part-time educator at TUP Manila and is
                                        currently taking her Masters’ Degree at National Teachers College
                                        "/></button>
                                    </CarouselItem>
                                    <CarouselItem className="2xl:basis-1/3">
                                        <button onClick={()=> open == 12 ? setOpen(0): setOpen(12)}><FacultyCard name='Jerrica Sabariaga' position='Part-time' specialty="Photography" index={open == 12 ? true : false} picture={Fac12} 
                                        description="Jerrica Sabariaga (Photography), who specializes in photography, and graphic design, better known as Mika Sabariaga, 
                                        is a product of the Technological University of the Philippines with a Bachelor of Fine Arts majoring 
                                        in Advertising- Cum Laude. She is currently pursuing her Master in Fine Arts at the University of the Philippines- Diliman, 
                                        focusing on Photography and Printmaking. She has worked with different brands such as Columbia International Philippines 
                                        (makers of Potchi, V-Fresh, Frutos, etc.), RFM (Selecta, Kettle Korn, Go Negosyo) as well as projects for Adidas, Renuzit and Landers. 
                                        As of now, she is working as a Brand and Social Media Manager in TSI- a Chicago-based financial company with a lot of enterprises around 
                                        north America."/></button>
                                    </CarouselItem>
                                    <CarouselItem className="2xl:basis-1/3">
                                        <button onClick={()=> open == 13 ? setOpen(0): setOpen(13)}><FacultyCard name='Jesa T. De Vera' position='Part-time' specialty="Corporate Branding Design" index={open == 13 ? true : false} picture={Fac13} 
                                        description="Jesa DeVera, A Visual Designer for 14 years in IBM
                                        Business Services, a multinational company and one of the big technology and data
                                        companies in the BPO industry. She graduated as Cum laude from the Technological
                                        University of the Philippines with a degree of Bachelor of Fine Arts Major in
                                        Advertising.
                                        She is a certified Enterprise Design Thinking Co-creator, Agile Explorer, IBM Garage
                                        Practitioner, IBM Growth Behaviors Practitioner, Automation Practitioner, and
                                        Cognitive Practitioner. She is also an AIGPE Yellow Belt certified in Lean Six Sigma
                                        process improvement method. She had also acquired knowledge in various trainings
                                        in Cybersecurity, Cyberbullying and Harassment, Watson and Cloud Foundations,
                                        Automation, AI, and Project Management.
                                        Throughout her experience as a Visual Designer, she had supported multiple projects
                                        such as corporate branding development, proposals, video production, website design
                                        maintenance, mobile screensaver, and event kit materials. She had supported various
                                        global clients from USA, Europe, Middle East, Australia, India, Japan, and
                                        Philippines which caters different industries such as energy and power; banking,
                                        financial services, and insurance; consumer packed goods and agriculture;
                                        pharmaceutical and biotechnology, healthcare, research and development, technology
                                        and telecommunication, aerospace, transportation, construction, electronics, mining,
                                        automation, artificial intelligence, and data analytics.
                                        "/></button>
                                    </CarouselItem>
                                    <CarouselItem className="2xl:basis-1/3">
                                        <button onClick={()=> open == 14 ? setOpen(0): setOpen(14)}><FacultyCard name='Jhosa Tiozen-Corpuz' position='Part-time' specialty="Advertising" index={open == 14 ? true : false} picture={Fac14} 
                                        description="Jhosa Tiozen-Corpus, is currently a Part-Time Instructor of the Fine
                                        Arts Department at Technological University of the Philippines.
                                        She received her Bachelor’s degree in Fine Arts major in Advertising in 2015. Even
                                        before teaching at TUP, she became a student assistant to her teachers while she was
                                        still studying. After graduating, she worked as a CTP operator and a Graphic Designer
                                        in a printing press company. Apart from this, she continues to work as a freelance
                                        graphic designer in large companies such as Vista Land, Rockwell Primaries and
                                        Voodoo Lounge Bar providing a variety of services graphic design and marketing
                                        collaterals.
                                        She is currently a social media manager of an outdoor product and continues to work
                                        as a freelance graphic designer.
                                        
                                        "/></button>
                                    </CarouselItem>
                                    <CarouselItem className="2xl:basis-1/3">
                                        <button onClick={()=> open == 15 ? setOpen(0): setOpen(15)}><FacultyCard name='John Ace C. Hingada' position='Part-time' specialty="Art Criticism" index={open == 15 ? true : false} picture={Fac15} 
                                        description="John Ace C. Hingada, is a Licensed Professional Teacher
                                        specializing in Arts, Humanities, and Social Science courses. He has been a faculty
                                        member of the Fine Arts Department of the Technological University of the
                                        Philippines, Manila since 2019. He is also a graduate of the same university, from
                                        which he earned a Bachelor's Degree in Fine Arts, majoring in Advertising. He is a
                                        Cum laude and was a two-time Scholastic Awardee for two consecutive years. He is
                                        pursuing a higher education by taking his graduate studies at the University of the
                                        Philippines, Diliman. He is taking a Master of Arts in Art Studies, majoring in Art
                                        Theory and Criticism. He is particularly interested in contemporary visual culture, art
                                        aesthetics, art theories, art history, and art criticism. With his experience, field of
                                        expertise and interest, and professional credibility, he is the primary developer of the
                                        departmental exams of general education courses under the department such as Art
                                        Appreciation, Indigenous Creative Crafts, and Reading Visual Arts.
                                        
                                        "/></button>
                                    </CarouselItem>
                                    <CarouselItem className="2xl:basis-1/3">
                                        <button onClick={()=> open == 16 ? setOpen(0): setOpen(16)}><FacultyCard name='Kevin Ortega' position='Part-time' specialty="Film and Entertainment" index={open == 16 ? true : false} picture={Fac16} 
                                        description="Kevin Ortega, who specializes in film, entertainment,
                                        painting, and visual arts, graduated from the Technological University of the
                                        Philippines-Manila with a degree in Fine Arts major in Advertising. He teaches
                                        part-time at TUP and works in entertainment as a video editor, animator, 3D artist,
                                        and visual artist                                        
                                        "/></button>
                                    </CarouselItem>
                                    <CarouselItem className="2xl:basis-1/3">
                                        <button onClick={()=> open == 17 ? setOpen(0): setOpen(17)}><FacultyCard name='Leticia L. Paldez' position='Part-time' specialty="Graphic Artist" index={open == 17 ? true : false} picture={Fac17} 
                                        description="Leticia L. Paldez, is a multifaceted professional with
                                        expertise as an Instructor, Product Analyst, Toys Innovator, and Sewing Garment
                                        Designer. She studied at TUP-Manila, where she earned her Bachelor of Fine Arts
                                        majoring in Advertising and later completed her Master's in Graphics Technology.
                                        
                                        "/></button>
                                    </CarouselItem>
                                    <CarouselItem className="2xl:basis-1/3">
                                        <button onClick={()=> open == 18 ? setOpen(0): setOpen(18)}><FacultyCard name='Lorena P. Pacampara' position='Part-time' specialty="Costume and Special Effects" index={open == 18 ? true : false} picture={Fac18} 
                                        description="Lorena P. Pacampara’s interest is project
                                        development from conceptualization, implementation monitoring, and evaluation. She
                                        graduated from the Technological University of the Philippines Manila in 1991 with a
                                        degree in Fine Arts, majoring in advertising, dabbled in animation as an in-betweener
                                        and worked briefly for a design company making labels and hang tags for shirts and
                                        jeans before discovering her passion for creating dioramas depicting historical events
                                        in the Philippines.
                                        Her work can be shown at the National Historical Commission of the Philippines, the
                                        Kaisa-Tsinoy Museum, and the Arci Cultura Svillupo, which collaborates with the
                                        Children's Rehabilitation Centre Multi-Purpose Hall in Quezon City.
                                        She acquired experience and worked on the crew that created the costumes, props,
                                        and designs for GMA7's series production. She even learned how to use prosthetics
                                        and special effects while working on shows such as Mulawin, Darna, and
                                        Encantandia. With an ongoing dedication to a non-governmental organization and
                                        foundation. She enjoys creating visuals and illustrations for children's activity books
                                        for minority and tribal children, art workshop activities based on predetermined
                                        themes for street children, and art approach training materials that are visually created
                                        in the complicated of our respective industries.
                                        Lorena Pacampara, an education and training officer, works in the Climate Change
                                        Network for community-based programs that collect data on the consequences of
                                        extreme weather and inform people in many sectors through creating artistic
                                        instructional tools to help people understand the sector's difficulties and responses to
                                        climate change. She took part in the Baclaran Church's art therapy program, which
                                        tried to rehabilitate the families of those lost in the drug war through art activities,
                                        resulting in a mosaic craft on the church's wall. She is a part-time faculty member at
                                        the Department of Fine Arts at the Technological University of the Philippines
                                        "/></button>
                                    </CarouselItem>
                                    <CarouselItem className="2xl:basis-1/3">
                                        <button onClick={()=> open == 19 ? setOpen(0): setOpen(19)}><FacultyCard name='Paul M. Alfonso' position='Part-time' specialty="Motion Graphics" index={open == 19 ? true : false} picture={Fac19} 
                                        description="Paul M. Alfonso, who specializes in graphic design and motion
                                        graphics, is a product of the Technological University of the Philippines with a
                                        Bachelor of Fine Arts major in advertising. He is currently a graphic artist and motion
                                        graphic artist at ABS-CBN Corporation, particularly on TV Patrol weekdays and
                                        weekends. Some of his past programs include Bandila, Rated K, SOCO, Breakfast
                                        Show, Stock Market Live, The Wrap, etc. He’s been with the Kapamilya network
                                        since 1995. Sky Cable News, Sarimanok News Channel (SNN), ABS-CBN News
                                        Channel (ANC), Studio 23, and ABS-CBN. He is also a former Makisig Network and
                                        Red Cross Philippines graphic artist. He’s also a former designer and window display
                                        artist at Bench (Suyen Corporation).
                                        "/></button>
                                    </CarouselItem>
                                    <CarouselItem className="2xl:basis-1/3">
                                        <button onClick={()=> open == 20 ? setOpen(0): setOpen(20)}><FacultyCard name='Rolando Jr. Defeo' position='Part-time' specialty="Media and Communication" index={open == 20 ? true : false} picture={Fac20} 
                                        description="Rolando Jr. Defeo, Rolando Jr. Defeo is a Journalist
                                        in GMA Network, handling social media news, TV feature shows, documentaries, and
                                        digital videos since 2017. He obtained his bachelor's degree in Mass Communication
                                        at Pamantasan ng Lungsod ng Maynila and has experiences in advertising, research,
                                        TV and digital production, brand-activations, PR and crisis management, and public
                                        speaking. He was awarded a Panday Pira award, one of the highest awards of Rotary
                                        Club, and his team won Best Campaign and Best Audience Engagement at the World
                                        Association of News Publishers & Digital Media Awards Worldwide last 2022, and
                                        Innovation Award for Online Campaign in Asia-Pacific Broadcasting Awards 2023. A
                                        part-time instructor at Fine Arts Department in Technological University of the
                                        Philippines, he spearheaded the first TUP Film Festival called Gawad Dakila, where it
                                        showcases films produced by the students, and for the students. He is also a lecturer in
                                        different schools, teaching journalistic and creative writing, Radio, TV & Film
                                        production. He is an active communication practitioner, lecturer and a community
                                        speaker"/></button>
                                    </CarouselItem>
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Carousel>
                            {/* <div className='grid xl:grid-cols-3 grid-cols-1'>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className='items-center text-center flex flex-col space-y-0 py-6 font-[500] space-y-5'>
                <div className='flex flex-col'> 
                    <span className="xl:text-3xl text-xs text-testimonialTitle">Our Student Life</span>
                    <span className="xl:text-3xl text-md text-black">Learn More About Us</span>
                </div>
                <NavLink to='/fad/students'><Button className="text-white text-3xs bg-learnmore-btn rounded hover:bg-white h-auto font-roboto w-full xl:text-xl">Learn More</Button></NavLink>
            </div>
            <Footer/>
        </div>
    )
}