'use client'

import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.section
      className="section-bg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-4 section-heading">About Me</h2>
      <p className="text-lg mb-6">
        I am a dedicated AI researcher with a focus on Medical Image Segmentation and Explainable AI. 
        My research aims to make AI systems in healthcare more accurate, interpretable, and trustworthy. 
        I combine deep learning techniques with explainable AI methods to develop solutions that not only 
        perform well but also provide clear insights into their decision-making process.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div 
          className="card"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3 className="text-xl font-bold mb-2">Research Focus</h3>
          <ul className="list-disc list-inside text-secondary">
            <li>Medical Image Analysis</li>
            <li>Explainable AI Methods</li>
            <li>Deep Learning in Healthcare</li>
            <li>Computer Vision</li>
          </ul>
        </motion.div>
        <motion.div 
          className="card"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3 className="text-xl font-bold mb-2">Interests</h3>
          <ul className="list-disc list-inside text-secondary">
            <li>AI in Healthcare</li>
            <li>Model Interpretability</li>
            <li>Medical Imaging</li>
            <li>Research Publications</li>
          </ul>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default About 