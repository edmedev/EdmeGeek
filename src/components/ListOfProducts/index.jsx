import React, { useState } from 'react';
import styled from "styled-components";
import Category from "./Category";
import arrangement from './arrangement';
import { lightGrey } from '../UI/Variables';

export const ProductsSection = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    padding: 4rem;
    background: ${lightGrey};
    @media (max-width: 767px) {
        padding: 1rem;
    }
    @media (min-width: 768px) and (max-width: 1023px) {
        padding: 2rem;
    }
`;

const ListOfProducts = () => {
    const [categories] = useState(arrangement);

    return (
        <ProductsSection>
            {categories.map((category, index) => (
                <Category
                    key={index}
                    name={category.name}
                    products={category.products}
                    id={category.id}
                />
            ))}
        </ProductsSection>
    );
};

export default ListOfProducts;
