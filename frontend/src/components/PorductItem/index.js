import React from 'react'
import { MdStar, MdStarBorder } from 'react-icons/md'
import { ProductCardLink, ProductsCard, ProductsH2, ProductsIcon, ProductsP, ProductsPrice, RatingLink,ProductsReviews } from './ProductItemElements'

const ProductItem = (props) => {
    console.log(props);
    return (
        <ProductsCard id={props.product._id}>
        <ProductCardLink href={`/product/${props.product._id}`} target="_blank" aria-label={props.name}>
            <ProductsIcon src={props.product.img} alt={props.product.name} />
            <ProductsH2>{props.product.name}</ProductsH2>
            <ProductsPrice>${props.product.price}</ProductsPrice>
            <ProductsP>{props.product.description}</ProductsP>
            <RatingLink>
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStarBorder />
                <ProductsReviews>Number of Reviews: {props.product.numReviews}</ProductsReviews>
            </RatingLink>
            </ProductCardLink>
        </ProductsCard>
    )
}

export default ProductItem
