import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
const Header = () => {
    const tokenRelease=()=>{
        sessionStorage.removeItem('token')
        localStorage.clear('token')
    }
    const token=localStorage.getItem("token")
  return (
    <div>
        <header className='navbar'>
            <h2>fx4</h2>
            <nav className='links'>
                <ul>
                    <li className='link'>
                        <Link to="/">home</Link>
                    </li>
                    <li className='link'>
                        <Link to="/new">new</Link>
                    </li>
                 
                    <li className='link'>
                        <Link to="/treanding">treanding</Link>
                    </li>
                    <li className='link'>
                        <Link to="/blog">blog</Link>
                    </li>
                    <li className='link'>
                        <Link to="/signup">Signup</Link>
                    </li>
                    <li className='link'>
                        <Link to="/login">Login</Link>
                    </li>
                    {token?
                      <li className='link'>
                        
                      <Link to="/" onClick={tokenRelease}>LogOut</Link>
                  </li>
                  :null
                    }
                  
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Header