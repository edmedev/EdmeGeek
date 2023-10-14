import React from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import productData from '../components/Data/productData';
import Page404 from './Page404';
import { Section } from '../components/Container';
import { ImgProduct } from '../components/Container/ProductContainers';
import { MainParagraph } from "../components/UI/Paragraphs";
import { SecondaryTitle, QuartetTitle } from "../components/UI/Titles";
import { PrimaryButton } from '../components/UI/Buttons';

const ProductContainer = styled.div`
    width: 100%;
    max-width: 71rem;
    margin: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5rem;
    @media (max-width: 767px) {
        flex-direction: column;
        gap: 2rem;
    };
    @media (min-width: 768px) and (max-width: 1023px) {
        gap: 4rem;
    };
`
const Item = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const ProductPage = () => {
    const { id } = useParams();

    // Busca el producto específico en el arreglo arrangement
    let productDetails = null;
    productData.forEach((category) => {
        const product = category.products.find((p) => p.id === id);
        if (product) {
        productDetails = product;
        }
    });

    if (!productDetails) {
        return <Page404 />;
    }

    // Renderiza los detalles del producto aquí
    return (
        <Section>
            <ProductContainer>
                <Item>
                    <ImgProduct src={productDetails.image} alt={productDetails.name} />
                    {/* Otros detalles del producto */}
                </Item>
                <Item>
                    <SecondaryTitle>{productDetails.name}</SecondaryTitle>
                    <QuartetTitle>{productDetails.price}</QuartetTitle>
                    <MainParagraph>{productDetails.description}</MainParagraph>
                    <Link to={`/checkout/${id}`}>
                        <PrimaryButton>Comprar</PrimaryButton>
                    </Link>
                </Item>
            </ProductContainer>
        </Section>
    );
}

export default ProductPage;
