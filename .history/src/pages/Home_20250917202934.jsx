import React from 'react'
import Hero from '../components/Hero.jsx'
import Client from '../components/Client.jsx'
import About from '../components/About.jsx'
import Reviews from '../components/Reviews.jsx'
import Navbar from '../components/Navbar.jsx'
function Home() {
    return (
        <div className='hidden'>
            <Navbar />
            <Hero />
            <About />
        </div>
    )
}

export default Home
  