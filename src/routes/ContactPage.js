import React from 'react'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import Googlemap from '../components/googlemap'

const ContactPage = () => {
    return (
        <>
            <Navbar/>
            <Contact />
            <Googlemap />
            <Footer />   
        </>
    )
}

export default ContactPage
