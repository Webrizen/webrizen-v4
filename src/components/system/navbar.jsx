"use client"
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/logo.png";
import { ThemeToggleButton } from "@/components/ui/theme-toggle-button";

const navItems = [
    { title: "Home", href: "/" },
    { title: "Products", href: "/products" },
    { title: "Blog", href: "/blogs" },
    { title: "Resources", href: "/resources" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
]

const menuSlide = {
    initial: { x: "calc(100% + 100px)" },
    enter: {
        x: "0",
        transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
    exit: {
        x: "calc(100% + 100px)",
        transition: {
            duration: 0.5,
            ease: [0.55, 0.06, 0.68, 0.19],
        },
    },
}

const slide = {
    initial: { x: 80, opacity: 0 },
    enter: (i) => ({
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.03 * i,
        },
    }),
    exit: (i) => ({
        x: 80,
        opacity: 0,
        transition: {
            duration: 0.4,
            ease: [0.55, 0.06, 0.68, 0.19],
            delay: 0.02 * i,
        },
    }),
}

const scale = {
    open: {
        scale: 1,
        transition: {
            duration: 0.25,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
    closed: {
        scale: 0,
        transition: {
            duration: 0.2,
            ease: [0.55, 0.06, 0.68, 0.19],
        },
    },
}

function Curve({ closeMenu }) {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

    useEffect(() => {
        const resize = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }

        resize()
        window.addEventListener("resize", resize)
        return () => window.removeEventListener("resize", resize)
    }, [])

    const initialPath = `M100 0 L100 ${dimensions.height} Q-100 ${dimensions.height / 2} 100 0`
    const targetPath = `M100 0 L100 ${dimensions.height} Q100 ${dimensions.height / 2} 100 0`

    const curve = {
        initial: { d: initialPath },
        enter: {
            d: targetPath,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        },
        exit: {
            d: initialPath,
            transition: {
                duration: 0.6,
                ease: [0.55, 0.06, 0.68, 0.19],
            },
        },
    }

    return (
        <svg 
            className="absolute top-0 -left-24 w-24 h-full fill-zinc-900 dark:fill-zinc-50 stroke-none cursor-pointer"
            onClick={closeMenu}
        >
            <motion.path variants={curve} initial="initial" animate="enter" exit="exit" />
        </svg>
    )
}

function NavLink({
    data,
    isActive,
    setSelectedIndicator,
    closeMenu,
}) {
    const { title, href, index } = data

    return (
        <motion.div
            className="relative flex items-center"
            onMouseEnter={() => setSelectedIndicator(href)}
            custom={index}
            variants={slide}
            initial="initial"
            animate="enter"
            exit="exit"
        >
            <motion.div
                variants={scale}
                animate={isActive ? "open" : "closed"}
                className="w-2.5 h-2.5 bg-white rounded-full absolute -left-7"
            />
            <Link
                href={href}
                className="text-white hover:text-zinc-300 transition-all duration-300 ease-out hover:translate-x-1"
                onClick={closeMenu}
            >
                {title}
            </Link>
        </motion.div>
    )
}

function Nav({ closeMenu }) {
    const pathname = usePathname()
    const [selectedIndicator, setSelectedIndicator] = useState(pathname)
    const navRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                closeMenu()
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [closeMenu])

    return (
        <motion.div
            ref={navRef}
            variants={menuSlide}
            initial="initial"
            animate="enter"
            exit="exit"
            className="h-screen bg-indigo-600 dark:bg-indigo-700 fixed right-0 top-0 text-white z-40"
        >
            <div className="box-border h-full p-24 flex flex-col justify-between">
                <div onMouseLeave={() => setSelectedIndicator(pathname)} className="flex flex-col text-5xl gap-3 mt-20">
                    <div className="text-zinc-300 border-b border-zinc-600 uppercase text-xs mb-10 pb-2">Navigation</div>
                    {navItems.map((data, index) => {
                        return (
                            <NavLink
                                key={index}
                                data={{ ...data, index }}
                                isActive={selectedIndicator === data.href}
                                setSelectedIndicator={setSelectedIndicator}
                                closeMenu={closeMenu}
                            />
                        )
                    })}
                </div>
                <div className="flex flex-wrap">
                    <div className="w-1/2">
                        <div className="text-zinc-300 border-b border-zinc-600 uppercase text-xs mb-2 pb-1"></div>
                        <div className="text-white text-sm space-y-1">
                            <div className="hover:text-zinc-300 transition-colors duration-200 cursor-pointer"></div>
                            <div className="hover:text-zinc-300 transition-colors duration-200 cursor-pointer"></div>
                            <div className="hover:text-zinc-300 transition-colors duration-200 cursor-pointer"></div>
                            <div className="hover:text-zinc-300 transition-colors duration-200 cursor-pointer"></div>
                        </div>
                    </div>
                </div>
            </div>
            <Curve closeMenu={closeMenu} />
        </motion.div>
    )
}

export default function Navbar() {
    const [isActive, setIsActive] = useState(false)
    const menuButtonRef = useRef(null)

    const closeMenu = () => setIsActive(false)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuButtonRef.current && !menuButtonRef.current.contains(event.target)) {
                closeMenu()
            }
        }

        if (isActive) {
            document.addEventListener("mousedown", handleClickOutside)
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [isActive])

    return (
        <>
            <header className="fixed md:top-10 inset-x-0 z-50 h-18 flex items-center">
                <div className="mx-auto container w-full px-5 sm:px-10 md:px-12 lg:px-5 h-full items-center">
                    <nav className="flex justify-between items-center h-full">
                        <div className="flex min-w-max items-center">
                            <Link href="/" className="flex items-center gap-x-2 md:text-2xl font-semibold text-gray-700 dark:text-gray-300">
                                <Image src={Logo} alt="Webrizen Logo" className="md:h-8 h-5 w-auto" width={100} height={100} placeholder="blur" />
                                Webrizen
                            </Link>
                        </div>
                        <div className="grid grid-cols-[1fr_.3fr] md:gap-x-2 place-content-center md:p-2 p-1 rounded-full bg-indigo-600 dark:bg-indigo-700">
                            <button
                                ref={menuButtonRef}
                                onClick={() => setIsActive(!isActive)}
                                className={`w-full h-full bg-white text-black rounded-full px-4 md:py-2 cursor-pointer flex items-center justify-center transition-all duration-300 ease-out transform hover:scale-105 ${isActive ? "bg-indigo-700" : ""
                                    }`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="md:size-6 size-3 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                                </svg>
                                <span className="text-xs md:text-base mr-1">Menu</span>
                            </button>
                            <ThemeToggleButton variant="circle-blur" start="top-right" />
                        </div>
                    </nav>
                </div>
            </header>
            <AnimatePresence mode="wait">{isActive && <Nav closeMenu={closeMenu} />}</AnimatePresence>
        </>
    )
}