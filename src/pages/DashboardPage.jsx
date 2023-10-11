import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import arrangement from '../components/ListOfProducts/arrangement';
import Dashboard from "../components/ListOfProducts/Dashboard";
import { Section, ProductCategory, CategoryHead } from "../components/Container";
import { SecondaryTitle } from '../components/UI/Titles';
import { PrimaryButton } from '../components/UI/Buttons';

const DashboardPage = () => {
    const [categories] = useState(arrangement);

    return(
        <Section>
            <ProductCategory>
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
            </ProductCategory>
        </Section>
    );
}

export default DashboardPage;
