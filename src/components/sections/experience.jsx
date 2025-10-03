"use client"

import { EXPERIENCES } from "@/assets/assets"
import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"

function Item({ title, org, period, bullets = [], tech = [] }) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    })

    // gentle parallax + fade as the card enters
    const y = useTransform(scrollYProgress, [0, 1], [24, -8])
    const opacity = useTransform(scrollYProgress, [0, 1], [0.85, 1])

    return (
        <section className="w-full flex items-start justify-center">
            <motion.div
                ref={ref}
                style={{ y, opacity }}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 140,
                    damping: 18,
                    mass: 0.6,
                }}
                className="
          w-full max-w-5xl
          md:flex md:items-start md:gap-8
          border border-neutral-200 dark:border-neutral-800
          rounded-2xl p-5 md:p-6
          bg-white/70 dark:bg-neutral-900/60
          backdrop-blur
          shadow-sm hover:shadow-md
          transition-shadow duration-200
        "
            >
                {/* Left rail: progress + year */}
                <div className="relative md:sticky md:top-6 shrink-0 flex flex-col items-center md:w-28">
                    <figure className="m-0 p-0">
                        <svg
                            className="w-[76px] h-[76px] -rotate-90 text-pink-500"
                            viewBox="0 0 100 100"
                        >
                            <circle
                                cx="50"
                                cy="50"
                                r="30"
                                pathLength="1"
                                className="stroke-current/20"
                                style={{ strokeWidth: 5, fill: "none" }}
                            />
                            <motion.circle
                                cx="50"
                                cy="50"
                                r="30"
                                pathLength="1"
                                className="stroke-current"
                                style={{
                                    strokeWidth: 5,
                                    fill: "none",
                                    pathLength: scrollYProgress, // progress arc
                                }}
                            />
                        </svg>
                    </figure>

                    {/* Year label under circle */}
                    <div className="mt-2 text-xs font-medium text-neutral-600 dark:text-neutral-300 select-none">
                        {period}
                    </div>
                </div>

                {/* Right content */}
                <motion.div
                    className="mt-4 md:mt-0 grow"
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 250, damping: 18 }}
                >
                    <h3 className="text-xl md:text-2xl font-semibold leading-tight">
                        {title}
                    </h3>
                    {org && (
                        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-300 mt-1">
                            {org}
                        </p>
                    )}

                    {bullets?.length > 0 && (
                        <ul className="mt-3 space-y-1.5 text-sm md:text-[15px] leading-relaxed">
                            {bullets.map((b, i) => (
                                <li key={i} className="relative pl-4">
                                    <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-neutral-300 dark:bg-neutral-600" />
                                    {b}
                                </li>
                            ))}
                        </ul>
                    )}

                    {tech?.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                            {tech.map((t, i) => (
                                <span
                                    key={i}
                                    className="px-2.5 py-1 text-xs rounded-full border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    )}
                </motion.div>
            </motion.div>
        </section>
    )
}

export default function Experience() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full max-w-6xl mx-auto px-[6%] md:px-[12%] scroll-mt-20 py-10"
            id="experiences"
        >
            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="text-center mb-2 text-base md:text-lg font-ovo"
            >
                What I Do
            </motion.h4>

            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-center text-3xl md:text-5xl font-ovo mb-8 md:mb-10"
            >
                Professional Experience
            </motion.h2>

            <div className="flex flex-col gap-8 md:gap-10">
                {EXPERIENCES.map((exp, i) => (
                    <Item key={i} {...exp} />
                ))}
            </div>
        </motion.div>
    )
}
