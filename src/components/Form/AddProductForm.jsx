import React, { useState } from 'react';
import { SecondaryContainer } from '../Container';
import { Form, TextField, Label, Input, Select } from '../Container/FormContainers';
import { TertiaryButton } from '../UI/Buttons';
import productData from '../Data/productData';

const AddProductForm = () => {
    const [product, setProduct] = useState({
        image: '',
        name: '',
        price: '',
        category: '',
        description: ''
    });

    const [nextId, setNextId] = useState(productData[0].products.length + 1);
    const [updatedProductData, setUpdatedProductData] = useState(productData);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const newProduct = {
            id: nextId.toString(),
            image: product.image,
            name: product.name,
            price: product.price,
            description: product.description
        };

        const updatedData = updatedProductData.map(category => {
            if (category.id === product.category) {
                return {
                    ...category,
                    products: [...category.products, newProduct]
                };
            }
            return category;
        });

        setUpdatedProductData(updatedData);
        setNextId(nextId + 1);

        setProduct({
            image: '',
            name: '',
            price: '',
            category: '',
            description: ''
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
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
                        required
                        value={product.image}
                        onChange={handleInputChange}
                    />
                </TextField>
                <TextField>
                    <Label htmlFor="name">Nombre del Producto:</Label>
                    <Input
                        type="text"
                        name="name"
                        placeholder="Producto XYZ"
                        required
                        value={product.name}
                        onChange={handleInputChange}
                    />
                </TextField>
                <TextField>
                    <Label htmlFor="price">Precio:</Label>
                    <Input
                        type="text"
                        name="price"
                        placeholder="$60,00"
                        required
                        value={product.price}
                        onChange={handleInputChange}
                    />
                </TextField>
                <TextField>
                    <Label htmlFor="category">Categoría:</Label>
                    <Select
                        name="category"
                        required
                        value={product.category}
                        onChange={handleInputChange}
                    >
                        <option value="">Seleccione una categoría</option>
                        <option value="star-wars">Star Wars</option>
                        <option value="consolas">Consolas</option>
                        <option value="diversos">Diversos</option>
                    </Select>
                </TextField>
                <TextField>
                    <Label htmlFor="description">Descripción:</Label>
                    <Input
                        type="text"
                        name="description"
                        placeholder="Escribe la descripción del producto"
                        required
                        value={product.description}
                        onChange={handleInputChange}
                    />
                </TextField>
                <TertiaryButton type="submit">
                    Agregar Producto
                </TertiaryButton>
            </Form>
        </SecondaryContainer>
    );
};

export default AddProductForm;
