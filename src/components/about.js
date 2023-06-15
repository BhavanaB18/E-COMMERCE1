import React from 'react'
import './style.css'
import Navbar from './Navbar';
import Footer from './Footer';
import aaa from './images/aaa.png';
import aa from './images/aa.png';
import schedule from './images/schedule1.png';
import aboutcurriculum from './images/aboutcurriculum.png';
import aboutexperts from './images/aboutexperts.jfif';
import about from './images/abouthighlyaffordable.jfif';
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <Navbar/>
        <section id="about-home">
        <h2>Powerful yet Humble</h2>
        
    </section>
     
    <section id="about-container">
        <div class="about-img">
            <img src={aaa}/>
        </div>

        <div class="about-text">
            <h2>Welcome to abcdefg,Enhance your skills with best Courses</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quo autem qui aperiam illum recusandae ex accusamus eveniet et repudiandae.</p>
            <div class="about-fe">
                <img src={aa}/>
                <div class="fe-text">
                    <h5>100+ Courses</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, in!</p>

                </div>
            </div>
            <div class="about-fe">
                <img src={schedule}/>
                <div class="fe-text">
                    <h5>Practice And Ask Doubts</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, in!</p>
                    
                </div>
            </div>
        </div>
    </section>

    <section id="features1">
        <h1>Features</h1>
        <p>Leading your way towards a Smart Future </p>
        <div class="fea-base1">
            <div class="fea-box1">
                {/* <!-- <i class="fa-solid fa-graduation-cap"></i> --> */}
                <img src={aboutcurriculum}/>
                
                <h3>Structured Curriculum</h3>
                <p>Learn new concepts every week. Solve real-world problems and assignments. Become a better coder with each day.</p>
               
            </div>
            <div class="fea-box1">
                <i class="fa-regular fa-gear"></i>
                <img src={aboutexperts}/>
                
                <h3>Industry Experts</h3>
                <p>Learn from instructors with prior experience in top companies. Stay on top with up-to-date coursework and industry-relevant knowledge.</p>
            
            </div>
            <div class="fea-box1">
                <i class="fa-duotone fa-book-open-cover"></i>
                <img src={about}/>
                
                <h3>Highly Affordable</h3>
                <p>Competing programs are at least 2x the cost of what we offer.
                    Get an unmatched return on investment.</p>
                
            </div>
        </div>

    </section>
        <Footer/>
      
    </div>
  )
}

export default About
