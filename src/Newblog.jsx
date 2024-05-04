import React, { useState } from 'react'
import './Newblog.css'
import axios from 'axios';
import {useNavigate } from 'react-router-dom';


const Newblog = () => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("")
  const [image, setImage] = useState(null)
  const [desc, setDesc] = useState("")

  const navigate=useNavigate()
  
  const handleImagechange = (e) => {
    console.log(e);
    // const Imgg = (e.target.files);
    setImage(e.target.files[0])
    // setImage((prevState) => [...prevState, ...Imgg])
    // console.log(image);
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('image', image);
    formData.append('title', title);
    formData.append('subtitle', subtitle);
    formData.append('desc', desc);
    try {
      const token=sessionStorage.getItem('token')
      console.log(token);
      if(token){
        const response = await axios.post('https://serverdeploy-2nxa.onrender.com/post', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization':`Bearer ${token}`
          }
        });
        console.log(response.data);
        navigate('/blog')
        console.log(formData);
      }else{
        alert('please login first')
        navigate('/login')

      }
     
    } catch (error) {
   console.log(error);
    }
  }
  return (
    <div className='blogcontainer'>
      <div className='blogBox'>
        <form action="" onSubmit={handleSubmit} >
          <div className="subtitle">Create a New Post</div>


          <div className='blogItems'>
            <label htmlFor="">Blog title</label>
            <input type="text" id='title' name='title'
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              required />
          </div>

          <div className='blogItems'>
            <label htmlFor="">Blog subtitle</label>
            <input type="text" id='subtitle' name='subtitle'
              onChange={(e) => setSubtitle(e.target.value)}
              value={subtitle}
              required />
          </div>

          <div className='blogItems'>
            <label htmlFor="">Blog description</label>
            {/* <input type="text" id='desc' name='desc'
          onChange={(e)=>setDesc(e.target.value)} 
          value={desc}
          required/> */}
            <textarea id='desc' name='desc'
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
              required cols="34" rows="10"></textarea>
          </div>
          <div className='blogItems'>
            <label htmlFor="">Blog image</label>
            <input type="file" id='image' name='image'
              accept='image/*'
              // multiple
              onChange={handleImagechange}
              required />

            {/* <div className='slectedimge'>
              {Array.isArray(image) && image.map((file, index) => (
                <img src={URL.createObjectURL(file)} alt="" />
              ))}
            </div> */}

          </div>


          <button type='submit'> create anew Post </button>

        </form>
      </div >

    </div >
  )
}

export default Newblog

