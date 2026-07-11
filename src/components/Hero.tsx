"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import RotatingRole from "@/components/RotatingRole";
import Image from "next/image";
import heroImg from "@/assets/hero.png"
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base text-foreground/60"
            >
              welcome, my name is
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="font-display text-8xl font-bold leading-none mt-2"
            >
              Griffin
              <br />
              Kuchar
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base text-foreground/60"
            >
              nice to meet you!
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6}}
              className="text-3xl mt-8"
            >
              I am <RotatingRole />
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.7 }}
              className="text-sm text-foreground mt-6 leading-relaxed max-w-prose"
            >
              A Senior at Texas Christian University (TCU) studying Computer Science,
              Mathematics, and Economics, graduating in May 2027. I'm the product of
              cultivating Machine Learning undergraduate research and CS tutoring with two
              strong industry internships at AMD.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.7 }}
              className="text-sm text-foreground mt-6 leading-relaxed max-w-prose"
            >
              At my core, I am a creator and a builder who sets and achieves his own goals: learning new skills, meeting new people,
              and maturing as both a person and an engineer along the way.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.7 }}
              className="text-sm text-foreground mt-6 leading-relaxed max-w-prose font-semibold"
            >
              I am currently searching for Summer 2027 internships before beginning my Master's in Fall 2027.
            </motion.p>
            <div className="flex items-center gap-4 mt-8">
                <a href="mailto:griffin.kuchar@gmail.com" className="btn-primary">
                    Let's Talk
                </a>
                < a 
                  href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    Resume
                  </a>
                <a
                    href="https://www.linkedin.com/in/griffin-kuchar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-tertiary"
                    aria-label="LinkedIn"
                    >
                    <FaLinkedin size={22} />
                </a>
                <a
                    href="https://github.com/gkuchar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-tertiary"
                    aria-label="GitHub"
                    >
                    <FaGithub size={22} />
                </a>
            </div>
        </div>
        <div className="flex justify-center">
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[31rem] h-[31rem] rounded-full border-2 border-dashed border-foreground animate-spin-slow" />
          <Image
            src={heroImg}
            alt="Griffin Kuchar"
            width={400}
            height={462}
            className="rounded-lg relative border-4 border-foreground/80 transition-transform duration-300 hover:scale-105"
            priority
          />
        </motion.div>
      </div>
      </div>
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="w-fit mx-auto mt-8 block"
      >
        <div className="flex flex-col items-center gap-1 text-foreground/70 transition-all duration-300 hover:scale-[1.15] hover:text-foreground">
          <span className="text-sm">scroll</span>
          <svg
            className="w-4 h-4 animate-bounce [animation-duration:1.5s]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.a>
    </section>
  );
}