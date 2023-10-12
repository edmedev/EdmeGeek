import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import productData from '../components/Data/productData';
import Dashboard from "../components/ListOfProducts/Dashboard";
import { Section, Container } from "../components/Container";
import { CategoryHead } from "../components/Container/ProductContainers";
import { SecondaryTitle } from '../components/UI/Titles';
import { PrimaryButton } from '../components/UI/Buttons';

const DashboardPage = () => {
    const [categories] = useState(productData);

    return(
        <Section>
            <Container>
                <CategoryHead>
                    <SecondaryTitle>Todos los productos</SecondaryTitle>
                    <Link to="/agregar-producto">
                        <PrimaryButton>Agregar producto</PrimaryButton>
                    </Link>
                </CategoryHead>
                {categories.map((category, index) => (
                    <Dashboard
                        key={index}
                        products={category.products}
                    />
                ))}
            </Container>
        </Section>
    );
}

export default DashboardPage;
