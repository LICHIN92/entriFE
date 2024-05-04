import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivteRoute = ({children}) => {
    const token=sessionStorage.getItem('token')
    let auth={}
    if(token){
        auth={'token':true}
    }else{
        auth={'token':false}

    }
  return (
    auth.token?children:<Navigate to='/login' />
  )
}

export default PrivteRoute