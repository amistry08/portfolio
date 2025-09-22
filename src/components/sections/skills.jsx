import { assets } from "@/assets/assets"
import Image from "next/image"
import React from "react"
import { motion } from "motion/react"

const Skills = () => {
  const skills = {
    "Programming Languages": [
      "JavaScript (ES6+)",
      "TypeScript",
      "Python",
      "Java",
      "C# (.NET)",
    ],
    Frontend: [
      "React",
      "Next.js",
      "React Native",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Phaser.js",
    ],
    Backend: ["Node.js", "Express.js", ".NET Core", "REST APIs", "GraphQL"],
    Databases: ["MongoDB", "MySQL", "PostgreSQL", "NoSQL"],
    "Cloud & DevOps": ["AWS", "Docker", "GitHub Actions", "Kubernetes"],
    Testing: ["Unit Testing", "Debugging", "QA"],
    Workflow: ["Agile / Scrum", "Git & GitHub", "Jira", "Trello"],
    Certifications: [
      "AWS Cloud Essentials",
      "DevOps on AWS",
      "Intro to Data Science",
      "Software Testing/QA",
      "MongoDB / Hadoop / Spark SQL",
      "Project Management Foundations",
    ],
  }

  // Motion variants (same vibe as Experience)
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.9, delay: 0.6, staggerChildren: 0.08 },
    },
  }

  const card = {
    hidden: { y: 12, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.35 } },
  }

  const chip = {
    hidden: { y: 6, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.25 } },
    whileHover: { y: -2, scale: 1.02 },
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      className="w-full px-[12%] py-10 scroll-mt-20"
      id="skills"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-2 text-lg font-ovo"
      >
        Tech Stack
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="text-center text-5xl font-ovo mb-10"
      >
        My Skills
      </motion.h2>

      {/* grid matches Experience style */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-6 my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        {Object.entries(skills).map(([category, items]) => (
          <motion.div
            key={category}
            variants={card}
            whileHover={{ scale: 1.05 }}
            className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:-translate-y-1 hover:bg-lighthover duration-500 
              dark:hover:bg-darkhover dark:hover:shadow-white"
          >
            {/* optional icon slot; replace with your own if desired */}
            <div className="flex items-center gap-3">
              <Image src={assets.web_icon} alt="" className="w-8 h-8" />
              <h3 className="my-2 text-gray-700 text-lg dark:text-white">
                {category}
              </h3>
            </div>

            <motion.ul
              className="mt-4 flex flex-wrap gap-2"
              variants={{ show: { transition: { staggerChildren: 0.03 } } }}
            >
              {items.map((item) => (
                <motion.li
                  key={item}
                  variants={chip}
                  whileHover={chip.withHover}
                  className="px-3 py-1 rounded-md text-sm bg-foreground/5 text-gray-600 dark:text-white/80 dark:bg-white/10 hover:bg-lighthover dark:hover:bg-darkhover transition"
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Skills
