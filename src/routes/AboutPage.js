import React from 'react'

import Navbar from '../components/navbar/Navbar'
import About from '../components/aboutus/About'
import Footer from '../components/footer/Footer'
import GoogleMap from '../components/googlemap'

const AboutPage = () => {
    return (
        <>
           <Navbar /> 
           <About />
           <GoogleMap />
           
           <Footer />
        </>
    )
}

export default AboutPage
