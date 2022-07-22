import React from 'react'
import { useState } from "react"
import styled from 'styled-components'
import { PromoSliderItems } from '../data'
import ArrowBackIosNewOutlined from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlined from '@mui/icons-material/ArrowForwardIosOutlined';

const Container = styled.div`
    width: 60vw;
    height: 60px;
    display: flex;
    flex: 1
    justify-content: center;
    align-items: center;
    position: relative
   
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    position: absolute;
    top:0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    z-index: 2;
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    overflow-x: hidden;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw)
`

const Slide = styled.div`
    width: 30vw;
    display: flex;
    align-items: center;
    justify-content: center;
    position : relative;
    top:0;
    bottom:0;

    @media (max-width: 700px) {
        display: none;
    }
`
const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    padding:  5px;
 
`
const PromoContent = styled.p`
    align-items: center;
    justify-content: center;
    margin: 5px;
    font-size: 14px;

    
`
const Button = styled.button`
    padding: 5px;
    margin: 0 10px;
    font-size: 12px;
    color: black;
    text-decoration: underlined;
    cursor: pointer;
`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowBackIosNewOutlined />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {PromoSliderItems.map((item, key) => (
                    <Slide key={key}>
                        <InfoContainer>
                            <PromoContent>{item.info}

                                <Button>
                                    Learn more
                                </Button>
                            </PromoContent>

                        </InfoContainer>
                    </Slide>
                ))}

            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowForwardIosOutlined />
            </Arrow>
        </Container>
    )
}

export default Slider