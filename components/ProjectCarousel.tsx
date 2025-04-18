'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi'
import Image from 'next/image'

interface Project {
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  imageUrl: string
}

const projects: Project[] = [
  {
    title: "Project 1",
    description: "A brief description of your first project. Highlight the key features and technologies used.",
    technologies: ["React", "Next.js", "TypeScript"],
    githubUrl: "https://github.com/yourusername/project1",
    liveUrl: "https://project1.com",
    imageUrl: "/project1.jpg"
  },
  {
    title: "Project 2",
    description: "A brief description of your second project. Highlight the key features and technologies used.",
    technologies: ["Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/yourusername/project2",
    liveUrl: "https://project2.com",
    imageUrl: "/project2.jpg"
  },
  // Add more projects as needed
]

export default function ProjectCarousel() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <motion.div
          key={project.title}
          className="card cursor-pointer"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={() => setSelectedProject(project)}
        >
          <div className="relative h-48">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-sm text-secondary mb-4 line-clamp-2">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="tag text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card-bg rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64">
                <Image
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
                <button
                  className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white"
                  onClick={() => setSelectedProject(null)}
                >
                  <FiX size={24} />
                </button>
              </div>
              <div className="p-6">
                <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
                <p className="text-lg mb-6">{selectedProject.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.technologies.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary hover:text-primary/80"
                    >
                      <FiGithub /> View on GitHub
                    </a>
                  )}
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary hover:text-primary/80"
                    >
                      <FiExternalLink /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 