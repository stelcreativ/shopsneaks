import React from 'react'
import { Search, ShoppingBagOutlined } from '@mui/icons-material'
import MenuIcon from '@mui/icons-material/Menu';
import { Badge } from '@mui/material'
import logo from '../assets/logosports.jpeg'
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
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`
const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-item: center;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.div`
    border: none;
`
const Center = styled.div`
    flex: 2;
    display: flex;
    justify-content: space-between;
    text-align: center;
`
const Logo = styled.img`
    margin-left: 20px;
    max-width: 50px;
    Background: transparent;
    height: auto;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
     
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;

    @media (max-width: 700px) {
        display: none;
    }
`
const MenuHamb = styled.button`
    width: 70px;
    height: 50px;
    background: none;
    border: none;
    color: black;
    font-size: 45px;
    cursor: pointer;

    @media (min-width: 700px) {
    display: none;
}

`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo src={logo}></Logo>
                </Left>
                <Center>
                    <MenuHamb><MenuIcon /></MenuHamb>
                    <MenuItem>New Release</MenuItem>
                    <MenuItem>Men</MenuItem>
                    <MenuItem>Women</MenuItem>
                    <MenuItem>Kids</MenuItem>
                    <MenuItem>Sale</MenuItem>
                    <MenuItem>Collections</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={2} color="primary">
                            <ShoppingBagOutlined />
                        </Badge>
                    </MenuItem>
                </Center>


                <Right>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <Search style={{ color: "gray", fontSize: 16 }} />
                    </SearchContainer>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar


