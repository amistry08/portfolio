import { assets, serviceData } from "@/assets/assets"
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
    Projects: [
      "Music Recommendation System",
      "Web Search Engine",
      "Fall Detection Belt",
      "Diabetes Tracking App",
      "NeetCode 150",
      "2D RPG Portfolio Game",
    ],
    Certifications: [
      "AWS Cloud Essentials",
      "DevOps on AWS",
      "Intro to Data Science",
      "Software Testing/QA",
      "MongoDB / Hadoop / Spark SQL",
      "Project Management Foundations",
    ],
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full px-[12%] py-10 scroll-mt-20"
      id="skills"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="text-center mb-2 text-lg font-ovo"
      >
        Tech Stack
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-ovo mb-10"
      >
        My Skills
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.6 }}
        className="grid gap-6 my-10 grid-cols-auto"
      >
        {serviceData.map((service, index) => (
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
              <Image src={assets.right_arrow} alt="arrow" className="w-4" />
            </a>
          </motion.div>
        ))}
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="p-6 rounded-2xl border border-foreground/10 shadow-sm hover:bg-lighthover hover:-translate-y-1 hover:shadow-black transition"
          >
            <h3 className="text-xl font-semibold mb-4">{category}</h3>
            <ul className="space-y-2 text-sm">
              {items.map((item) => (
                <li
                  key={item}
                  className="px-3 py-1 rounded-lg bg-foreground/5 hover:bg-lighthover transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Skills
