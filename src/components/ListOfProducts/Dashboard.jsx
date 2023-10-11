import React from "react";
import { GroupedProducts } from "../Container";
import Product from "./Product";

const Dashboard = ({ products }) => {
    return (
        <GroupedProducts>
            {products && products.map((product, idx) => (
                <Product
                    key={idx}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                    id={product.name}
                />
            ))}
        </GroupedProducts>
    );
}

export default Dashboard;
