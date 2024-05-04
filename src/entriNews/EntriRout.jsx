import React from 'react'
import Headers from './Headers'
import { Outlet } from 'react-router-dom'
import Hero from './Hero'
import Articles from './Articles'

const EntriRout = () => {
    return (
        <div>
            <Hero />
            <Articles />
        </div>
    )
}

export default EntriRout