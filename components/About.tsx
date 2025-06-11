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
        Hi, I'm Karthik — a passionate AI graduate student with a love for building intelligent systems that actually make a difference. My journey has taken me through a variety of hands-on projects, from segmenting organs in real surgical videos using YOLOv11 to detecting fake news and summarizing live news feeds with NLP models.<br /><br />
        What drives me is the intersection of deep learning, real-world applications, and explainability. Whether it's developing SHAP-based interpretable models for mushroom classification, enhancing surgical segmentation with synthetic data, or using GANs to bring text descriptions to life as images — I enjoy solving problems that are both technical and meaningful.<br /><br />
        I'm especially interested in healthcare AI, model transparency, and data-centric solutions. I strive to build AI systems that are not only fast and accurate, but also interpretable and robust across diverse scenarios.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div 
          className="card"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3 className="text-xl font-bold mb-2">Research Focus</h3>
          <ul className="list-disc list-inside text-secondary">
            <li>Medical Image Segmentation using Deep Learning (YOLOv11)</li>
            <li>Explainable AI (e.g., SHAP for model transparency)</li>
            <li>Synthetic Data Generation & Domain Adaptation</li>
            <li>Real-Time AI Inference for Edge Devices</li>
            <li>Text-to-Image Generation with GANs</li>
            <li>Natural Language Processing with Transformer Models</li>
          </ul>
        </motion.div>
        <motion.div 
          className="card"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3 className="text-xl font-bold mb-2">Interests</h3>
          <ul className="list-disc list-inside text-secondary">
            <li>AI in Healthcare & Assistive Technologies</li>
            <li>Interpretable Machine Learning</li>
            <li>Data-Centric AI & Robust Model Training</li>
            <li>Generative AI & Creative ML Applications</li>
            <li>Real-Time Systems & Deployment (Streamlit, Hugging Face)</li>
            <li>AI Ethics, Trust, and Responsible AI</li>
          </ul>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default About 