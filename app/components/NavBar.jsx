
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

export default function NavBar({isDarkMode, setIsDarkMode}) {

    const [isScroll, setIsScroll] = useState(false)

    const sideMenuRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }

    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    useEffect( () => {
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        })
    },[])

    return (
        <>
            <nav className={`fixed w-full px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 
            ${isScroll ? 'bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white' : ''}`}>
                <a href="#top">
                    <Image 
                        src={isDarkMode ? assets.logo_dark_2 : assets.logo}
                        alt="logo"
                        className="w-52 cursor-pointer mr-14"
                    />
                </a>

                <motion.ul 
                    initial={{opacity: 0}}
                    whileInView={{opacity:1}}
                    transition={{duration: 0.8, delay: 1}}
                    className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? '' : 'bg-white shadow-md bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent'}`}>
                    <motion.li whileHover={{scale: 1.05}}><a className="font-ovo" href="#top">Home</a></motion.li>
                    <motion.li whileHover={{scale: 1.05}}><a className="font-ovo" href="#about">About me</a></motion.li>
                    <motion.li whileHover={{scale: 1.05}}><a className="font-ovo" href="#experience">Experience</a></motion.li>
                    <motion.li whileHover={{scale: 1.05}}><a className="font-ovo" href="#work">My Work </a></motion.li>
                    <motion.li whileHover={{scale: 1.05}}><a className="font-ovo" href="#contact">Contact me </a></motion.li>
                </motion.ul>

                <div className="flex items-center gap-4">
                    <button onClick={()=> setIsDarkMode(prev => !prev)}>
                        <Image 
                            src={isDarkMode ? assets.sun_icon : assets.moon_icon}
                            alt=""
                            className="w-6 cursor-pointer"
                        />
                    </button>
                    <motion.a
                        whileHover={{scale: 1.05}}
                        href="#contact"
                        className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-400 rounded-full ml-4 font-ovo dark:hover:bg-customBlue transition-colors duration-500"
                    >
                        Contact
                        <Image 
                            src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} 
                            alt="arrow-icon"
                            className="w-3" 
                        />
                    </motion.a>

                    <button className="block md:hidden ml-3">
                        <Image
                            src={isDarkMode ? assets.menu_white : assets.menu_black}
                            alt=""
                            className="w-6 cursor-pointer"
                            onClick={openMenu}
                        />
                    </button>
                </div>

                {/* Mobile Menu */}

                <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen text-white bg-lightHover transition duration-500 dark:bg-customBlue">
                    <div className="absolute right-6 top-6" onClick={closeMenu}>
                        <Image
                            src={assets.close_white} alt="" className="w-5 cursor-pointer"
                        />
                    </div>
                    <li><a className="font-ovo" onClick={closeMenu} href="#top">Home</a></li>
                    <li><a className="font-ovo" onClick={closeMenu} href="#about">About me</a></li>
                    <li><a className="font-ovo" onClick={closeMenu} href="#services">Services</a></li>
                    <li><a className="font-ovo" onClick={closeMenu} href="#work">My Work</a></li>
                    <li><a className="font-ovo" onClick={closeMenu} href="#contact">Contact</a></li>
                </ul>
            </nav>
        </>
    )
}
