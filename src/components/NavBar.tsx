"use client";

import { useState, useEffect } from "react";

// Nextjs
import Link from "next/link"

// Icons
import { Menu } from "lucide-react";

// Framer motion
import { motion, useScroll } from "framer-motion"

// Components
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const { scrollY } = useScroll()
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const unsubscribe = scrollY.on("change", (y) => {
        setIsScrolled(y > 50)
        })

        return () => unsubscribe()
    }, [scrollY])

     const navLinks = [
        { name: "Home", href: "/#home" },
        { name: "About", href: "/about" },
        { name: "Experience", href: "/#experience" },
        { name: "Projects", href: "/#projects" },
        { name: "Contact", href: "/#contact" },
    ]

    return(
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 rounded-lg px-2 ${
                isScrolled ? "bg-[#3e5c76]/30 backdrop-blur-lg shadow-lg m-2" : "bg-transparent m-5"
            }`}
        >
            <div className="container mx-auto">
                <div className="flex justify-between items-center h-16 p-2">
                    {/* Logo */}
                    <div className="text-2xl font-bold text-[#f0ebd8]">
                        <Link href="/">Abel Kassa | Portfolio</Link>
                    </div>

                    <nav className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <Link key={link.name} href={link.href} className="text-[#f0ebd8] hover:text-white">
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="md:hidden">
                        <Sheet open={open} onOpenChange={setOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" className="text-[#f0ebd8]">
                                    <Menu className="h-6 w-6"/>
                                    <span className="sr-only">Toggle Menu</span>
                                </Button>
                            </SheetTrigger>
                            
                            <SheetContent className="w-fit pr-32 bg-[#0d1321]/80 backdrop-blur-lg border-[#3e5c76] text-[#f0ebd8]">
                                <motion.div
                                    initial={{ x: 100, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: 100, opacity: 0 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 30,
                                        duration: 0.3,
                                    }}
                                    className="h-full"
                                >
                                    <SheetTitle>
                                        <VisuallyHidden>Navigation Menu</VisuallyHidden>
                                    </SheetTitle>
                                    <nav className="flex flex-col space-y-6 mt-10">
                                        {navLinks.map((link) => (
                                            <Link
                                                key={link.name}
                                                href={link.href}
                                                className="text-xl  hover:text-white transition-colors"
                                                onClick={() => setOpen(false)}
                                            >
                                                {link.name}
                                            </Link>
                                        ))}
                                    </nav>
                                </motion.div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </motion.header>
    )
}

export default NavBar