'use client'

import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden section-bg">
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden border-4 border-[color:var(--primary)] shadow-xl"
            style={{
              backgroundImage: 'url("https://karthikreddypanyala.github.io/KarthiReddyPanyala.github.io/profile.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--primary)]/20 to-[color:var(--primary)]/20" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[color:var(--text)]">
              Hi, I'm Karthik Panyala
            </h1>
            <h2 className="text-2xl sm:text-3xl font-bold">
              <span className="font-['Press_Start_2P'] tracking-wider text-[color:var(--text)]">AI & ML</span>
              <br />
              <span className="font-['Press_Start_2P'] tracking-wider text-[color:var(--text)]">Graduate Student</span>
            </h2>
            <p className="text-lg sm:text-xl max-w-2xl mx-auto text-[color:var(--text-description)]">
              Graduate student in Artificial Intelligence with a deep interest in machine learning, deep learning, and data-driven solutions. Passionate about creating meaningful impact through AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a href="#projects" className="px-6 py-3 bg-transparent border-2 border-[color:var(--primary)] text-[color:var(--text)] hover:bg-[color:var(--primary)] hover:text-[color:var(--background)] font-['Press_Start_2P'] text-sm tracking-wider transform transition-all duration-300 hover:scale-105">
                VIEW PROJECTS
              </a>
              <a href="#contact" className="px-6 py-3 bg-transparent border-2 border-[color:var(--primary)] text-[color:var(--text)] hover:bg-[color:var(--primary)] hover:text-[color:var(--background)] font-['Press_Start_2P'] text-sm tracking-wider transform transition-all duration-300 hover:scale-105">
                CONTACT ME
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero 