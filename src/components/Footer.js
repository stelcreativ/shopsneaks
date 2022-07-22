import React from 'react'
import { FacebookOutlined } from '@mui/icons-material'
import InstagramIcon from '@mui/icons-material/Instagram';
import styled from 'styled-components'

const Container = styled.div`
    padding: 10px;
    display: flex;
    color: #ffffff;
    background-color: #030303;
`
const Left = styled.div`
    flex: 1;
`
const Info = styled.p`
    margin: 20px 0px;
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
`
const Right = styled.div`
    flex: 1;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color}
    display: flex;
    align-items: center;
    justify-content: center; 
    margin-right: 20px;
`
const Facebook = styled.div`

`
const Instagram = styled.div`

`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const ContactItem = styled.div``

const Footer = () => {
    return (
        <Container>
            <Left>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <FacebookOutlined />
                    </SocialIcon>
                    <SocialIcon>
                        <InstagramIcon color="E4405F" />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Brands</Title>
                <List>
                    <ListItem>Air Jordan</ListItem>
                    <ListItem>Adidas</ListItem>
                    <ListItem>Nike</ListItem>
                    <ListItem>Yeezy</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    contact@bsport.com
                </ContactItem>
            </Right>
        </Container>
    )
}

export default Footer