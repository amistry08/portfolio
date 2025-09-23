import { assets } from "@/assets/assets"
import Image from "next/image"
import React, { useEffect } from "react"

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScrollY, setIsScrollY] = React.useState(false)
  const sideMenuRef = React.useRef()
  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)"
  }
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)"
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScrollY(true)
      } else {
        setIsScrollY(false)
      }
    })
  }, [])

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScrollY
            ? "bg-white/50 backdrop-blur-lg shadow-sm dark:bg-darktheme dark:shadow-white/20"
            : ""
        }`}
      >
        <a href="#top">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt="Ayush"
            className="w-28 cursor-pointer mr-14 scale-125"
          />
        </a>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScrollY
              ? ""
              : "bg-white/50 shadow-md dark:border dark:border-white/50 dark:bg-transparent"
          } `}
        >
          <li>
            <a href="#top" className="font-ovo">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="font-ovo">
              About Me
            </a>
          </li>
          <li>
            <a href="#experiences" className="font-ovo">
              Experiences
            </a>
          </li>
          <li>
            <a href="#skills" className="font-ovo">
              Skills
            </a>
          </li>
          <li>
            <a href="#project" className="font-ovo">
              Project
            </a>
          </li>
          <li>
            <a href="#contact" className="font-ovo">
              Contact Me
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button onClick={() => setIsDarkMode(!isDarkMode)}>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="Dark Mode"
              className="w-6"
            />
          </button>
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border-gray-500 border shadow-md rounded-full ml-4 font-ovo dark:border-white/50"
          >
            Contact
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt="Contact"
              className="w-3"
            ></Image>
          </a>
          <button className="block md:hidden" onClick={openMenu}>
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="Menu"
              className="w-6"
            />
          </button>
        </div>

        {/* Mobile Menu */}

        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 px-10 py-20 fixed -right-64 top-0 bottom-0 w-64 h-screen bg-rose-50 transition duration-500 dark:bg-darkhover"
        >
          <div className="absolute top-6 right-6" onClick={closeMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt="Close"
              className="w-5 cursor-pointer"
            />
          </div>

          <li>
            <a href="#top" className="font-ovo" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="font-ovo" onClick={closeMenu}>
              About Me
            </a>
          </li>
          <li>
            <a href="#experiences" className="font-ovo" onClick={closeMenu}>
              Experiences
            </a>
          </li>
          <li>
            <a href="#skills" className="font-ovo" onClick={closeMenu}>
              Skills
            </a>
          </li>

          <li>
            <a href="#project" className="font-ovo" onClick={closeMenu}>
              Project
            </a>
          </li>
          <li>
            <a href="#contact" className="font-ovo" onClick={closeMenu}>
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
