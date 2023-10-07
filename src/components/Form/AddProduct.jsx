import React, { useState } from 'react';
import Category from '../ListOfProducts/Category';

const AddProduct = () => {
    const [categories, setCategories] = useState([
        "Star Wars",
        "Consolas",
        "Diversos"
    ]);

    const [newProduct, setNewProduct] = useState({
        name: '',
        image: '',
        price: '',
        category: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({
            ...newProduct,
            [name]: value,
        });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (newProduct.name && newProduct.price && newProduct.image && newProduct.category) {
            const newCategory = categories.find(category => category.name === newProduct.category);

            if (newCategory) {
                newCategory.products.push({
                    name: newProduct.name,
                    price: newProduct.price,
                    image: newProduct.image,
                });
                setCategories([...categories]);
                setNewProduct({
                    name: '',
                    price: '',
                    image: '',
                    category: '',
                });
            }
        }
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor="name">Nombre del Producto:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={newProduct.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                <label htmlFor="price">Precio:</label>
                    <input
                        type="text"
                        id="price"
                        name="price"
                        value={newProduct.price}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="imagenURL">URL de la Imagen:</label>
                    <input
                        type="text"
                        id="image"
                        name="image"
                        value={newProduct.image}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="category">Categoría:</label>
                    <select
                        id="category"
                        name="category"
                        value={newProduct.category}
                        onChange={handleInputChange}
                    >
                    <option value="">Seleccione una categoría</option>
                    {/* Aquí puedes generar dinámicamente opciones para cada categoría */}
                    </select>
                </div>
                <button type="submit">Agregar Producto</button>
            </form>

            {categories.map((category, index) => (
                <Category
                    key={index}
                    name={category.name}
                    products={category.products}
                />
            ))}
        </div>
    );
};

export default AddProduct;
