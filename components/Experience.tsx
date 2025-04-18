import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      title: "Team Lead, Social Media Analyst",
      company: "Excelerate Internship",
      period: "Jun 2023 – Jul 2023",
      type: "Remote",
      responsibilities: [
        "Lead a Team in social media analysis and digital marketing strategies",
        "Implemented market research and analyzed engagement trends",
        "Implemented content strategies that improved audience reach and interaction"
      ]
    },
    {
      title: "Team Lead, Data Visualization",
      company: "Excelerate Internship",
      period: "Jul 2023 - Aug 2023",
      type: "Remote",
      responsibilities: [
        "Lead a 5-member team to apply data visualization techniques to analyze business insights, improving analysis efficiency",
        "Designed effective and engaging data presentation using best practices"
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 section-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-['Press_Start_2P'] text-center mb-12 section-heading"
        >
          Experience
        </motion.h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="card hover:border-primary-500 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div>
                    <h3 className="text-xl font-bold mb-1 text-[#000000] dark:text-[#00ff00]">{exp.title}</h3>
                    <p className="text-lg card-description">{exp.company}</p>
                  </div>
                  <div className="mt-2 md:mt-0 flex flex-wrap gap-2">
                    <span className="inline-block px-3 py-1 rounded-full text-sm bg-primary-500/20 text-[#000000] dark:text-[#00ff00] font-medium">
                      {exp.period}
                    </span>
                    <span className="inline-block px-3 py-1 rounded-full text-sm bg-[#e0e0e0] dark:bg-[#1a1a1a] text-[#000000] dark:text-[#00ff00] font-medium">
                      {exp.type}
                    </span>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="text-base card-description">{resp}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience 