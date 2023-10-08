import React from 'react';
import { useParams } from 'react-router-dom';
import Product from '../components/ListOfProducts/Product';
import arrangement from '../components/ListOfProducts/arrangement';
import { ProductsSection } from '../components/ListOfProducts';
import { ProductCategory, GroupedProducts, CategoryHead } from '../components/ListOfProducts/Category';
import { SecondaryTitle } from '../components/UI/Titles';

const CategoryPage = () => {
    const { id } = useParams(); // Obtén el ID de la URL

    const categories = arrangement;
    const category = categories.find((category) => category.id === id);

    if (!category) {
        return <div>Categoría no encontrada</div>;
    }

    return (
        <ProductsSection>
            <ProductCategory>
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
                            id={product.name}
                        />
                    ))}
                </GroupedProducts>
            </ProductCategory>
        </ProductsSection>
    );
};

export default CategoryPage;
