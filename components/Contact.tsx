'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi'
import { useTheme } from 'next-themes'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const { theme } = useTheme()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section id="contact" className="py-12 section-bg">
      <div className="max-w-3xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-center mb-8 gradient-text font-['Press_Start_2P'] tracking-wider"
        >
          Get in Touch
        </motion.h2>

        <div className="flex justify-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card max-w-md w-full p-6 border border-[#00ff00] dark:border-[#00ff00] bg-white/5 backdrop-blur-sm"
          >
            <div className="space-y-4">
              <a
                href="mailto:karthikp3122001@gmail.com"
                className="flex items-center space-x-3 text-dark-600 dark:text-[#00ff00] hover:text-primary-500 dark:hover:text-[#00cc00] transition-colors duration-300"
              >
                <FiMail className="w-5 h-5" />
                <span>karthikp3122001@gmail.com</span>
              </a>
              <a
                href="tel:+15717627008"
                className="flex items-center space-x-3 text-dark-600 dark:text-[#00ff00] hover:text-primary-500 dark:hover:text-[#00cc00] transition-colors duration-300"
              >
                <FiPhone className="w-5 h-5" />
                <span>+1 (571) 762-7008</span>
              </a>
              <a
                href="https://github.com/KarthikReddyPanyala"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-dark-600 dark:text-[#00ff00] hover:text-primary-500 dark:hover:text-[#00cc00] transition-colors duration-300"
              >
                <FiGithub className="w-5 h-5" />
                <span>github.com/KarthikReddyPanyala</span>
              </a>
              <a
                href="https://www.linkedin.com/in/panyala-karthik-5736661aa/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-dark-600 dark:text-[#00ff00] hover:text-primary-500 dark:hover:text-[#00cc00] transition-colors duration-300"
              >
                <FiLinkedin className="w-5 h-5" />
                <span>linkedin.com/in/panyala-karthik-5736661aa</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 