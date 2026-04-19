'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface Location {
  id: string
  name: string
  title: string
  description: string
  category: 'web' | 'design' | 'fullstack' | 'tool'
  tags: string[]
  link?: string
}

interface ProjectCardProps {
  location: Location
  onClose: () => void
}

const categoryBgColors: Record<string, string> = {
  web: 'from-primary/20 to-primary/5',
  design: '#45d9a820',
  fullstack: 'from-red-500/20 to-red-500/5',
  tool: 'from-purple-500/20 to-purple-500/5',
}

const categoryLabels: Record<string, string> = {
  web: 'Web Development',
  design: 'Design System',
  fullstack: 'Full Stack',
  tool: 'Development Tool',
}

export default function ProjectCard({ location, onClose }: ProjectCardProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-gradient-to-br from-background to-accent/10 rounded-2xl border border-primary/30 max-w-md w-full overflow-hidden shadow-2xl"
        >
          {/* Header with category badge */}
          <div className={`p-6 pb-4 bg-gradient-to-r ${categoryBgColors[location.category]}`}>
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-foreground mb-2">{location.name}</h2>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-primary bg-primary/20 border border-primary/30">
                  {categoryLabels[location.category]}
                </span>
              </div>
              <button
                onClick={onClose}
                className="text-foreground/60 hover:text-foreground transition-colors ml-4"
                aria-label="Close"
              >
                <X size={24} />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{location.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{location.description}</p>
            </div>

            {/* Tags */}
            <div>
              <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">
                Technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {location.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs bg-primary/10 text-primary border border-primary/30"
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(212, 175, 55, 0.2)' }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Stats placeholder */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-primary/20">
              <motion.div
                className="text-center p-3 rounded-lg bg-primary/10"
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-2xl font-bold text-primary">12</p>
                <p className="text-xs text-foreground/60 mt-1">Months</p>
              </motion.div>
              <motion.div
                className="text-center p-3 rounded-lg bg-primary/10"
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-2xl font-bold text-primary">5K+</p>
                <p className="text-xs text-foreground/60 mt-1">Users</p>
              </motion.div>
              <motion.div
                className="text-center p-3 rounded-lg bg-primary/10"
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-2xl font-bold text-primary">98%</p>
                <p className="text-xs text-foreground/60 mt-1">Uptime</p>
              </motion.div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-3 pt-2">
              <motion.a
                href={location.link || '#'}
                className="flex-1 px-4 py-3 bg-primary text-background rounded-lg font-medium text-center transition-all"
                whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(212, 175, 55, 0.4)' }}
                whileTap={{ scale: 0.98 }}
              >
                View Project
              </motion.a>
              <motion.button
                onClick={onClose}
                className="flex-1 px-4 py-3 border border-primary/50 text-primary rounded-lg font-medium transition-all"
                whileHover={{ backgroundColor: 'rgba(212, 175, 55, 0.1)' }}
                whileTap={{ scale: 0.98 }}
              >
                Explore More
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
