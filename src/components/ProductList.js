import React from 'react'
import styled from 'styled-components'
import ProductShoe from './ProductShoe'

const Container = styled.div`
    display: flex;    
    flex: 1;
    flex-wrap: wrap;
    margin-bottom: 60px;
    padding: 20px;
    justify-content: space-between;
`

const ProductList = ({ sneakers }) => {
    return (
        <Container>
            {sneakers.map((sneaker, index) => (
                <ProductShoe sneaker={sneaker} key={index} number={index} />
            ))}

        </Container>
    )
}

export default ProductList