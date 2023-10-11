import React from "react";
import { Link } from "react-router-dom";
import { ProductCategory, CategoryHead, GroupedProducts } from "../Container";
import Product from "./Product";
import { SecondaryTitle } from "../UI/Titles";
import { FifthTitle } from "../UI/Titles";

const Category = ({ name, id, products }) => {
    return (
        <ProductCategory>
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
        </ProductCategory>
    );
}

export default Category;
