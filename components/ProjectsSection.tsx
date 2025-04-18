import { motion } from 'framer-motion'

const ProjectsSection = () => {
  const projects = [
    {
      title: "Enhancing Data Diversity and Robustness for Multi-Organ Prediction",
      description: "Developed a robust deep learning pipeline for real-time multi-organ segmentation in laparoscopic videos. The project focused on enhancing generalization across diverse surgical scenes using domain adaptation, transfer learning, and synthetic data augmentation.",
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
      highlights: [
        "Integrated CycleGAN-based domain adaptation to handle lighting and anatomical variation across patients",
        "Used transfer learning and pretrained YOLOv11 for segmentation to improve training efficiency",
        "Integrated Explainable AI to visualize and interpret model decisions",
        "Explored federated learning strategies for collaborative training without data sharing"
      ],
      current: true
    },
    {
      title: "A Realistic Image Generation of Face from Text Description",
      description: "Developed a GAN to generate realistic human faces based on text description. Used Python, TensorFlow and GAN architecture to create a model that can generate faces from textual inputs.",
      techStack: ["Python", "TensorFlow", "GAN", "Deep Learning", "Computer Vision"],
      highlights: [
        "Developed a GAN to generate realistic human faces based on text description",
        "Used Python, TensorFlow and GAN architecture"
      ]
    },
    {
      title: "Fall Detection of Elderly People using Machine Learning",
      description: "Designed and implemented a machine learning model to detect falls in elderly individuals using sensor data, creating a real-time monitoring system for enhanced safety.",
      techStack: ["Python", "Machine Learning", "Sensor Data", "Real-time Processing"],
      highlights: [
        "Designed an ML model to detect falls in elderly individuals using sensor data",
        "Implemented real-time monitoring system"
      ]
    },
    {
      title: "Vehicle Parking Management System",
      description: "Developed a web-based system for automated allocation and fine enforcement in parking management, streamlining the parking process and improving efficiency.",
      techStack: ["Web Development", "Python", "Database", "Automation"],
      highlights: [
        "Developed a web-based system for automated allocation",
        "Implemented fine enforcement functionality"
      ]
    },
    {
      title: "Housing Price Prediction using Machine Learning",
      description: "Created an ML regression model to predict California housing prices using various machine learning tools and libraries.",
      techStack: ["Python", "Scikit-learn", "OpenCV", "Hugging Face", "Machine Learning"],
      highlights: [
        "Created an ML regression model to predict California housing prices",
        "Trained on California housing dataset using Python, Scikit-learn, OpenCV"
      ]
    }
  ]

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
        
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card hover:border-primary-500 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-text-light dark:text-text-dark">
                    {project.title}
                  </h3>
                  {project.current && (
                    <span className="px-3 py-1 bg-black dark:bg-primary-500 text-white dark:text-black rounded-full text-sm font-medium animate-pulse">
                      Currently Working On
                    </span>
                  )}
                </div>
                <p className="text-gray-600 dark:text-primary-400">
                  {project.description}
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-primary-400">
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
      </div>
    </section>
  )
}

export default ProjectsSection 