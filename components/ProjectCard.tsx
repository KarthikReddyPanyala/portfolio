'use client'

import { motion } from 'framer-motion'

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
}

export default function ProjectCard({ title, description, technologies }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className="bg-gray-800 rounded-lg p-6 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
    >
      <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-4" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  )
} 