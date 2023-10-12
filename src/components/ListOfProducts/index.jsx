import React, { useState } from 'react';
import styled from "styled-components";
import Category from "./Category";
import productData from '../Data/productData';
import { lightGrey } from '../UI/Variables';

const ProductsSection = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    padding: 4rem;
    background: ${lightGrey};
    @media (max-width: 767px) {
        gap: 2.5rem;
        padding: 2rem 1rem;
    };
    @media (min-width: 768px) and (max-width: 1023px) {
        padding: 2rem;
    };
`;

const ListOfProducts = () => {
    const [categories] = useState(productData);

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
