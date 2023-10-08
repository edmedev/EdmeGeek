import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Category from '../ListOfProducts/Category';
import { FormContainer, Form, TextField, Label, Input, Select } from './FormStyles';
import { PrimaryButton } from '../UI/Buttons';

const AddProductForm = () => {
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

        if (name === 'category') {
            // Si el campo es 'category', actualiza directamente el valor
            setNewProduct({
                ...newProduct,
                category: value,
            });
        } else {
            // Para otros campos, actualiza el estado como lo estabas haciendo
            setNewProduct({
                ...newProduct,
                [name]: value,
            });
        }
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
        <FormContainer>
            <Form onSubmit={handleFormSubmit}>
                <TextField>
                    <Label htmlFor="name">Nombre del Producto:</Label>
                    <Input
                        type="text"
                        id="name"
                        name="name"
                        value={newProduct.name}
                        onChange={handleInputChange}
                        required
                    />
                </TextField>
                <TextField>
                    <Label htmlFor="price">Precio:</Label>
                    <Input
                        type="text"
                        id="price"
                        name="price"
                        value={newProduct.price}
                        onChange={handleInputChange}
                        required
                    />
                </TextField>
                <TextField>
                    <Label htmlFor="imagenURL">URL de la Imagen:</Label>
                    <Input
                        type="text"
                        id="image"
                        name="image"
                        value={newProduct.image}
                        onChange={handleInputChange}
                        required
                    />
                </TextField>
                <TextField>
                    <Label htmlFor="category">Categoría:</Label>
                    <Select
                        id="category"
                        name="category"
                        value={newProduct.category}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="">Seleccione una categoría</option>
                        {categories.map((category, index) => (
                            <option key={index} value={category}>
                                {category}
                            </option>
                        ))}
                    </Select>
                </TextField>
                <Link to="/no-se-pudo-agregar-el-producto">
                    <PrimaryButton>
                        Agregar Producto
                    </PrimaryButton>
                </Link>
            </Form>

            {categories.map((category, index) => (
                <Category
                    key={index}
                    name={category.name}
                    products={category.products}
                />
            ))}
        </FormContainer>
    );
};

export default AddProductForm;
