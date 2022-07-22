import React from 'react'
import styled from 'styled-components'
import Slider from './Slider'

const Container = styled.div`
    height: 70px;
    background-color: #d7d4d4;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
`
const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: space-between;
`

const Promotions = () => {
    return (
        <Container>
            <Wrapper>
                <Slider />
            </Wrapper>
        </Container>
    )
}

export default Promotions