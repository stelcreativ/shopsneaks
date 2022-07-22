import React from 'react'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Navlogin from '../components/Navlogin'
import Promotions from '../components/Promotions'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div className="container">
            <Navlogin />
            <Navbar />
        </div>
    )
}

export default Home