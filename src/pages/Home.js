import React from 'react'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Navlogin from '../components/Navlogin'
import Promotions from '../components/Promotions'
import Categories from '../components/Categories'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div className="container">
            <Navlogin />
            <Navbar />
            <Promotions />
            <Categories />

            <Footer />
        </div>
    )
}

export default Home