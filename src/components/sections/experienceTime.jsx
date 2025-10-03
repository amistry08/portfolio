import { assets, experienceData } from "@/assets/assets"
import Image from "next/image"
import React from "react"
import { motion } from "motion/react"

const ExperienceTimeLine = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full px-[12%] py-10 scroll-mt-20"
            id="experiences"
        >
            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="text-center mb-2 text-lg font-ovo"
            >
                What I Do
            </motion.h4>
            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-center text-5xl font-ovo mb-10"
            >
                Professional Experience
            </motion.h2>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.6 }}
                className="grid gap-6 my-10 grid-cols-auto"
            >
                {experienceData.map((service, index) => (
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        key={index}
                        className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:-translate-y-1 hover:bg-lighthover duration-500 
            dark:hover:bg-darkhover dark:hover:shadow-white"
                    >
                        <Image src={service.icon} alt="" className="w-10" />
                        <h3 className="my-4 text-gray-700 text-lg dark:text-white">
                            {service.title}
                        </h3>
                        <p className="text-sm text-gray-500 leading-5 dark:text-white/80">
                            {service.description}
                        </p>
                        <a
                            href={service.link}
                            className="flex items-center gap-2 mt-5 text-sm"
                        >
                            Learn More{" "}
                            <Image
                                src={assets.right_arrow}
                                alt="arrow"
                                className="w-4"
                            />
                        </a>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default ExperienceTimeLine
