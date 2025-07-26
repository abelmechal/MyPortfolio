"use client"

import { motion } from "framer-motion"
import { ArrowLeft, GraduationCap, Heart, MapPin, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/NavBar"

import { aboutContent } from "@/data/About"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0d1321]">
      {/* Blue glow effect */}
      <div className="fixed top-0 left-0 w-[500px] h-[500px] rounded-full bg-[#3e5c76]/20 blur-[150px] -z-10" />
      <div className="fixed top-0 left-0 w-[300px] h-[300px] rounded-full bg-[#748cab]/20 blur-[100px] -z-10" />
      <div className="fixed inset-0 bg-[#0d1321]/60 backdrop-blur-[2px] -z-10" />

      <Navbar />

      <main className="container mx-auto px-4 pt-24 pb-20">
        {/* Back Button */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-8">
          <Button variant="ghost" asChild className="text-[#f0ebd8] hover:bg-[#1d2d44]/50">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </motion.div>

        {/* Hero Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-[#f0ebd8] mb-6">
            About <span className="text-[#748cab]">Me</span>
          </h1>
          <div className="w-20 h-1 bg-[#748cab] mx-auto mb-6"></div>
          <p className="text-xl text-[#f0ebd8]/80 max-w-3xl mx-auto">
            {aboutContent.heroDescription}
          </p>
        </motion.div>

        {/* Personal Story */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#f0ebd8] mb-6">My Story</h2>
              <div className="space-y-4 text-[#f0ebd8]/80">
                {aboutContent.personalStory.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 rounded-xl overflow-hidden bg-[#1d2d44]/30 backdrop-blur-md border border-[#3e5c76]/30">
                <Image src="/placeholder.svg?height=400&width=600" alt="Personal photo" fill className="object-cover" />
              </div>
            </div>
          </div>
        </motion.section>

        {/* Personal Stats */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {aboutContent.personalStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-[#1d2d44]/30 border-[#3e5c76]/30 backdrop-blur-md text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-[#748cab] mb-2">{stat.value}</div>
                    <div className="text-[#f0ebd8]/80">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-[#f0ebd8] mb-8 text-center">Education</h2>
          <div className="space-y-6">
            {aboutContent.education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-[#1d2d44]/30 border-[#3e5c76]/30 backdrop-blur-md">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#3e5c76]/30 flex items-center justify-center">
                        <GraduationCap className="h-6 w-6 text-[#748cab]" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-semibold text-[#f0ebd8] mb-1">{edu.degree}</h3>
                        <p className="text-[#748cab] mb-2">{edu.school}</p>
                        <div className="flex items-center gap-4 mb-3">
                          <div className="flex items-center text-[#f0ebd8]/60">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>{edu.year}</span>
                          </div>
                          <Badge className="bg-[#3e5c76]/40 text-[#f0ebd8]">GPA: {edu.gpa}</Badge>
                        </div>
                        <p className="text-[#f0ebd8]/80">{edu.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Interests & Hobbies */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-[#f0ebd8] mb-8 text-center">Interests & Hobbies</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {aboutContent.interests.map((interest, index) => (
              <motion.div
                key={interest}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="px-6 py-3 rounded-full bg-[#1d2d44]/50 backdrop-blur-sm text-[#f0ebd8] border border-[#3e5c76]/30 hover:border-[#748cab]/50 transition-colors">
                  <Heart className="inline h-4 w-4 mr-2 text-[#748cab]" />
                  {interest}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Location */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="bg-[#1d2d44]/30 border-[#3e5c76]/30 backdrop-blur-md max-w-md mx-auto">
            <CardContent className="p-8">
              <MapPin className="h-8 w-8 text-[#748cab] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[#f0ebd8] mb-2">Currently Based In</h3>
              <p className="text-[#748cab] text-lg">{aboutContent.location}</p>
              <p className="text-[#f0ebd8]/60 mt-2">Open to remote opportunities worldwide</p>
            </CardContent>
          </Card>
        </motion.section>
      </main>
    </div>
  )
}
