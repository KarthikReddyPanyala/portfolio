import { motion } from 'framer-motion'

const Education = () => {
  const education = [
    {
      school: "Saint Louis University",
      location: "MO",
      degree: "Master of Science in Artificial Intelligence",
      period: "2023-2025",
      current: true
    },
    {
      school: "St. Martins Engineering College",
      degree: "Bachelor of Computer Science Engineering",
      period: "2019-2023",
      current: false
    }
  ]

  return (
    <section id="education" className="py-20 section-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-['Press_Start_2P'] text-center mb-12 section-heading"
        >
          Education
        </motion.h2>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-6 border border-primary-500 bg-white/80 dark:bg-black rounded-none relative"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-start gap-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-text-light dark:text-text-dark">{edu.school}</h3>
                  <p className="text-base text-text-light dark:text-primary-400">{edu.degree}</p>
                  {edu.location && (
                    <p className="text-sm text-text-light dark:text-primary-400">{edu.location}</p>
                  )}
                </div>
                <div className="md:self-start">
                  <span className="inline-block px-4 py-1 rounded-sm text-sm bg-gray-700/20 text-text-light dark:bg-[#1a1a1a] dark:text-primary-400">
                    {edu.period}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education 