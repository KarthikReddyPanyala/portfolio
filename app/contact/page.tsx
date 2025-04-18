'use client'

import ContactInfo from '@/components/ContactInfo'

export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-black bg-[linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0.9)),repeating-linear-gradient(0deg,transparent,transparent_1px,rgba(0,255,0,0.1)_2px,transparent_3px)]">
      <ContactInfo />
    </div>
  )
} 