import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      title: "Team Lead, AI Capstone Project",
      company: "Saint Louis University",
      period: "Jan 2025 – May 2025",
      type: "Hybrid",
      responsibilities: [
        "Spearheaded development of YOLOv11 pipeline segmentation using 8000+ real laparoscopic frames",
        "Executed underperforming-class duplication, targeted augmentation, and better contour extraction to improve mask quality",
        "Integrated pseudo-labeling of synthetic frames using a trained YOLOv11 model, merging real and synthetic annotations for robust training",
        "Achieved reliable per-class segmentation accuracy with validation mAP50-95 ≥ 0.73 and sub-20 ms inference speed"
      ]
    },
    {
      title: "Team Lead, Social Media Analyst",
      company: "Excelerate Internship",
      period: "Jun 2023 – Jul 2023",
      type: "Remote",
      responsibilities: [
        "Directed a 5-member team to analyze 1,000+ social media posts and trends across 4 platforms using trend analysis tools",
        "Boosted engagement by 20% and reach by 25% with optimized content strategies",
        "Generated 3 strategic reports with actionable insights to refine digital outreach campaigns"
      ]
    },
    {
      title: "Team Lead, Data Visualization",
      company: "Excelerate Internship",
      period: "Jul 2023 - Aug 2023",
      type: "Remote",
      responsibilities: [
        "Led visual analysis of 7,000+ business records using data storytelling and interactive dashboards",
        "Reduced reporting time by 36% by creating automated visualizations",
        "Designed 2 dashboards using the best practices in user-centric data presentation"
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