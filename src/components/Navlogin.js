import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 60px;

`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Left = styled.div`
    flex: 1;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    padding: 10px;
    align-items: center;
    justify-content: flex-end;
     
`
const MenuItem = styled.div`
    font-size: 14px;
    padding: 10px;
    cursor: pointer;
`

const Navlogin = () => {
    return (
        <Container>
            <Wrapper>
                <Left></Left>

                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navlogin