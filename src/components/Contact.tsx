"use client";

import { motion } from "motion/react";

export default function Contact() {

  return (
    <section id="contact" className="pb-32 scroll-mt-24">
      {/* heading stays aligned with other sections */}
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="flex items-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-5xl font-bold whitespace-nowrap">Contact</h2>
          <div className="flex-1 h-px bg-foreground/20" />
        </motion.div>
        {/* centered content: paragraph + buttons */}
      <motion.div
      className="flex flex-col items-center text-center gap-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <p className="max-w-xl text-foreground leading-relaxed">
        I'm always open to chatting and I love meeting new people. Whether it's for a role, a project, or just to talk about the latest trends in tech, feel free to shoot me an email or connect with me on LinkedIn!
      </p>
      <div className="flex items-center gap-4">
        <a href="mailto:griffin.kuchar@gmail.com" className="btn-primary text-lg px-32 py-3">Email Me</a>
        <a href="https://www.linkedin.com/in/griffin-kuchar/" target="_blank" rel="noopener noreferrer" className="btn-secondary text-lg px-32 py-3">LinkedIn</a>
      </div>
    </motion.div>
      </div>
    </section>
  );
}