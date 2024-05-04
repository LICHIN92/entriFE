import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Signup.css'

const Login = () => {
    const [formdata, SetFormData] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate()
    const handlechange = (e) => {
        const { name, value } = e.target
        SetFormData({ ...formdata, [name]: value })
    }
    const handlesubmit = async (e) => {
        e.preventDefault()
        try {
            const respo = await axios.post('https://serverdeploy-2nxa.onrender.com/login', formdata)
            console.log(respo);
            alert(respo.data.message)
            sessionStorage.setItem('token', respo.data.token)
            localStorage.setItem('token',respo.data.token)
            console.log(respo.token);
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='container'>
            <h2 className='title'>Log in</h2>

            <form action="" onSubmit={handlesubmit} className='form'>

                <div className='box'>
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" id="name" value={formdata.email} onChange={handlechange} />
                </div>

                <div className='box'>
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" id="name" value={formdata.password} onChange={handlechange} />
                </div>
                <button type='submit' >Sign up</button>

            </form>

        </div>
    )
}

export default Login