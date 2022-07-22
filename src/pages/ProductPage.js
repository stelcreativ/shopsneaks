import React from 'react'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import CompareCart from '../components/CompareCart'
import { getProducts } from '../data_model'

const Container = styled.div`
    flex: 1;
    ImageSlidermargin: 5px;
    min-width: 280px;

`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;

`
const ImageContainer = styled.div`
    flex :1;
    `
const Image = styled.img`
    width: 100%;
    height: 80vh;
    object-fit: cover;
`


const Description = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 10px;
`

const Title = styled.h2`
    font-weight: 400;
    font-size: 1.5rem;
`

const Info = styled.p`
    margin: 2rem;

`

const Price = styled.span`
    font-weight: 400;
    font-size: 15px;
    margin: 15px 0;
`

const Button = styled.button`
    height: 50px;
    width: 120px;
    margin: 20px;
    background-color: #555555;
    color: white;
    font-weight: 400;
    border-radius: 35px;
`
const SelectSizeContainer = styled.div`
    display: flex;
`
const SelectSizeTitle = styled.h2`
    font-weight: 200;
    font-size: 1.4rem;
`



const SelectSize = styled.select`
    width: 100%;
    margin-left: 10px;
    border-radius: 15px;
    justify-content: center;
    text-align: center;
    padding: 10px;
`
const Option = styled.option`

`


const ProductPage = () => {
    const [listSneakers, setListSneakers] = useState([])

    useEffect(() => {
        const urls = [
            "https://0b69-45-132-108-35.eu.ngrok.io/Nike",
            "https://0b69-45-132-108-35.eu.ngrok.io/footasylum",
            "https://0b69-45-132-108-35.eu.ngrok.io/Lifestyle",
        ]

        const chosen_codes = new Set(["21644010", "4066328", "DV3453-100"])
        Promise.all(urls.map(url =>
            fetch(url).then(resp => resp.json())
        ))
            .then(all_data => {
                const products_per_api = all_data.map(getProducts)
                const products = products_per_api.flat()
                console.log("All products from all APIs:", products)
                // simplifing assumption: codes are unique across retailers
                // in reality we would have to track retailer-code pairs
                const chosen_products = products.filter(p => chosen_codes.has(p.code))
                console.log("Chosen products:", chosen_products)
                setListSneakers(chosen_products)
            })
    }, [])

    return (
        <Container >
            <Wrapper>
                <ImageContainer>
                    <Image src="https://images.pexels.com/photos/8559045/pexels-photo-8559045.jpeg?auto=compress&cs=tinysrgb&w=600" />

                </ImageContainer>
                <Description>

                    <Title>DUMMY NAME</Title>
                    <Info> text
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Ullam saepe cum fugiat officia nulla corrupti eaque aperiam
                        laboriosam officiis blanditiis dolorem magnam, distinctio
                        necessitatibus molestiae recusandae consequuntur id voluptatibus quaerat.
                    </Info>
                    <SelectSizeContainer>
                        <SelectSizeTitle>SELECT A SIZE</SelectSizeTitle>
                        <SelectSize>

                            <Option>UK 5.5</Option>
                            <Option>UK 6</Option>
                            <Option>UK 6.5</Option>
                            <Option>UK 7</Option>
                            <Option>UK 7.5</Option>
                            <Option>UK 8</Option>
                            <Option>UK 8.5</Option>
                            <Option>UK 9</Option>
                        </SelectSize>
                    </SelectSizeContainer>

                    <Button >
                        ADD TO CART</Button>


                    {listSneakers.map((sneaker, index) => (
                        <CompareCart key={index} sneaker={sneaker} />
                    ))}

                </Description>
            </Wrapper>
        </Container>
    )
}

<Footer />

export default ProductPage