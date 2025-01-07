import React from 'react'
import Hero from '../components/Hero.jsx'
import Client from '../components/Client.jsx'
import About from '../components/About.jsx'
import Reviews from '../components/Reviews.jsx'
import Footer from '../components/Footer.jsx'
function Home() {
    return (
        <div>
            <Hero />
            <Client />
            <About />
            <Reviews />
            <Footer />
        </div>
    )
}

export default Home
