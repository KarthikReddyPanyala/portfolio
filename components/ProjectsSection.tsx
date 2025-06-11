import { motion } from 'framer-motion'

const ProjectsSection = () => {
  const projects = [
    {
      title: "Enhancing Data Diversity and Robustness for DaVinci-Generated Videos",
      description: "Developed and trained a YOLO v11 model on real surgical video data for organ segmentation, focusing on improving model performance and inference speed.",
      techStack: ["YOLOv11", "Computer Vision", "Deep Learning", "Python", "PyTorch"],
      highlights: [
        "Developed and trained a YOLO v11 model on real surgical video data for organ segmentation",
        "Evaluated performance on object detection tasks and attained an inference speed of ≤ 20 ms/frame",
        "Conducted object detection evaluations and analyzed model performance on unseen videos"
      ]
    },
    {
      title: "AI News Summarizer Bot",
      description: "Created an AI-powered bot that fetches and summarizes news articles using advanced natural language processing techniques.",
      techStack: ["Python", "NLP", "T5", "RSS", "Web Scraping"],
      highlights: [
        "Created an AI-powered bot that fetches live BBC RSS feeds and summarizes articles using a pretrained T5-samll model",
        "Offers category section, live scraping and on-the-fly summarization"
      ]
    },
    {
      title: "Explainable AI for Mushroom Classification",
      description: "Built a SHAP-explained Random Forest model for mushroom classification with high accuracy and interpretability.",
      techStack: ["Python", "SHAP", "Random Forest", "Machine Learning", "UCI Dataset"],
      highlights: [
        "Built a SHAP-explained Random Forest model using UCI mushrooms dataset with 22 features",
        "Achieved 98% training Accuracy and 96% test accuracy with 0.3% and 0.4% loss respectively"
      ]
    },
    {
      title: "Fake News Detection with SHAP Explainability",
      description: "Developed a logistic regression model with TF-IDF vectorization to classify articles as real or fake, with explainable AI features.",
      techStack: ["Python", "Logistic Regression", "TF-IDF", "SHAP", "Streamlit"],
      highlights: [
        "Developed a logistic regression model with TF-IDF vectorization to classify articles as real or fake",
        "Deployed using a Streamlit Interface for real-time user interaction"
      ]
    },
    {
      title: "A Realistic Image Generation of Face from Text Description",
      description: "Engineered a GAN pipeline to generate photorealistic human faces from text descriptions using advanced deep learning techniques.",
      techStack: ["Python", "TensorFlow", "GAN", "Deep Learning", "Computer Vision"],
      highlights: [
        "Engineered a GAN pipeline using TensorFlow to generate photorealistic human faces from text description",
        "Applied Python, TensorFlow and GAN architecture"
      ]
    },
    {
      title: "Fall Detection of Elderly People using Machine Learning",
      description: "Built and deployed a sensor-based data fall detection system for elderly people using supervised learning techniques.",
      techStack: ["Python", "Machine Learning", "Sensor Data", "Supervised Learning"],
      highlights: [
        "Built and deployed a sensor-based data fall detection system for elderly people using supervised learning"
      ]
    },
    {
      title: "Housing Price Prediction using Machine Learning",
      description: "Created an ML regression model to predict California housing prices using various machine learning tools and libraries.",
      techStack: ["Python", "Scikit-learn", "OpenCV", "Hugging Face", "Machine Learning"],
      highlights: [
        "Created an ML regression model to predict California housing prices and deployed it on Hugging Face",
        "Trained on California housing dataset using Python, Scikit-learn, OpenCV, Hugging Face"
      ]
    },
    {
      title: "Warfarin Dosage Prediction",
      description: "Developed a machine learning model to predict optimal warfarin dosage using anonymized patient records.",
      techStack: ["Python", "Machine Learning", "Healthcare", "Data Analysis"],
      highlights: [
        "Trained a model to predict optimal warfarin dosage using anonymized patient records"
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