'use client'

import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "C", "Java", "HTML", "SQL"]
    },
    {
      title: "Machine Learning & AI Tools",
      skills: ["TensorFlow", "PyTorch"]
    },
    {
      title: "Databases",
      skills: ["MySQL"]
    },
    {
      title: "Software",
      skills: ["PowerPoint", "Excel", "Word"]
    },
    {
      title: "Operating Systems",
      skills: ["Windows", "Mac"]
    }
  ]

  return (
    <section id="skills" className="py-20 section-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-['Press_Start_2P'] text-center mb-12 section-heading"
        >
          Skills
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card hover:border-primary-500 transition-all duration-300"
            >
              <h3 className="text-lg font-bold mb-4 text-black dark:text-primary-400">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-700 dark:text-gray-300 hover:bg-primary-500/20 hover:text-primary-500 dark:hover:bg-primary-500/10 dark:hover:text-primary-400 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills 