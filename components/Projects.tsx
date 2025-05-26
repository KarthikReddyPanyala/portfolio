'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

interface Project {
  id: number
  title: string
  description: string
  image: string
  techStack: string[]
  githubUrl?: string
  demoUrl?: string
  visualization?: string
  highlights: string[]
}

const projects: Project[] = [
  {
    id: 1,
    title: "Enhancing Data Diversity and Robustness for Multi-Organ Prediction- test",
    description: "Developed a robust deep learning pipeline for real-time multi-organ segmentation in laparoscopic videos. The project focused on enhancing generalization across diverse surgical scenes using domain adaptation, transfer learning, and synthetic data augmentation.",
    image: '/projects/medical-segmentation.jpg',
    techStack: [
      "YOLOv11",
      "CycleGAN",
      "Transfer Learning",
      "Explainable AI",
      "Federated Learning",
      "SHAP",
      "EigenCAM",
      "Medical Imaging",
      "Python",
      "PyTorch"
    ],
    githubUrl: 'https://github.com/yourusername/multi-organ-prediction',
    visualization: '/visualizations/segmentation-overlay.gif',
    highlights: [
      "Integrated CycleGAN-based domain adaptation to handle lighting and anatomical variation across patients",
      "Used transfer learning and pretrained YOLOv11 for segmentation to improve training efficiency",
      "Integrated Explainable AI to visualize and interpret model decisions",
      "Explored federated learning strategies for collaborative training without data sharing"
    ]
  },
  {
    id: 2,
    title: "A Realistic Image Generation of Face from Text Description",
    description: "Developed a GAN to generate realistic human faces based on text description. Used Python, TensorFlow and GAN architecture to create a model that can generate faces from textual inputs.",
    image: '/projects/medical-segmentation.jpg',
    techStack: ["Python", "TensorFlow", "GAN", "Deep Learning", "Computer Vision"],
    githubUrl: 'https://github.com/yourusername/medical-segmentation',
    demoUrl: 'https://demo.medical-segmentation.com',
    visualization: '/visualizations/segmentation-overlay.gif',
    highlights: [
      "Developed a GAN to generate realistic human faces based on text description",
      "Used Python, TensorFlow and GAN architecture"
    ]
  },
  {
    id: 3,
    title: "Fall Detection of Elderly People using Machine Learning",
    description: "Designed and implemented a machine learning model to detect falls in elderly individuals using sensor data, creating a real-time monitoring system for enhanced safety.",
    image: '/projects/xai-dashboard.jpg',
    techStack: ["Python", "Machine Learning", "Sensor Data", "Real-time Processing"],
    githubUrl: 'https://github.com/yourusername/xai-dashboard',
    demoUrl: 'https://demo.xai-dashboard.com',
    visualization: '/visualizations/shap-heatmap.gif',
    highlights: [
      "Designed an ML model to detect falls in elderly individuals using sensor data",
      "Implemented real-time monitoring system"
    ]
  },
  {
    id: 4,
    title: "Vehicle Parking Management System",
    description: "Developed a web-based system for automated allocation and fine enforcement in parking management, streamlining the parking process and improving efficiency.",
    image: '/projects/medical-segmentation.jpg',
    techStack: ["Web Development", "Python", "Database", "Automation"],
    githubUrl: 'https://github.com/yourusername/medical-segmentation',
    demoUrl: 'https://demo.medical-segmentation.com',
    visualization: '/visualizations/segmentation-overlay.gif',
    highlights: [
      "Developed a web-based system for automated allocation",
      "Implemented fine enforcement functionality"
    ]
  },
  {
    id: 5,
    title: "Housing Price Prediction using Machine Learning",
    description: "Created an ML regression model to predict California housing prices using various machine learning tools and libraries.",
    image: '/projects/xai-dashboard.jpg',
    techStack: ["Python", "Scikit-learn", "OpenCV", "Hugging Face", "Machine Learning"],
    githubUrl: 'https://github.com/yourusername/xai-dashboard',
    demoUrl: 'https://demo.xai-dashboard.com',
    visualization: '/visualizations/shap-heatmap.gif',
    highlights: [
      "Created an ML regression model to predict California housing prices",
      "Trained on California housing dataset using Python, Scikit-learn, OpenCV"
    ]
  },
  // Add more projects as needed
]

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="py-20 section-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-['Press_Start_2P'] text-center mb-12 section-heading"
        >
          Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card hover:border-primary-500 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="space-y-4">
                <h3 
                  className="text-xl font-bold text-text-light dark:text-text-dark"
                >
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm">{highlight}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary-500/10 text-text-light dark:text-text-dark rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white dark:bg-dark-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6">
                  <h3 
                    className="text-2xl font-bold mb-4 text-text-light dark:text-text-dark"
                  >
                    {selectedProject.title}
                  </h3>
                  <p className="text-dark-600 dark:text-dark-300 mb-6">
                    {selectedProject.description}
                  </p>
                  {selectedProject.visualization && (
                    <div className="mb-6">
                      <img
                        src={selectedProject.visualization}
                        alt={`${selectedProject.title} visualization`}
                        className="w-full rounded-lg"
                      />
                    </div>
                  )}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-text-light dark:text-text-dark rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                      >
                        <FiGithub className="w-5 h-5 mr-2" />
                        View on GitHub
                      </a>
                    )}
                    {selectedProject.demoUrl && (
                      <a
                        href={selectedProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                      >
                        <FiExternalLink className="w-5 h-5 mr-2" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Projects 
