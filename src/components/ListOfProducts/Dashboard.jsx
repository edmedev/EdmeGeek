import React from "react";
import { GroupedProducts } from "../Container/ProductContainers";
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
                    id={product.id}
                />
            ))}
        </GroupedProducts>
    );
}

export default Dashboard;
