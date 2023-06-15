import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import './style.css';
import c4 from './images/innercourse4.jfif'
import blog1 from './images/blog1.jfif'

const inner_courses = () => {
  return (
    <div>
    <Navbar/>
    <section id="about-home">
        <h2>Skill Up</h2>
        
    </section>
     
    <section id="course-inner">
        <div class="overview">
            <img class="course-img" src={c4}/>
            <div class="course-head">
                <div class="c-name">
                <h2>Data Structures and Algorithms Courses</h2>
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>

            </div>
            </div>
            <h3>Mentor</h3>
            <div class="tutor">
                <img src={blog1}/>
                <div class="tutor-det">
                    <h5>Raju Rastogi</h5>
                    <p>Software Engineer At Google</p>
                </div>
            </div>
            <hr/>
            <h3>Course Overview</h3>
            <p>A data structure is a named location that can be used to store and organize data. And, an algorithm is a collection of steps to solve a particular problem. Learning data structures and algorithms allow us to write efficient and optimized computer programs.
                Our DSA tutorial will guide you to learn different types of data structures and algorithms and their implementations in Python, C, C++, and Java.</p>
            <hr/>
            <h3>What you'll learn</h3>
            <div class="learn">
                <p><i class="far fa-check-circle"></i> i) Stack,Queue,Types of Queues, Circular Queue,Priority Queue,Deque</p>
                <p><i class="far fa-check-circle"></i> ii)Linked List, Linked List Operations,Types of linked list,Hash Table,Heap data structure,Fibonacci Heap</p>
                <p><i class="far fa-check-circle"></i> iii) Tree Data Structure, Tree traversal,Binary tree,full binary tree,complete binary tree</p>
                <p><i class="far fa-check-circle"></i> iv)Graph Data Structure,Spanning tree,Depth first search,Breadth First Search</p>
                <p><i class="far fa-check-circle"></i> v) Sorting and searching</p>
                <p><i class="far fa-check-circle"></i> vi)Greedy algorithm,Dijkstra Algorithms,Kruskals Algorithm,Prims Algorithm</p>
                <p><i class="far fa-check-circle"></i> vii) Dy6namic Programming </p>
                <p><i class="far fa-check-circle"></i> viii)Backtracking</p>

            </div>
        </div>
            <div class="enroll">
                <h3> Course details</h3>
                <p> <i class="far fa-check-circle"></i>Hours of teaching</p>
                <p><i class="far fa-check-circle"></i>Free resources</p>
                <p><i class="far fa-check-circle"></i> Download and access resources</p>
                <p><i class="far fa-check-circle"></i>Online Tests </p>
                <p><i class="far fa-check-circle"></i>Assignments and Practice</p>
                <p><i class="far fa-check-circle"></i>Certificate Of Completion</p>
                <div class="enroll-btn">
                    <a class="blue" href="#">Enroll Course</a>
                </div>
            </div>
    </section>

    <Footer/>
    </div>
  )
}

export default inner_courses
