import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import blog2 from './images/blog2.jfif'
import eatsleep from './images/eatsleepcoderepeat.jfif'
import blog7 from './images/blog7.jfif'
import blog6 from './images/blog6.jfif'
import { Link } from "react-router-dom"


const Blog = () => {
  return (
    
    <div>
        <Navbar />
        <section id="about-home">
            <h2>Blog /</h2>
            
        </section>
        
        <section id="blog-container">
            <div class="blogs">
                <div class="post">
                    <img src={blog2} />
                    <h3>Learn Data Structures Algorithms in Easiest Ways</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis delectus qui impedit adipisci totam quasi in itaque earum deleniti atque.</p>
                    <a href="#"><Link to='/Post'></Link>Read More</a>
                </div>
                <div class="post">
                    <img src={eatsleep} />
                    <h3>Learn Data Structures Algorithms in Easiest Ways</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis delectus qui impedit adipisci totam quasi in itaque earum deleniti atque.</p>
                    <a href="#"><Link to='/Post'></Link>Read More</a>
                </div>
                <div class="post">
                    <img src={blog7}/>
                    <h3>Learn Data Structures Algorithms in Easiest Ways</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis delectus qui impedit adipisci totam quasi in itaque earum deleniti atque.</p>
                    <a href="#"><Link to='/Post'></Link>Read More</a>
                </div>
                <div class="post">
                    <img src={blog6}/>
                    <h3>Learn Data Structures Algorithms in Easiest Ways</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis delectus qui impedit adipisci totam quasi in itaque earum deleniti atque.</p>
                    <a href="#"><Link to='/Post'></Link>Read More</a>
                </div>
            </div>
            

            <div class="cate">
                <h2>Course Curriculum</h2>
                <h6>Problem Solving-Data Structures & Algorithms</h6>
                <hr />
                <a href="#">Module I</a>
                <ul>
                    <li>Basics of Programming</li>
                    <li>Data types & operators</li>
                    <li> Complexity Analysis</li>
                    <li> Bit-Manipulation & Applications</li>
                    <li> Recursion / Backtracking</li>
                </ul>
                <hr />
                <a href="#">Module II</a>
                <ul>
                    <li> Sorting / Searching Techniques & Applications</li>
                    <li> Hashing Implementation & Libraries</li>
                    <li> Subarrays & Subsequences</li>
                    <li> Strings & Rolling Hash</li>
                    <li> Mixed-bag Concepts</li>
                </ul>
                <hr />
                <a href="#">Module III</a>
                <ul>
                    <li> Stacks & Queues</li>
                    <li> Linked Lists</li>
                    <li> LRU Cache</li>
                    <li> Trees / Binary Trees / Binary Search Trees</li>
                    <li> Priority Queues</li>
                    <li> Trie DS & Applications</li>
                </ul>
                <hr />
                <a href="#">Module IV</a>
                <ul>
                    <li> Dynamic Programming</li>
                    <li> Graph Theory</li>
                    
                </ul>
                <hr/>

            </div>

        </section>
        <Footer/>
    </div>
  );
}

export default Blog;
