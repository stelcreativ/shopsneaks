import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    flex: 1;
    height: 40vh;
    margin: 3px;
    position: relative
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`
    padding: 5px;
    background-color: white;
    border-radius: 10px;
    opacity: 0.7;
    color: black;
    margin-bottom: 20px
`
const Button = styled.button`
    padding: 10px;
    background-color: white;
    color: black;
    cursor: pointer;
    border: none;
    border-radius: 5px;
`

const CategoryItem = ({ item }) => {
    return (
        <Container>
            <Image src={item.img} />
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>

        </Container>
    )
}

export default CategoryItem