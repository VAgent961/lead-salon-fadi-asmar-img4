'use client'

import { useState } from 'react'
import Link from 'next/link'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Gallery from '@/components/Gallery'
import Location from '@/components/Location'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <div>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Location />
      </div>
    </>
  )
}
