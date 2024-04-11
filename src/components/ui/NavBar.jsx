import logo from './assets/logo.png'
import { NavLink, useLocation } from "react-router-dom"
import { ChevronDown, ChevronLeft, Menu , X} from "lucide-react"
import { useState, useEffect, useRef } from "react";

const NavLinks =() =>{
  return(
      <>
      <ul className='flex flex-row justify-between w-full'>
        <li className='relative group flex flex-row justify-center'>
          <NavLink to="/fad/aboutus" className="font-roboto font-medium hover:text-gray-400">About Us</NavLink>
          <div className='fixed flex flex-col z-10 bg-white p-3 border-2 border-black invisible group-hover:visible space-y-2'>
            <NavLink to="/fad/aboutus" className="font-roboto border-0 border-y border-solid border-white px-16 py-5">ABOUT US</NavLink>
            <NavLink to="/fad/aboutus-mission" className="font-roboto border-0 border-y border-solid border-white px-16 py-5" >MISSION</NavLink>
            <NavLink to="/fad/aboutus-vision" className="font-robotoborder-0 border-y border-solid border-white px-16 py-5">VISION</NavLink>
            <NavLink to="/fad/aboutus-goals" className="font-roboto border-0 border-y border-solid border-white px-16 py-5">GOALS</NavLink>
            <NavLink to="/fad/aboutus-objectives" className="font-robotoborder-0 border-y border-solid border-white px-16 py-5">OBJECTIVES</NavLink>
          </div>
        </li>
        <li className='relative group flex flex-row justify-center'><NavLink to="/fad/academics" className="font-roboto font-medium hover:text-gray-400">Academics</NavLink>
          <div className='fixed flex flex-col z-10 bg-white p-3 border-2 border-black invisible group-hover:visible space-y-2'>
            <NavLink to="/fad/academics" className="font-roboto border-0 border-y border-solid border-white px-16 py-5">FACULTY</NavLink>
            <NavLink to="/fad/students" className="font-roboto border-0 border-y border-solid border-white px-16 py-5" >STUDENT LIFE</NavLink>
          </div>
        </li>
        <li className='relative group flex flex-row justify-center'><NavLink to="/fad/RandE" className="font-roboto font-medium hover:text-gray-400">R & E</NavLink>
          <div className='fixed flex flex-col z-10 bg-white p-3 border-2 border-black invisible group-hover:visible space-y-2'>
            <NavLink to="/fad/RE-extension" className="font-roboto border-0 border-y border-solid border-white px-16 py-5">EXTENSION</NavLink>
            <NavLink to="/fad/exhibit" className="font-roboto border-0 border-y border-solid border-white px-16 py-5">EXHIBITION</NavLink>
            <NavLink to="/fad/RE-research" className="font-roboto border-0 border-y border-solid border-white px-16 py-5">RESEARCH</NavLink>
            <NavLink to="/fad/RE-urds" className="font-roboto border-0 border-y border-solid border-white px-16 py-5">URDS</NavLink>
            <NavLink to="/fad/RE-journal" className="font-roboto border-0 border-y border-solid border-white px-16 py-5">SCHOLARLY JOURNAL</NavLink>
          </div>
        </li>
        <li><NavLink to="/fad/organization" className="font-roboto font-medium hover:text-gray-400">Organization</NavLink></li>
        <li><NavLink to="/fad/admission" className="font-roboto font-medium hover:text-gray-400">Admission </NavLink></li>
      </ul>
      </>
  );
};

