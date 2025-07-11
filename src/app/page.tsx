"use client"

import { useRef } from "react"

// Framer motion
import { motion, useScroll, useTransform } from "framer-motion"

// Icons 
import { ChevronDown } from "lucide-react"

// Components
import NavBar from "@/components/NavBar"
import About from "@/components/About"
import Experience from "@/components/Experience";
import Project from "@/components/Project";
import Contact from "@/components/Contact"

export default function Home() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9])

  return (
    <div ref={ref} className="min-h-screen bg-[#0d1321]">
      <NavBar />

      <motion.div 
        style={{ opacity, scale }} 
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          className="flex flex-col items-center"
        >
          <span className="text-sm font-light mb-2 text-blue-200">Scroll Down</span>
          <ChevronDown className="w-6 h-6 text-blue-200" />
        </motion.div>
      </motion.div>

      <main className="container max-w-5xl mx-auto px-4 pt-20 pb-20 flex flex-col items-center">
        <About />
        <Experience />
        <Project />
        <Contact />
      </main>
    </div>
  );
}
