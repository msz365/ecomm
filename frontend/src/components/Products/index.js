import React from 'react'
import { ProductsContainer, ProductsH1, ProductsWrapper } from './ProductsElements'
import ProductItem from '../PorductItem'
import {Data} from './Data.js'

const Products = () => {
    return (
        <>
        <ProductsContainer id='products'>
            <ProductsH1>Our Products</ProductsH1>
            <ProductsWrapper>
                {Data.products.map((product) => (
                    <ProductItem product={product} />
                ))}
            </ProductsWrapper>
        </ProductsContainer>
        </>
    )
}

export default Products
