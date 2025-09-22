import { assets } from "@/assets/assets"
import Image from "next/image"
import React from "react"
import { motion } from "motion/react"

const Contact = () => {
  const [result, setResult] = React.useState("")

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult("Sending....")
    const formData = new FormData(event.target)

    formData.append("access_key", "a86180dc-3b60-4444-b814-34d5418c2109")

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })

    const data = await response.json()

    if (data.success) {
      setResult("Form Submitted Successfully")
      event.target.reset()
    } else {
      console.log("Error", data)
      setResult(data.message)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none"
      id="contact"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="text-center mb-2 text-lg font-ovo"
      >
        Connet with Me
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-ovo mb-10"
      >
        Get in Touch
      </motion.h2>
      <motion.p
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        I'd Love to Hear From You! Whether You Have a Question, Want to
        Collaborate, or Just Want to Say Hello, Feel Free to Reach Out. I'm
        Always Open to New Opportunities and Connections.
      </motion.p>

      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.5 }}
        className="max-w-2xl mx-auto"
        onSubmit={onSubmit}
      >
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <motion.input
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.6 }}
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md darK:bg-darkhover/30 dark:border-white/90"
            type="text"
            placeholder="Your Name"
            required
            name="name"
          />
          <motion.input
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md darK:bg-darkhover/30 dark:border-white/90"
            type="email"
            placeholder="Your Email"
            required
            name="email"
          />
        </div>
        <motion.textarea
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.3, delay: 0.6 }}
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md mb-6 darK:bg-darkhover/30 dark:border-white/90"
          rows={6}
          placeholder="Your Message"
          required
          name="message"
        ></motion.textarea>
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="py-3 px-8 w-max flex items-center justify-between gap-2 text-white bg-black/80 rounded-full mx-auto hover:bg-black duration-500
          dark:bg-transparent dark:border-[.05px] dark:hover:bg-darkhover"
          type="submit"
        >
          Submit now
          <Image src={assets.right_arrow_white} alt="arrow" className="w-4" />
        </motion.button>
        <p className="mt-4">{result}</p>
      </motion.form>
    </motion.div>
  )
}

export default Contact
