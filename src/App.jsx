import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './layout/Home/Index'
import About from './layout/About/Index'
import Login from './layout/Login/Index'

const App = () => {
  return (
    <div className='container'>
      <nav className='nav'>
      <Link to='/login' className='nav-link'>Login</Link>
        <Link to='/' className='nav-link'>Home</Link>
        <Link to='/about' className='nav-link'>About</Link>
       
      </nav>

      <Routes>
      <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={
          <div className='page'>
            <h1>🚫404-Page Not Found</h1>
            <p>
              Oops! The page you are looking for does not exist or has been moved.
            </p>
           <p> Please check the URL or return to the homepage</p>
          </div>
        
        } />
        </Routes>
    </div>
  )
}
export default App