import React from 'react'
import styled from 'styled-components'

const OrderatItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
`
const OrderatTitle = styled.div`
    font-weight: 400;
    font-size: 1.6rem;
    align-items: center;
`

const OrderatContainer = styled.div`
     height: 100px;
     width: 50%;
     display: flex;
     flex-direction: column;
     margin-bottom: 10px;
     border: 1px solid grey;
     border-radius: 30px;
     align-items: center;
     justify-content: center;
     padding: 20 10px ;
     `
const CardInStock = styled.div`
     `

const CardSoldOut = styled.div`
     `
const CardSale = ({ sneaker }) => {
    if (sneaker.sale === true) {
        return (
            <CardInStock >
                {sneaker.price}
            </CardInStock>
        );
    }
    else {
        return (
            <CardSoldOut>
                OUT OF STOCK
            </CardSoldOut>
        )
    }
}


const CompareCart = ({ sneaker }) => {
    return (

        <OrderatContainer>
            <OrderatTitle>Order at</OrderatTitle>
            <OrderatItem>
                {sneaker.retailer}
            </OrderatItem>
            <CardSale sneaker={sneaker} />
        </OrderatContainer>
    )
}

export default CompareCart