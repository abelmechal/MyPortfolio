"use client"
import React from "react"
import { aboutContent } from "@/data/About"
import Image from "next/image"
import portrait from "@/assets/images.png"

// Framer motion
import { motion, Variants } from "framer-motion"

// Components
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

// Icons
import { ArrowRight } from "lucide-react"

const About = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    }

    const imageVariants: Variants = {
        hidden: { opacity: 0, scale: 0.8 },
        show: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 25,
            },
        },
    }

    const downloadResume = () => {
        const link = document.createElement("a");
        link.href = "/Abel_Kassa_Resume.pdf"
        link.download = "Abel_Kassa_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return(
        <section id="about" className="min-h-screen flex items-center">
            <div className="w-full max-w-5xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div variants={container} initial="hidden" animate="show" className="space-y-4">
                        <motion.div variants={item} initial="hidden" animate="show">
                            <Badge className="px-4 py-1 text-sm bg-[#1d2d44]/50 text-[#f0ebd8] border-[#3e5c76]/50 backdrop-blur-sm">
                                Graduating Dec 2026
                            </Badge>
                        </motion.div>
                        <motion.h1
                            variants={item}
                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#f0ebd8] leading-tight"
                        >
                            Hi, I&apos;m <span className="text-[#748cab]">{aboutContent.name}</span>
                            <br />A Computer Science Student at Minnesota State University, Mankato
                        </motion.h1>

                        <motion.p variants={item} className="text-lg md:text-xl text-[#f0ebd8]/80 max-w-2xl">
                            {aboutContent.description}
                        </motion.p>

                        <motion.div variants={item} className="flex flex-wrap gap-4">
                            <Button variant="outline" className="border-[#748cab] text-[#f0ebd8] hover:bg-[#1d2d44]/50" onClick={downloadResume}>
                                Download Resume
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Profile Picture */}
                    <motion.div
                        variants={imageVariants}
                        initial="hidden"
                        animate="show"
                        className="order-1 lg:order-2 flex justify-center lg:justify-end"
                    >
                        <div className="relative">
                        {/* Animated background rings */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                            className="absolute inset-0 w-80 h-80 rounded-full border border-[#3e5c76]/20"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                            className="absolute inset-2 w-76 h-76 rounded-full border border-[#748cab]/20"
                        />

                        {/* Glow effect */}
                        <div className="absolute inset-4 w-72 h-72 rounded-full bg-[#3e5c76]/10 blur-xl" />

                        {/* Main image container */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-[#3e5c76]/30 backdrop-blur-sm bg-[#1d2d44]/30"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#3e5c76]/20 to-[#748cab]/20" />
                            <Image
                                src="/portrait.jpg"
                                alt="Abel Kassa - Computer Science Student"
                                fill
                                className="object-cover"
                                priority
                            />

                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1321]/20 via-transparent to-transparent" />
                        </motion.div>

                        {/* Floating elements */}
                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                            className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-[#748cab]/30 backdrop-blur-sm border border-[#748cab]/50"
                        />
                        <motion.div
                            animate={{ y: [10, -10, 10] }}
                            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-6 -left-6 w-6 h-6 rounded-full bg-[#3e5c76]/30 backdrop-blur-sm border border-[#3e5c76]/50"
                        />
                        <motion.div
                            animate={{ y: [-5, 15, -5] }}
                            transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
                            className="absolute top-1/4 -left-8 w-4 h-4 rounded-full bg-[#748cab]/40 backdrop-blur-sm border border-[#748cab]/60"
                        />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About;