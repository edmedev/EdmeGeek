import React from 'react';
import { useParams } from 'react-router-dom';
import Product from '../components/ListOfProducts/Product';
import arrangement from '../components/ListOfProducts/arrangement';

const CategoryPage = () => {
    const { id } = useParams(); // Obtén el ID de la URL

    const categories = arrangement;
    const category = categories.find((category) => category.id === id);

    if (!category) {
        return <div>Categoría no encontrada</div>;
    }

    return (
        <div>
            <h1>{category.name}</h1>
            <div>
                {category.products.map((product, idx) => (
                    <Product
                        key={idx}
                        image={product.image}
                        name={product.name}
                        price={product.price}
                        id={product.name}
                    />
                ))}
            </div>
        </div>
    );
};

export default CategoryPage;
