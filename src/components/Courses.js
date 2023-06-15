import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import ds from './images/ds.jfif'
import interview from './images/interview.png'
import oop3 from './images/oop3.jfif'
import princ1 from './images/princp1.jfif'
import princ2 from './images/princp2.png'
import princ3 from './images/princp3.jfif'
import { Link } from 'react-router-dom'

const Courses = () => {
  return (
    <div>
      <Navbar/>
      <section id="about-home">
        <h2>Courses /</h2>
        
        </section>
     
    <section id="course"> 
        <h1>Our Courses</h1>
        <p>Crack Your next Coding Interview</p>
        <div class="course-box">
        
        {/* window.location.href='inner_courses.html'; */}
        <div onclick="window.location.href='inner_courses.html';" class="courses">
        {/* <div onclick='<Link to=/inner_courses/>' class="courses">        */}
                <img src={ds} />
                <div class="details">
                    <span>Updated 02/02/2023</span>
                    <a><Link to='/inner_courses' /><h6>Data Structures and Algorithms Courses</h6></a>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                </div>
            </div>

            <div class="courses">
                <img src={interview}/>
                <div class="details">
                    <span>Updated 02/02/2023</span>
                    <h6>Top Interview Questions</h6>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                </div>
            </div>

            <div class="courses">
                <img src={oop3}/>
                <div class="details">
                    <span>Updated 02/02/2023</span>
                    <h6>Object Oriented Programming Courses</h6>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="principle-p">
        <h1>Who is this for?</h1>
        <div class="principle-box-p">
            <div class="princ-p">
                <img src={princ1}/>
                <h3>Beginners</h3>
                <h5>Graduated recently?</h5>
                <p>Develop industry-specific skills and launch your career in software development in just 14 weeks.</p>
            </div>
        
            <div class="princ-p">
                <img src={princ2}/>
                <h3>Working Professionals</h3>
                <h5>Aiming for high-growth and high-salary positions?</h5>
                <p>Upgrade your coding skills to get offers from top companies.</p>
            </div>
       
            <div class="princ-p">
                <img src={princ3}/>
                <h3>Career Changers</h3>
                <h5>Considering a career change into software development?</h5>
                <p>Combine your acquired skills with the fundamentals of coding and kickstart your tech career.</p>
            </div>
       

        </div>
    </section>
      <Footer/>
    </div>
  )
}

export default Courses
