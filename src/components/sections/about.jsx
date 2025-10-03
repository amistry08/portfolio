import { assets, infoList, toolsData } from "@/assets/assets"
import Image from "next/image"
import React from "react"
import { motion, scale } from "motion/react"

const About = ({ isDarkMode }) => {
    return (
        <motion.div
            className="w-full px-[12%] py-10 scroll-mt-20"
            id="about"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.h4
                className="text-center mb-2 text-lg font-ovo"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                Introduction
            </motion.h4>
            <motion.h2
                className="text-center text-5xl font-ovo"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                About Me
            </motion.h2>
            <motion.div
                className="flex w-full flex-col lg:flex-row items-start gap-20 my-20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <motion.div
                    className="w-64 sm:w-80 rounded-3xl max-w-none"
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.1, delay: 0.6 }}
                >
                    <Image
                        src={assets.user_image}
                        alt="user"
                        className="w-full mb-15 rounded-3xl"
                    />
                </motion.div>
                <motion.div
                    className="flex-1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <p className="mb-10 max-w-2xl text-balance font-ovo">
                        Full-stack developer with hands-on experience building
                        responsive web and mobile applications using React,
                        Node.js, and modern cloud tools. Skilled in creating
                        intuitive user interfaces, scalable backend systems, and
                        integrating databases and APIs to deliver end-to-end
                        solutions.
                    </p>
                    <motion.ul
                        className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                    >
                        {infoList.map((info, index) => (
                            <motion.li
                                whileHover={{ scale: 1.05 }}
                                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lighthover hover:-translate-y-1 hover:shadow-black
                dark:border-white dark:hover:shadow-white dark:hover:bg-darkhover/50 duration-500 "
                                key={index}
                            >
                                <Image
                                    src={isDarkMode ? info.iconDark : info.icon}
                                    alt={info.title}
                                    className="w-7 mt-3"
                                />
                                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                                    {info.title}
                                </h3>
                                <p className="text-gray-600 text-sm dark:text-white/80">
                                    {info.description}
                                </p>
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default About
