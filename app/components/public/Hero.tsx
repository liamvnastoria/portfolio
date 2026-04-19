'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  const scrollToMap = () => {
    const mapElement = document.getElementById('map-section')
    mapElement?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, #d4af37 0%, transparent 70%)' }}
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, #2d5f4f 0%, transparent 70%)' }}
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 text-center max-w-4xl"
      >
        {/* Overline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary" />
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">
            Welcome to my realm
          </span>
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary" />
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="block text-foreground">I&apos;m</span>
          <motion.span
            className="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Liam Von Astoria
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl text-foreground/70 mb-8 leading-relaxed"
        >
          Full-stack developer crafting elegant solutions at the intersection of{' '}
          <span className="text-primary font-semibold">design and technology</span>
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <motion.button
            onClick={scrollToMap}
            className="px-8 py-4 bg-primary text-background rounded-lg font-semibold text-lg transition-all"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212, 175, 55, 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            Explore My Work
          </motion.button>
          <motion.a
            href="#contact"
            className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold text-lg transition-all"
            whileHover={{ backgroundColor: 'rgba(212, 175, 55, 0.1)' }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center mt-16"
        >
          <button
            onClick={scrollToMap}
            className="p-3 rounded-full border border-primary/30 text-primary hover:border-primary transition-colors"
            aria-label="Scroll to map"
          >
            <ArrowDown size={24} />
          </button>
        </motion.div>
      </motion.div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-2 h-2 bg-primary rounded-full opacity-40"
        animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-secondary rounded-full opacity-30"
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.3, 1] }}
        transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
      />
    </section>
  )
}
