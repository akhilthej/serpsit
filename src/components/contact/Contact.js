import React from 'react'
import './ContactStyles.css'

const Contact = () => {
    return (
        <div className='contact'>
            <div className="container">
                <div className="form-container">
                    <form>
                        <h1><span>Contact</span> Us</h1>
                        <div className='footeraddress'><p>Email : info@serpsit.com</p>
                         <p>Call : 7730084402</p>
                         <p>Open Timings : Monday –Friday (10am-6pm)</p>
                         <p>Location : Plot No.51, 8-2-584/1/B, Road No.9 Banjara Hills, Hyderabad,Telangana.</p></div>
                        <div>
                            <label>Name</label>
                            <input type="text" placeholder='Enter your name'/>
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="email" placeholder='Enter your email'/>
                        </div>
                        <div>
                            <label>Message</label>
                            <textarea rows='10' placeholder='Enter your name'/>
                        </div>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
