"use client";
import { Unbounded } from "next/font/google";
import Prism from "@/components/system/prism";
import Marquee from "@/components/system/marquee";
import Link from "next/link";
import { motion } from "framer-motion";

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
      duration: 0.8
    }
  }
};

const titleVariants = {
  hidden: { 
    opacity: 0, 
    y: 100,
    rotateX: -90 
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 120,
      mass: 1,
      delay: 0.2
    }
  }
};

const buttonVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    rotate: -5 
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100,
      delay: 0.8
    }
  },
  hover: {
    scale: 1.05,
    rotate: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 300
    }
  },
  tap: {
    scale: 0.95
  }
};

const prismVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    rotate: 0 
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 60,
      duration: 2
    }
  }
};

export default function Home() {
  return (
    <motion.main 
      className="md:px-10 md:pt-5"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.section 
        className="h-[96vh] w-full bg-cover bg-center relative overflow-hidden rounded-4xl"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.div 
          className="relative z-30 container mx-auto w-full md:pt-48 py-12 md:px-0 px-5 space-y-6 md:space-y-8 overflow-hidden rounded-4xl flex flex-col text-left"
          variants={containerVariants}
        >
          <motion.h1
            className={`text-zinc-900 dark:text-white font-bold text-3xl/tight md:text-8xl/tight ${unbounded.className}`}
            variants={titleVariants}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            Design & development of digital experiences and intelligent interfaces.
          </motion.h1>
          
          <motion.p 
            className="text-zinc-600 dark:text-zinc-300 max-w-xs md:max-w-6xl text-sm md:text-2xl px-2 sm:px-0"
            variants={itemVariants}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.4 }}
          >
            We are a team of passionate designers and developers dedicated to crafting beautiful, functional, and user-centric digital solutions that drive results.
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.6 }}
          >
            <Marquee />
          </motion.div>
        </motion.div>

        <motion.div 
          className="absolute bottom-10 right-10 w-min whitespace-nowrap flex flex-row gap-2 z-10"
        >
          <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
            <Link href="/products" className="flex justify-center items-center w-full sm:w-max px-6 h-12 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-[#1d1754] hover:after:opacity-100 hover:after:scale-[2.5] bg-indigo-600 border-transparent hover:border-[#4c00ff15]">
              <span className="relative z-10 text-white">
                Our Products
              </span>
            </Link>
          </motion.div>
          
          <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
            <Link href="/about" className="flex justify-center items-center w-full sm:w-max px-6 h-12 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-[#1d1754] hover:after:opacity-100 hover:after:scale-[2.5] bg-white dark:bg-zinc-900 border-transparent hover:border-[#4c00ff15]">
              <span className="relative z-10 text-zinc-900 dark:text-white hover:text-white">
                Learn more
              </span>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          className="absolute top-0 right-0 h-[98vh] w-full"
          variants={prismVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
        >
          <Prism
            animationType="rotate"
            timeScale={0.5}
            height={3.5}
            baseWidth={5.5}
            scale={3.6}
            hueShift={0}
            colorFrequency={1}
            noise={0.5}
            glow={1}
          />
        </motion.div>
      </motion.section>
    </motion.main>
  );
}