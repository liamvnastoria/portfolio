'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import ProjectCard from './ProjectCard'

interface Location {
  id: string
  name: string
  title: string
  description: string
  x: number
  y: number
  category: 'web' | 'design' | 'fullstack' | 'tool'
  tags: string[]
  link?: string
  image?: string
}

const locations: Location[] = [
  {
    id: '1',
    name: 'Nexus Platform',
    title: 'Full-Stack SaaS',
    description: 'A real-time collaboration platform with WebSocket integration and complex state management.',
    x: 25,
    y: 30,
    category: 'fullstack',
    tags: ['React', 'Node.js', 'PostgreSQL', 'WebSocket'],
    link: '#',
  },
  {
    id: '2',
    name: 'Cipher Design',
    title: 'Design System',
    description: 'Comprehensive design system with 100+ components and themeable architecture.',
    x: 75,
    y: 25,
    category: 'design',
    tags: ['React', 'Tailwind', 'TypeScript', 'Storybook'],
    link: '#',
  },
  {
    id: '3',
    name: 'DataVault',
    title: 'Analytics Dashboard',
    description: 'Advanced analytics dashboard with real-time data visualization and custom metrics.',
    x: 50,
    y: 60,
    category: 'web',
    tags: ['Next.js', 'D3.js', 'API', 'Charts'],
    link: '#',
  },
  {
    id: '4',
    name: 'CodeWeaver',
    title: 'IDE Extension',
    description: 'AI-powered code generation tool that integrates seamlessly with VSCode.',
    x: 20,
    y: 70,
    category: 'tool',
    tags: ['TypeScript', 'VSCode API', 'AI', 'LSP'],
    link: '#',
  },
  {
    id: '5',
    name: 'Aurora Cloud',
    title: 'Cloud Infrastructure',
    description: 'Distributed cloud infrastructure management with containerization and orchestration.',
    x: 80,
    y: 75,
    category: 'fullstack',
    tags: ['Docker', 'Kubernetes', 'Go', 'AWS'],
    link: '#',
  },
  {
    id: '6',
    name: 'Spectrum UI',
    title: 'Component Library',
    description: 'Accessible component library with comprehensive documentation and examples.',
    x: 50,
    y: 20,
    category: 'design',
    tags: ['React', 'Accessibility', 'Documentation', 'Testing'],
    link: '#',
  },
]

const categoryColors: Record<string, string> = {
  web: '#d4af37',
  design: '#45d9a8',
  fullstack: '#ff6b6b',
  tool: '#a78bfa',
}

export default function ExplorationMap() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null)
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1 },
  }

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-background via-background to-accent/5 overflow-hidden">
      {/* Map grid background */}
      <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Animated background elements */}
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: 'radial-gradient(circle, #d4af37 0%, transparent 70%)' }}
        animate={{ x: [0, 30, 0], y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: 'radial-gradient(circle, #2d5f4f 0%, transparent 70%)' }}
        animate={{ x: [0, -30, 0], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Connections between locations */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {locations.map((loc, idx) => {
          if (idx < locations.length - 1) {
            const nextLoc = locations[idx + 1]
            return (
              <motion.line
                key={`connection-${loc.id}`}
                x1={`${loc.x}%`}
                y1={`${loc.y}%`}
                x2={`${nextLoc.x}%`}
                y2={`${nextLoc.y}%`}
                stroke="url(#gradientLine)"
                strokeWidth="1"
                opacity="0.2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: idx * 0.1 }}
              />
            )
          }
        })}
        <defs>
          <linearGradient id="gradientLine" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d4af37" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#2d5f4f" stopOpacity="0.5" />
          </linearGradient>
        </defs>
      </svg>

      {/* Location markers */}
      <motion.div variants={container} initial="hidden" animate="show" className="absolute inset-0">
        {locations.map((location) => (
          <motion.div
            key={location.id}
            variants={item}
            className="absolute transform -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${location.x}%`, top: `${location.y}%` }}
            whileHover={{ scale: 1.2 }}
            onMouseEnter={() => setHoveredLocation(location.id)}
            onMouseLeave={() => setHoveredLocation(null)}
          >
            <motion.button
              onClick={() => setSelectedLocation(location)}
              className="relative group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Outer glow ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 opacity-0 group-hover:opacity-100"
                style={{ borderColor: categoryColors[location.category] }}
                animate={hoveredLocation === location.id ? { scale: 1.8 } : { scale: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Main marker */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-xs border-2 backdrop-blur-sm transition-all"
                style={{
                  backgroundColor: `${categoryColors[location.category]}20`,
                  borderColor: categoryColors[location.category],
                  color: categoryColors[location.category],
                }}
              >
                {location.name.charAt(0)}
              </div>

              {/* Floating label on hover */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={
                  hoveredLocation === location.id
                    ? { opacity: 1, y: -50 }
                    : { opacity: 0, y: -10 }
                }
                transition={{ duration: 0.2 }}
                className="absolute left-1/2 transform -translate-x-1/2 whitespace-nowrap pointer-events-none"
              >
                <div className="bg-primary/90 text-background px-3 py-1 rounded text-sm font-medium">
                  {location.title}
                </div>
              </motion.div>
            </motion.button>
          </motion.div>
        ))}
      </motion.div>

      {/* Selected project card */}
      {selectedLocation && (
        <ProjectCard location={selectedLocation} onClose={() => setSelectedLocation(null)} />
      )}

      {/* Legend */}
      <motion.div
        className="absolute bottom-6 left-6 space-y-2 p-4 rounded-lg border border-primary/20 bg-background/80 backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-xs font-semibold text-primary uppercase tracking-wide">Categories</p>
        <div className="space-y-1">
          {Object.entries(categoryColors).map(([category, color]) => (
            <div key={category} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: color }}
              />
              <span className="text-xs text-foreground/70 capitalize">{category}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Instructions */}
      <motion.div
        className="absolute top-6 right-6 text-sm text-foreground/60 text-right max-w-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p>Explore my digital realm</p>
        <p className="text-xs mt-1">Hover over locations • Click to discover</p>
      </motion.div>
    </div>
  )
}
