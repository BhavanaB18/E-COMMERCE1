import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Blog from './components/Blog';
import Courses from './components/Courses'
import Home from './components/Home';
import About from './components/about';
import Contact from './components/Contact';
import Inner_courses from './components/inner_courses';
import Post from './components/Post';
import Login from './components/login';
import Register from './components/register';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/inner_courses' element={<Inner_courses/>}/>
        <Route path='/Post' element={<Post/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
