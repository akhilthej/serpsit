import React from 'react'
import './ServicesStyles.css'
import service1 from '../../assets/service1.png';
import service2 from '../../assets/service2.png';
import service3 from '../../assets/service3.png';
import service4 from '../../assets/service4.png';
import service5 from '../../assets/service5.png';


const Services = () => {
    return (
       
        <div className="wrapper">
  <header>
    <div className='services-title'><h1>Our Services</h1> </div>
  </header>
  <section className="services-columns">
    <div className="services-column">
    <img src= { service1 } alt="service1" />
      <div className='services-subtitle'><h2>Expert Coder</h2></div>
      <p>
        Enterprise applications are the backbone of a productive workforce. Whether it is a calender application that manages your workforce tasks or an application.
      </p>
    </div>
    <div className="services-column">
    <img src= { service2 } alt="service2" />
    <div className='services-subtitle'><h2>Cloud Solutions</h2></div>
      <p>
        In the fascinating world of cloud, applications are accessed over the internet as utilities rather than chunks of software running over the desktop or server room.
      </p>
    </div>
    <div className="services-column">
    <img src= { service3 } alt="service3" />
    <div className='services-subtitle'><h2>Web Developer</h2></div>
      <p>
        Web development company we deliver best flash ecommerce php web development solutions for you. With us you get quality web service.
      </p>
    </div>
    <div className="services-column">
    <img src= { service4 } alt="service4" />
    <div className='services-subtitle'><h2>Staffing Services</h2></div>
      <p>
        Our staffing solutions allows employers to adjust staffing levels to meet ever-changing workloads.
      </p>
    </div>
    <div className="services-column">
    <img src= { service5 } alt="service5" />
    <div className='services-subtitle'><h2>Security</h2></div>
      <p>
        All our developers follow infoSec guidelines to deliver software with security as a key object. we have best-in-class taem who handles VAPT process.
      </p>
    </div>
    
  </section>
  
</div>






    )
}

export default Services
