// import axios from 'axios';
// import React, { useEffect, useState } from 'react'

// const Blog = () => {
//   const [post, setPost] = useState([]);
//   useEffect(() => {
//     const fetchData = async (req, res) => {
//       try {
//         const posts = await axios.get('http://localhost:3000/post')
//         setPost(posts.data)
//         console.log(posts.data.length);
//         console.log(posts.data[0].image);
//       } catch (error) {
//          console.log(error);
//       }
//     };
//     fetchData()
//   }, [])
//   return (
//     // <div>

//     //   {post.map((post, index) => (

//     //     <div className=' d-grid m-4'>
//     //       <img key={index}
//     //         src={`http://localhost:3000/uploads/${post.data[0].image}`} alt="" />
//     //       <img className='blogImage'
//     //         key={index}
//     //         src={`http://localhost:3000/${post.image}`}
//     //       />
//     //       <p>{post.title}</p>
//     //       <p>{post.subtitle}</p>
//     //       <p>{post.desc}</p>
//     //     </div>
//     //   ))}
//     // </div>

//     <div className=' d-flex flex-column gap-5 w-100 h-100'>
//       {post.map((post, index) => (
//         <div key={index} className=' bg-body-tertiary'>
//           {post.data && post.data.length > 0 && post.data[0].image && (
//             <img src={`http://localhost:3000/${post.image}`} alt={post.data[0]} />
//           )}

//           <p>{post.title}</p>
//           <p>{post.subtitle}</p>
//           <p>{post.desc}</p>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default Blog

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Blog.css'
import { Navigate } from 'react-router-dom';

const Blog = () => {

    const [posts, setPosts] = useState([]);
   const token=localStorage.getItem("token")
    useEffect(() => {
        const fetchData = async (req, res) => {
            try {
                const posts = await axios.get('https://ee-dice.onrender.com/post')
                setPosts(posts.data)

            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])
    // const handlePostDetail=(postId)=>{
    //     console.log(postId);
    //     axios.get('https://ee-dice.onrender.com/post/getdetail/${postId}')
    //     .then(res=>{
    //         console.log(res);
    //     }).catch(err=>{
    //         console.log(err);
    //     })

    // }
     return (
        token?
        <div className='gridContainer'>
            {posts.map((post, index) => (
                <div className='card' key={index}
                //  onClick={()=>handlePostDetail(post._id)}
                >
                    <div className="card-image">
                        {console.log(post.image)}
                        {console.log(post)}
                        {console.log(post._id)}
                        <img className='blogImage'
                            key={index}
                            src={`https://ee-dice.onrender.com/${post.image}`}
                        />
                    </div>
                    <div className="card-content">
                        <h1>{post.title}</h1>
                        <p>{post.subtitle}</p>
                    </div>
                </div>
            ))}
        </div>
        :
        <Navigate to='/login'/>
    )
}
export default Blog