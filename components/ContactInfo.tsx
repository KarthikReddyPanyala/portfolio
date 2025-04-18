'use client'

import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

export default function ContactInfo() {
  return (
    <div className="flex flex-col space-y-6 text-lg bg-[#001a00] p-8 rounded-lg border border-[#00ff00] shadow-[0_0_10px_#00ff00]">
      <h1 className="text-5xl font-bold mb-4 text-[#00ff00]">
        Karthik Panyala
      </h1>
      
      <h2 className="text-2xl text-[#00ff00] mb-6">
        Software Developer
      </h2>

      <div className="flex items-center space-x-3 border border-[#00ff00] p-3 rounded hover:shadow-[0_0_15px_#00ff00] transition-all">
        <FaPhone className="text-[#00ff00] text-xl" />
        <a 
          href="tel:+15717627008"
          className="text-[#00ff00] hover:text-white transition-colors"
        >
          +1 (571) 762-7008
        </a>
      </div>

      <div className="flex items-center space-x-3 border border-[#00ff00] p-3 rounded hover:shadow-[0_0_15px_#00ff00] transition-all">
        <FaEnvelope className="text-[#00ff00] text-xl" />
        <a 
          href="mailto:karthikp3122001@gmail.com"
          className="text-[#00ff00] hover:text-white transition-colors"
        >
          karthikp3122001@gmail.com
        </a>
      </div>

      <div className="flex items-center space-x-3 border border-[#00ff00] p-3 rounded hover:shadow-[0_0_15px_#00ff00] transition-all">
        <FaGithub className="text-[#00ff00] text-xl" />
        <a 
          href="https://github.com/KarthikReddyPanyala"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00ff00] hover:text-white transition-colors"
        >
          github.com/KarthikReddyPanyala
        </a>
      </div>

      <div className="flex items-center space-x-3 border border-[#00ff00] p-3 rounded hover:shadow-[0_0_15px_#00ff00] transition-all">
        <FaLinkedin className="text-[#00ff00] text-xl" />
        <a 
          href="https://www.linkedin.com/in/panyala-karthik-5736661aa/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00ff00] hover:text-white transition-colors"
        >
          linkedin.com/in/panyala-karthik-5736661aa
        </a>
      </div>

      <div className="flex items-center space-x-3 border border-[#00ff00] p-3 rounded hover:shadow-[0_0_15px_#00ff00] transition-all">
        <FaMapMarkerAlt className="text-[#00ff00] text-xl" />
        <span className="text-[#00ff00]">St. Louis, MO</span>
      </div>
    </div>
  )
} 