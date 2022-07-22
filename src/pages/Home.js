import React from 'react'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Navlogin from '../components/Navlogin'
import Promotions from '../components/Promotions'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import ProductList from '../components/ProductList'
import ProductPage from './ProductPage'
import ProductShoe from '../components/ProductShoe'
import { getProducts } from '../data_model'


const SneakersContainer = styled.div`
    flex :1;
    `

const ListContainer = styled.div`
display: flex;
`

const Home = () => {

    const [sneakers, setSneakers] = useState([])

    useEffect(() => {
        fetch("https://0b69-45-132-108-35.eu.ngrok.io/footasylum")
            .then(res => {
                return res.json()
            })
            .then(data => {

                const products = getProducts(data)
                console.log("Home page products: ", products)
                setSneakers(products)
            })
    }, [])

    return (
        <div className="container">
            <Navlogin />
            <Navbar />
            <Promotions />
            <ProductList sneakers={sneakers} />
            <Categories />
            <Footer />
        </div>
    )
}

export default Home