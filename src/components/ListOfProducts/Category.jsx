import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SecondaryTitle } from "../UI/Titles";
import { FifthTitle } from "../UI/Titles";
import Product from "./Product";

const ProductCategory = styled.div`
    width: 100%;
    max-width: 71rem;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
`;

const CategoryHead = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;

const GroupedProducts = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 1rem;
    @media (max-width: 767px) {
        flex-wrap: wrap;
    }
`;

const Category = ({ name, id, products }) => {
    return (
        <ProductCategory>
            <CategoryHead>
                <SecondaryTitle>{name}</SecondaryTitle>
                <Link to={`categoria/${id}`}>
                    <FifthTitle>Ver todo ➔</FifthTitle>
                </Link>
            </CategoryHead>
            <GroupedProducts>
                {products.map((product, idx) => (
                    <Product
                        key={idx}
                        image={product.image}
                        name={product.name}
                        price={product.price}
                        id={product.name}
                    />
                ))}
            </GroupedProducts>
        </ProductCategory>
    );
}

export default Category;
