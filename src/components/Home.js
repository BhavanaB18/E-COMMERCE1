import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import ds from './images/ds.jfif';
import interview from './images/interview.png';
import oop3 from './images/oop3.jfif';
import e1 from './images/e1.jfif';
// import job1 from './images/job1.svg';
import job2 from './images/job2.avif';
import job3 from './images/job3.avif';
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
        <Navbar/>
        <section id="home">
        <h2>Powerful yet Humble</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate nselectusga vpore, illum atque nulla. Quisquam quos iste, sunt dolor eligendi illo minima. Accusantium eaque sunt saepe!
        </p>
        <div class="btn">
            <a class="blue" ><Link to='/register'/>Register</a>
            <a class='yellow' href="#"><Link to='/login'/>Login</a>
        </div>
    </section>

    <section id="features">
        <h1>Features</h1>
        <p>Leading your way towards a Smart Future </p>
        <div class="fea-base">
            <div class="fea-box">
                {/* <!-- <i class="fa-solid fa-graduation-cap"></i> --> */}
                <h3>Structured Curriculum</h3>
                <p>Learn new concepts every week. Solve real-world problems and assignments. Become a better coder with each day.</p>

            </div>
            <div class="fea-box">
                <i class="fa-regular fa-gear"></i>
                <h3>Industry Experts</h3>
                <p>Learn from instructors with prior experience in top companies. Stay on top with up-to-date coursework and industry-relevant knowledge.</p>

            </div>
            <div class="fea-box">
                <i class="fa-duotone fa-book-open-cover"></i>
                <h3>Highly Affordable</h3>
                <p>Competing programs are at least 2x the cost of what we offer.
                    Get an unmatched return on investment.</p>

            </div>
        </div>

    </section>

    <section id="course"> 
        <h1>Our Courses</h1>
        <p>Crack Your next Coding Interview</p>
        <div class="course-box">


            <div class="courses">
                <img src={ds} />
                <div class="details">
                    <span>Updated 02/02/2023</span>
                    <h6>Data Structures and Algorithms Courses</h6>
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
                <img src={interview} />
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
                <img src={oop3} />
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

    <section id="principle">
        <h1>Our Principles</h1>
        <p>We believe in and enforce a set of 5 principles which will gear you up for maximum learning.</p>
        <div class="principle-box">
            <div class="princ">
                <h3>Show Up</h3>
                <p>Show up for all your sessions, contests and labs. Half your learning lies there.</p>
            </div>
        
            <div class="princ">
                <h3>Ask Doubts</h3>
                <p>Show up for all your sessions, contests and labs. Half your learning lies there.</p>
            </div>
       
            <div class="princ">
                <h3>Make Notes</h3>
                <p>Show up for all your sessions, contests and labs. Half your learning lies there.</p>
            </div>
       
            <div class="princ">
                <h3>Practice</h3>
                <p>Show up for all your sessions, contests and labs. Half your learning lies there.</p>
            </div>
        
            <div class="princ">
                <h3>Assignments</h3>
                <p>Show up for all your sessions, contests and labs. Half your learning lies there.</p>
            </div>
        </div>
    </section>
    
    <section id="experts">
        <h1>Students landed on their dream job</h1>
        <p>Our learners share how our methodologies led them to thrive, progress and achieve their potential</p>
        <div class="expert-box">
            <div class="profile">

                <img src={e1} />
                <h6>Raju Rastogi</h6>
                <p>
                    I would definitely recommend this course to anyone who wants to learn Data Structures and Algorithms. The course is really well-planned and has an incredible starter code to work on.
                </p>
                <div class="pro-links">
                    <img class='job' src={job2} />
                </div>
                
            </div>
            <div class="profile">

                <img src={e1} />
                <h6>Raju Rastogi</h6>
                <p>
                    I would definitely recommend this course to anyone who wants to learn Data Structures and Algorithms. The course is really well-planned and has an incredible starter code to work on.
                </p>
                <div class="pro-links">
                    <img class='job' src={job2} />
                </div>
                
            </div>
            <div class="profile">

                <img src={e1} />
                <h6>Raju Rastogi</h6>
                <p>
                    I would definitely recommend this course to anyone who wants to learn Data Structures and Algorithms. The course is really well-planned and has an incredible starter code to work on.
                </p>
                <div class="pro-links">
                    <img class='job' src={job2}/>
                </div>
                
            </div>
        </div>
    </section>

        <Footer/>
      
    </div>
  )
}

export default Home
