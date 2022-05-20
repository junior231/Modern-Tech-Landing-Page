import React from 'react'
import Hero from '../components/home/Hero'
import About from '../components/home/About'
import Features from '../components/home/Features'
import Works from '../components/home/Works'
import Faq from '../components/home/Faq'
import Pricing from '../components/home/Pricing'
import Contact from '../components/home/Contact'

const AppHome = () => {
  return (
    <div className='main'>
        <Hero />
        <About />
        <Features />
        <Works />
        <Faq />
        <Pricing />
        <Contact />
    </div>
  )
}

export default AppHome