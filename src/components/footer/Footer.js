import React from 'react'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import { FiMail, FiFacebook, FiGithub, FiInstagram, FiLinkedin, FiDribbble } from 'react-icons/fi'
import './FooterStyles.css'
import SiteLogo  from '../../assets/SiteLogo.png';

import { Link } from 'react-scroll'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="top">
                    <div className="logo-footer">
                    <div className='icon'>
                    <img src= { SiteLogo } alt="sitelogo" /> </div>
                        <h2>Secured.</h2>
                    </div>
                    <Link activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <BsFillArrowUpCircleFill className='icon' />
                    </Link>

                </div>
                <div className="col-container">
                    <div className="col">
                        <h3>Navigation</h3>
                        <p>Home</p>
                        <p>Data</p>
                        <p>Cloud</p>
                        <p>Contact</p>
                    </div>
                    <div className="col">
                        <h3>Get in touch</h3>
                        <div className='footeraddress'><p>Email : info@serpsit.com</p>
                         <p>Call : 7730084402</p></div>
                    </div>
                    <div className="col">
                        <h3>Information</h3>
                        <div className='footeraddress'><p>Open Timings : Monday –Friday (10am-6pm)</p>
                        <p>Location : Plot No.51, 8-2-584/1/B, Road No.9 Banjara Hills, Hyderabad,Telangana.</p></div>
                        
                    </div>
                    <div className="col">
                        <h3>      </h3>
                        
                        
                    </div>
                    <form>
                        <h3>Join Our Team</h3>
                        <input type="email" placeholder='Enter your email' />
                        <FiMail className='mail-icon' />
                        <div className="social-group">
                            <FiInstagram className='social-icon' />
                            <FiFacebook className='social-icon' />
                            <FiLinkedin className='social-icon' />
                        
                            <FiGithub className='social-icon' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Footer
