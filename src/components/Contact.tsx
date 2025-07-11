"use client"

import { contactContent } from "../data/Contact"

// Framer motion
import { motion } from "framer-motion"

const Contact = () => {
    const handleClick= () => {
        window.location.href = `mailto:${contactContent['email']}`
    }

    return(
        //Contact section
        <section id="contact" className="max-w-5xl">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-4 mb-12"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-[#f0ebd8]">Contact Me</h2>
                <div className="w-20 h-1 bg-[#748cab]"></div>
                <p className="text-[#f0ebd8]">{contactContent['description']} 
                    <span className="text-blue-400 underline cursor-pointer" onClick={handleClick}>{contactContent['email']}</span>
                </p>
            </motion.div>
        </section>
    )
}

export default Contact;