import styled from 'styled-components'

export const ProductsContainer = styled.div`
    height: 1600px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    background: #560004;


    @media screen and (max-width:1000px){
        height:1800px;

    }

    @media screen and (max-width:768px){
        height:2800px;

    }


    @media screen and (max-width:480px){
        height:3000px;

    }
`

export const ProductsWrapper = styled.div`
    max-width:1000px;
    margin: 0 auto;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width:1000px){
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width:768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const ProductsCard = styled.div`
    background:#fff;
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items:center;
    max-height: 400px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;


    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor:pointer;

    }
`

export const ProductCardLink = styled.a`
    text-decoration: none;
`

export const ProductsIcon = styled.img`
    height: 160px;
    width:160px;
    margin-bottom:10px;
`

export const ProductsH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width:480px){
        font-size: 2rem;
    }
`

export const ProductsH2 = styled.h2`
    font-size: 1rem;
    margin-bottom:10px;
    color:#560004;

`

export const ProductsP = styled.p`
    font-size: 1rem;
    color:#560004;
    margin-bottom:10px;
`


export const RatingLink = styled.div`
    
color: #560004;
    font-size:25px;
    margin-bottom:10px;
    


    &:hover{
        font-size:28px;
        transition: 0.3s ease-out;
    }
`

export const ProductsPrice = styled.p`
    font-size: 1rem;
    font-weight: bold;
    color:#560004;
    margin-bottom:10px;
`