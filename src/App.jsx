import React from 'react'
import './App.css'
import Hero from './entriNews/Hero'
import Articles from './entriNews/Articles'
import { Navigate } from 'react-router-dom'

const App = () => {
  const token = localStorage.getItem('token');

  return (
    token ? (
      <div className='homepage'>
        <Hero />
        <Articles />
      </div>
    ) : (
      <Navigate to='/login' />
    )
  );
}

export default App;
