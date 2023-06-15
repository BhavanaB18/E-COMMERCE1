import React from 'react'
import './style.css';
import Navbar from './Navbar'
import Footer from './Footer'

const Contact = () => {
  return (
    <div>
        <Navbar/>
        <section id="about-home">
        <h2>Contact Us /</h2>
        
    </section>
     
    <section id="contact">
        <div class="gettin">
            <h2>Help</h2>
            <p>Any Queries or any Help</p>
            <div class="gettin-details">
                <h3>Manager</h3>
                <div>
                    <i class="far fa-home get"></i>
                    <p>Gachibowli,Hyderabad</p>

                </div>
                <h3>Phone</h3>
                <div>
                    <i class="fas fa-phone-alt get"></i>
                    <p>9874563210<br/>8974563210</p>
                    
                </div>
                <h3>Support</h3>
                <div>
                    <i class="fal fa-envelope-open-text get"></i>
                    <p>rajurastogi@gmail.com<br/>info@gmail.com</p>
                    
                </div>
            </div>
        </div>
        <div class="form">
            <h4>Post your Queries</h4>
            <div class="form-row">
                <input type="text" placeholder="Your name"/>
                <input type="text" placeholder="Email"/>
            </div>
            <div class="form-col">
                <textarea name="" id="" cols="30" row="8" placeholder="Post Your Question?"></textarea>
            </div>
            <div class="form-col">
                <button class="form-button">Send Message</button>
            </div>
        </div>
    </section>

    <section id="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60901.259234738296!2d78.33977455!3d17.44397465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93a276decedf%3A0x2c12e79e6f9344e2!2sGachibowli%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1677526917142!5m2!1sen!2sin" 
          width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="myLocation"></iframe>

    </section>
    
        <Footer/>
      
    </div>
  )
}

export default Contact
