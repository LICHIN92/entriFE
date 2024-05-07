import React from 'react'
import { useState } from 'react'
import './Signup.css'
import axios from 'axios'
// import axios from 'ax'
const Signup = () => {
  const [formdata, SetFormData] = useState({
    name: '',
    username: '',
    password: '',
    confirmPassword: "",
    email: ''
  })

  const handlechange = (e) => {
    const { name, value } = e.target
    SetFormData({ ...formdata, [name]: value })
  }
  const handlesubmit =async (e) => {
    e.preventDefault()
    try {
    const respo=await axios.post('https://ee-dice.onrender.com',formdata)
   

      console.log(respo.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='container'>
      <h2 className='title'>signup</h2>
      <form action="" onSubmit={handlesubmit} className='form'>

        <div className="title">welcome</div>
        <div className="subtitle">let's create your account</div>

        <div className='box'>
          <label htmlFor="">Name</label>
          <input type="text" name="name" id="name" value={formdata.name} onChange={handlechange} />
        </div>
        <div className='box'>
          <label htmlFor="">user Name</label>
          <input type="text" name="username" id="name" value={formdata.username} onChange={handlechange} />
        </div>

        <div className='box'>
          <label htmlFor="">Email</label>
          <input type="email" name="email" id="name" value={formdata.email} onChange={handlechange} />
        </div>
        <div className='box'>
          <label htmlFor="">Password</label>
          <input type="password" name="password" id="name" value={formdata.password} onChange={handlechange} />
        </div>
        <div className='box'>
          <label htmlFor="">confirm Password</label>
          <input type="password" name="confirmPassword" id="name" value={formdata.confirmPassword} onChange={handlechange} />
        </div>

        <button type='submit' >Sign up</button>
      </form>
    </div>
  )
}

export default Signup