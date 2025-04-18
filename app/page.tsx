'use client'

import Background from '@/components/Background'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import ProjectsSection from '@/components/ProjectsSection'
import Contact from '@/components/Contact'
import ThemeToggle from '@/components/ThemeToggle'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Background />
      <div className="container relative z-10 mx-auto px-4">
        <nav className="flex justify-end py-2">
          <ThemeToggle />
        </nav>
        <div className="space-y-12 pb-8 md:space-y-16">
          <Hero />
          <About />
          <Skills />
          <ProjectsSection />
          <Experience />
          <Education />
          <Contact />
        </div>
      </div>
    </main>
  )
} 