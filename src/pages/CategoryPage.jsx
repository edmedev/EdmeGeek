import React from 'react';
import { useParams } from 'react-router-dom';
import Page404 from './Page404';
import Product from '../components/ListOfProducts/Product';
import productData from '../components/Data/productData';
import { Section, Container } from '../components/Container';
import { GroupedProducts, CategoryHead } from '../components/Container/ProductContainers';
import { SecondaryTitle } from '../components/UI/Titles';

const CategoryPage = () => {
    const { id } = useParams();

    const categories = productData;
    const category = categories.find((category) => category.id === id);

    if (!category) {
        return <Page404 />;
    }

    return (
        <Section>
            <Container>
                <CategoryHead>
                    <SecondaryTitle>{category.name}</SecondaryTitle>
                </CategoryHead>
                <GroupedProducts>
                    {category.products.map((product, idx) => (
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
        </Section>
    );
};

export default CategoryPage;