const DropDown =() =>{
  const [isDrop, setIsDrop] = useState(0)
  
  return(
      <>
        <div className={`flex flex-row w-full hover:border-none border-0 border-y border-solid border-white px-12 py-5 ${isDrop== 1 ? 'bg-[#852838]' : 'bg-[#C4203B]' }`} onClick={() => isDrop != 1 ? setIsDrop(1) : setIsDrop(0)}>
          <span className="font-roboto w-11/12">ABOUT US</span>
          <ChevronDown className={`flex flex-col items-center h-auto aspect-square justify-end ${isDrop == 1 ? 'visible' : 'hidden'}`}/>
        </div>
        {
          isDrop==1 && (
            <div className='flex flex-col bg-[#a13044]'>
              <NavLink to="/fad/aboutus-mission" className="font-roboto hover:bg-[#852838] hover:border-none border-0 border-y  border-solid border-white px-16 py-5">MISSION</NavLink>
              <NavLink to="/fad/aboutus-vision" className="font-roboto hover:bg-[#852838] hover:border-none border-0 border-y  border-solid border-white px-16 py-5">VISION</NavLink>
              <NavLink to="/fad/aboutus-goals" className="font-roboto hover:bg-[#852838] hover:border-none border-0 border-y  border-solid border-white px-16 py-5">GOALS</NavLink>
              <NavLink to="/fad/aboutus-objectives" className="font-roboto hover:bg-[#852838] hover:border-none border-0 border-y  border-solid border-white px-16 py-5">OBJECTIVES</NavLink>
            </div>
          )
        }
        <div className={`flex flex-row w-full hover:border-none border-0 border-y border-solid border-white px-12 py-5 ${isDrop== 2 ? 'bg-[#852838]' : 'bg-[#C4203B]' }`} onClick={() => isDrop != 2 ? setIsDrop(2) : setIsDrop(0)}>
          <span className="font-roboto w-11/12">ACADEMICS</span>
          <ChevronDown className={`flex flex-col items-center h-auto aspect-square justify-end ${isDrop == 2 ? 'visible' : 'hidden'}`}/>
        </div>
        {
          isDrop==2 && (
            <div className='flex flex-col bg-[#a13044]'>
              <NavLink to="/fad/academics" className="font-roboto hover:bg-[#852838] hover:border-none border-0 border-y  border-solid border-white px-16 py-5">FACULTY</NavLink>
              <NavLink to="/fad/students" className="font-roboto hover:bg-[#852838] hover:border-none border-0 border-y  border-solid border-white px-16 py-5">STUDENT LIFE</NavLink>
            </div>
          )
        }
        <div className={`flex flex-row w-full hover:border-none border-0 border-y border-solid border-white px-12 py-5 ${isDrop== 3 ? 'bg-[#852838]' : 'bg-[#C4203B]' }`} onClick={() => isDrop != 3 ? setIsDrop(3) : setIsDrop(0)}>
          <span className="font-roboto w-11/12">R & E</span>
          <ChevronDown className={`flex flex-col items-center h-auto aspect-square justify-end ${isDrop == 3 ? 'visible' : 'hidden'}`}/>
        </div>
        {
          isDrop==3 && (
            <div className='flex flex-col bg-[#a13044]'>
              <NavLink to="/fad/RE-extension" className="font-roboto hover:bg-[#852838] hover:border-none border-0 border-y  border-solid border-white px-16 py-5">EXTENSION</NavLink>
              <NavLink to="/fad/exhibit" className="font-roboto hover:bg-[#852838] hover:border-none border-0 border-y  border-solid border-white px-16 py-5">EXHIBITION</NavLink>
              <NavLink to="/fad/RE-research" className="font-roboto hover:bg-[#852838] hover:border-none border-0 border-y  border-solid border-white px-16 py-5">RESEARCH</NavLink>
              <NavLink to="/fad/RE-urds" className="font-roboto hover:bg-[#852838] hover:border-none border-0 border-y  border-solid border-white px-16 py-5">URDS</NavLink>
              <NavLink to="/fad/RE-journal" className="font-roboto hover:bg-[#852838] hover:border-none border-0 border-y  border-solid border-white px-16 py-5">SCHOLARLY JOURNAL</NavLink>
            </div>
          )
        }
        <NavLink to="/fad/organization" className="font-roboto hover:bg-[#852838] hover:border-none border-0 border-y  border-solid border-white px-12 py-5">ORGANIZATION</NavLink>
        <NavLink to="/fad/admission" className="font-roboto hover:bg-[#852838] hover:border-none border-0 border-y  border-solid border-white px-12 py-5">ADMISSION</NavLink>
      </>
  );
};



export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLogo = document.getElementById('logo');
  const navBar = document.getElementById('navBar');

  function toggleNavbar(){
    setIsOpen(!isOpen);
  };
  
  function useOutsideAlerter(ref) {
    useEffect(() => {

      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsOpen(false)
        }
      }
      function swipeDown(event){
        setIsOpen(false)
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchmove", swipeDown);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("touchmove", swipeDown);
      };
      
      
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  const index = 1

  const location = useLocation();

  useEffect(() => {
    const handleCloseNavigation = () => {
      setIsOpen(false);
    };

    // Close navigation menu when a navigation event occurs
    handleCloseNavigation();

    return () => {
      // Cleanup if necessary
    };
  }, [location, setIsOpen]);
  return (
    <div className='sticky top-0 z-10'>
      <div className={`top-0 px-3 xl:px-12 py-4 flex-wrap z-[20] mx-auto flex w-full items-center justify-between ${
    isOpen ? 'bg-[#C4203B]' : 'bg-white'
  }`} id='navBar'>
        <div className="logo w-2/3 xl:w-1/2 h-full">
          <NavLink to="/fad/" >
            <img id='logo' src={logo} className={`${isOpen ? 'hidden' : 'visible'}`}></img>
          </NavLink>
        </div>
        <nav className="flex w-1/3 justify-end">
            <div className="hidden w-full xl:flex">
                <NavLinks />
            </div>
            <div className="xl:hidden">
                <button onClick={toggleNavbar} className='flex flex-col justify-center'>{isOpen ? <X className='bg-white rounded rounded-[1px]'/> : <Menu />}</button>
            </div>
        </nav>
      </div>
      <div>
      {isOpen && (
        <div className={`flex flex-col font-roboto font-[500] right-0 h-dvh z-10 bg-[#C4203B] text-white w-full overflow-hidden`} ref={wrapperRef}>
          <DropDown />
        </div>
      )}
      </div>
    </div>
  );

};