import React from 'react'
// import '../components/style.css'
import { Link } from "react-router-dom"
import logo from './images/logo.png';
import menu from './images/menu.png';

const Navbar = () => {
  return (
    <div>
        <nav>
        <img src={logo}/>
        <div class="navigation">
            <ul>
                <li><a href='#' ><Link to='/home'/>Home</a></li>
                <li><a href='#' ><Link to='/about'/>About</a></li>
                <li><a href='#' ><Link to='/blog'/>Blog</a></li>
                <li><a href='#' ><Link to='/courses'/>Courses</a></li>
                <li><a href='#' ><Link to='/contact'/>Contact</a></li>
                {/* <li><Link to='/inner_courses'/></li> */}
            </ul>
            <img id="menu-btn" src={menu}/>
        </div>
    </nav>
    </div>
  )
}

export default Navbar
