import React from 'react'
import About from '../About'
import Footer from '../Footer'
import Header from '../Header'
import Main from '../Main'
import Projects from '../Projects'
import Timeline from '../Timeline'

function Home() {
    return (
        <div className="font-sans bg-white">
            <Header/>
            <Main/>
            <About/>
            <Timeline />
            <Projects/>
            <Footer/>
        </div>
    )
}

export default Home
