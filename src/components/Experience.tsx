"use client"

// Framer motion
import { motion } from "framer-motion"

//Icons
import { BriefcaseIcon, Calendar } from "lucide-react"

// Components
import { Card, CardContent } from "@/components/ui/card"

// Data
import { experiences } from "../data/Experience";

const Experience = () => {
    return(
        <section id="experience" className="py-12">
            <div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="space-y-4 mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#f0ebd8]">Work Experience</h2>
                    <div className="w-20 h-1 bg-[#748cab]"></div>
                </motion.div>

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <Card className="bg-[#1d2d44]/30 border-[#3e5c76]/30 backdrop-blur-md overflow-hidden shadow-lg shadow-[#3e5c76]/10">
                        <CardContent className="p-6">
                            <div className="flex flex-col md:flex-row md:items-center gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#3e5c76]/30 flex items-center justify-center">
                                <BriefcaseIcon className="h-6 w-6 text-[#748cab]" />
                            </div>
                            <div className="space-y-2 flex-grow">
                                <h3 className="text-xl font-semibold text-[#f0ebd8]">{exp.title}</h3>
                                <p className="text-[#748cab]">{exp.company}</p>
                                <div className="flex items-center text-[#748cab]">
                                <Calendar className="h-4 w-4 mr-2" />
                                <span>{exp.period}</span>
                                </div>
                                <p className="text-[#f0ebd8]/80 mt-2">{exp.description}</p>
                            </div>
                            </div>
                        </CardContent>
                        </Card>
                    </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience