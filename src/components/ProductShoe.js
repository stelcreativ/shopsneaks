import React from 'react'
import { useNavigate } from 'react-router-dom'
import ArrowForwardIosOutlined from '@mui/icons-material/ArrowForwardIosOutlined'
import styled from 'styled-components'

const Container = styled.div`
    flex: 1;
    height: 50vh;
    margin: 3px;    
    align-items: center;
    justify-content: center;

`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    hover: {transform: scale(1.1)}
`

const Description = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0px 50px;
    background-color: white;
    opacity: 0.7;
    border-radius: 20px;
 
`

const Info = styled.h1`
    font-weight: 400;
    font-size: 1.4rem;
`

const Price = styled.span`
`
const Arrow = styled.div`
    width: 30px;
    height: 30px;
    display: flex;
    cursor: pointer;
    `

const ProductShoe = ({ sneaker, number }) => {
    const navigate = useNavigate()

    const image_urls = [
        "https://images.pexels.com/photos/8559045/pexels-photo-8559045.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.unsplash.com/photo-1603787081207-362bcef7c144?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c25lYWtlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
        "https://images.pexels.com/photos/8559045/pexels-photo-8559045.jpeg?auto=compress&cs=tinysrgb&w=600",
    ]
    const image_url = image_urls[number]

    return (

        <Container >

            <Image src={image_url} />

            <Description>
                <Info>{sneaker.model_name}</Info>
                <Price>{sneaker.price}</Price>
                <Arrow onClick={() => navigate("/ProductPage ", { product: 'retailer' })}>
                    <ArrowForwardIosOutlined />
                </Arrow>
            </Description>

        </Container>
    )
}

export default ProductShoe