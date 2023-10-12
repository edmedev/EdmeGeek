import React, { useState } from 'react';
import { SecondaryContainer } from '../Container';
import { Form, TextField, Label, Input, Select } from '../Container/FormContainers';
import { TertiaryButton } from '../UI/Buttons';

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
        <SecondaryContainer>
            <Form onSubmit={handleFormSubmit}>
                <TextField>
                    <Label htmlFor="imagenURL">URL de la Imagen:</Label>
                    <Input
                        type="url"
                        name="image"
                        placeholder="http://ruta/imagen.png"
                        value={newProduct.image}
                        onChange={handleInputChange}
                        required
                    />
                </TextField>
                <TextField>
                    <Label htmlFor="name">Nombre del Producto:</Label>
                    <Input
                        type="text"
                        name="name"
                        placeholder="Producto XYZ"
                        value={newProduct.name}
                        onChange={handleInputChange}
                        required
                    />
                </TextField>
                <TextField>
                    <Label htmlFor="price">Precio:</Label>
                    <Input
                        type="text"
                        name="price"
                        placeholder="$60,00"
                        value={newProduct.price}
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
                <TertiaryButton type="submit">
                    Agregar Producto
                </TertiaryButton>
            </Form>
        </SecondaryContainer>
    );
};

export default AddProductForm;
