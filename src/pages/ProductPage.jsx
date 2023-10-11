import React from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import arrangement from '../components/ListOfProducts/arrangement';
import Page404 from './Page404';
import { Section, ImgProduct } from '../components/Container';
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
    gap: 7rem;
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
    arrangement.forEach((category) => {
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
                    <MainParagraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit debitis ab animi, dolores aspernatur deserunt sint quibusdam quasi, perferendis dolor expedita perspiciatis a, pariatur repudiandae consequuntur natus similique consequatur recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit debitis ab animi, dolores aspernatur deserunt sint quibusdam quasi, perferendis dolor expedita perspiciatis a, pariatur repudiandae consequuntur natus similique consequatur recusandae.</MainParagraph>
                    <QuartetTitle>{productDetails.price}</QuartetTitle>
                    <Link to={`/comprar?id=${id}`}>
                        <PrimaryButton>Comprar</PrimaryButton>
                    </Link>
                </Item>
            </ProductContainer>
        </Section>
    );
}

export default ProductPage;