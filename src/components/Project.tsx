"use client"

// React & Next
import { useState } from "react";
import Image from "next/image"

// Data
import { projects } from "@/data/Project";

// Icons
import { FaGithub } from "react-icons/fa"
import { ExternalLink, X } from "lucide-react";

// Framer motion
import { motion, AnimatePresence } from "framer-motion" 

// Components
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import image from "@/assets/images.png"

const Project = () => {
    const [selectedId, setSelectedId] = useState<number | null>(null)
    return(
        <section id="projects" className="py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-4 mb-12"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-[#f0ebd8]">Projects</h2>
                <div className="w-20 h-1 bg-[#748cab]"></div>
                <p className="text-[#f0ebd8] max-w-2xl">
                    A selection of projects I&apos;ve worked on. Click on a project to learn more.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        layoutId={`project-${project.id}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        onClick={() => setSelectedId(project.id)}
                        className="cursor-pointer"
                    >
                        <Card className="
                            bg-[#1d2d44]/30 border-[#3e5c76]/30 backdrop-blur-md overflow-hidden h-full hover:shadow-lg 
                            hover:shadow-[#3e5c76]/20 transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src={image || "/placeholder.svg"}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                            <CardContent className="p-6">
                                <h3 className="text-xl font-semibold text-[#f0ebd8] mb-2">{project.title}</h3>
                                <p className="text-[#f0ebd8]/80 mb-4">{project.shortDesc}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <Badge key={tag} className="bg-[#3e5c76]/40 text-[#f0ebd8] border-[#748cab]/50">
                                        {tag}
                                        </Badge>
                                    ))}
                                </div>
                                <Button variant="outline" className="w-full border-[#748cab] text-[#f0ebd8] hover:bg-[#3e5c76]/30">
                                    View Details
                                </Button>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedId !== null && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0d1321]/80 backdrop-blur-sm"
                    onClick={() => setSelectedId(null)}
                >
                    <motion.div
                    layoutId={`project-${selectedId}`}
                    className="w-full max-w-3xl bg-[#1d2d44]/70 backdrop-blur-md border border-[#3e5c76]/30 rounded-xl overflow-hidden"
                    onClick={(e) => e.stopPropagation()}
                    >
                    <div className="relative">
                        <div className="relative h-64">
                        <Image
                            src={image || "/placeholder.svg"}
                            alt={projects[selectedId - 1].title}
                            fill
                            className="object-cover"
                        />
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute top-4 right-4 bg-[#0d1321]/50 text-[#f0ebd8] hover:bg-[#3e5c76]/50"
                            onClick={() => setSelectedId(null)}
                        >
                        <X className="h-5 w-5" />
                        </Button>
                    </div>
                    <div className="p-6">
                        <h2 className="text-2xl font-bold text-[#f0ebd8] mb-2">{projects[selectedId - 1].title}</h2>
                        <div className="flex flex-wrap gap-2 mb-4">
                        {projects[selectedId - 1].tags.map((tag) => (
                            <Badge key={tag} className="bg-[#3e5c76]/40 text-[#f0ebd8] border-[#748cab]/50">
                            {tag}
                            </Badge>
                        ))}
                        </div>
                        <p className="text-[#f0ebd8]/80 mb-6">{projects[selectedId - 1].description}</p>
                        <div className="flex flex-wrap gap-4">
                        <Button className="bg-[#3e5c76] hover:bg-[#748cab] text-[#f0ebd8]" asChild>
                            <a href={projects[selectedId - 1].githubLink} target="_blank" rel="noopener noreferrer">
                            <FaGithub className="mr-2 h-4 w-4" />
                            View Code
                            </a>
                        </Button>
                        {projects[selectedId - 1].demoAvailable && (
                            <Button variant="outline" className="border-[#748cab] text-[#f0ebd8] hover:bg-[#3e5c76]/30" asChild>
                            <a href={projects[selectedId - 1].demoLink} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Live Demo
                            </a>
                            </Button>
                        )}
                        </div>
                    </div>
                    </motion.div>
                </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}

export default Project