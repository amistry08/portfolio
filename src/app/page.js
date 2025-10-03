"use client"

import Navbar from "@/components/layout/navbar"
import About from "@/components/sections/about"
import Skills from "@/components/sections/skills"
import Hero from "@/components/sections/hero"
import Project from "@/components/sections/project"
import Contact from "@/components/sections/contact"
import Footer from "@/components/layout/footer"
import Experience from "@/components/sections/experience"
import { useEffect, useState } from "react"

export default function Home() {
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        if (
            localStorage.getItem("theme") === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            setIsDarkMode(true)
        } else {
            setIsDarkMode(false)
        }
    }, [])

    useEffect(() => {
        const root = document.documentElement
        if (isDarkMode) {
            root.setAttribute("data-theme", "dark")
            localStorage.setItem("theme", "dark")
        } else {
            root.setAttribute("data-theme", "")
            localStorage.setItem("theme", "")
        }
    }, [isDarkMode])

    return (
        <>
            <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            <Hero isDarkMode={isDarkMode} />
            <About isDarkMode={isDarkMode} />
            <Experience isDarkMode={isDarkMode} />
            <Skills isDarkMode={isDarkMode} />
            <Project isDarkMode={isDarkMode} />
            <Contact isDarkMode={isDarkMode} />
            <Footer isDarkMode={isDarkMode} />
        </>
    )
}
