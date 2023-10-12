import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../Container";
import { CategoryHead, GroupedProducts } from "../Container/ProductContainers";
import Product from "./Product";
import { SecondaryTitle } from "../UI/Titles";
import { FifthTitle } from "../UI/Titles";

const Category = ({ name, id, products }) => {
    return (
        <Container>
            <CategoryHead>
                <SecondaryTitle>{name}</SecondaryTitle>
                <Link to={`/categoria/${id}`}>
                    <FifthTitle>Ver todo ➔</FifthTitle>
                </Link>
            </CategoryHead>
            <GroupedProducts>
                {products && products.map((product, idx) => (
                    <Product
                        key={idx}
                        image={product.image}
                        name={product.name}
                        price={product.price}
                        id={product.id}
                    />
                ))}
            </GroupedProducts>
        </Container>
    );
}

export default Category;
