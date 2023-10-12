import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import productData from "../components/Data/productData";
import Page404 from "./Page404";
import { Section, QuarteryContainer } from "../components/Container";
import { Form, TextField, Label, Input } from "../components/Container/FormContainers";
import { TertiaryButton } from "../components/UI/Buttons";
import { TertiaryTitle, QuartetTitle, FifthTitle } from "../components/UI/Titles";

const BuyerData = styled.div`
    width: 70%;
    max-width: 35rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    @media (max-width: 767px) {
        width: 100%;
    };
`;

const ProductDetails = styled.div`
    width: 30%;
    max-width: 11rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    @media (max-width: 767px) {
        width: 100%;
    };
`;

const Checkout = () => {
    const { id } = useParams();

    // Busca el producto específico en el arreglo arrangement
    let purchaseDetails = null;
    productData.forEach((category) => {
        const checkout = category.products.find((p) => p.id === id);
        if (checkout) {
            purchaseDetails = checkout;
        }
    });

    if (!purchaseDetails) {
        return <Page404 />;
    }

    // Renderiza los detalles del producto aquí
    return(
        <Section>
            <QuarteryContainer>
                <BuyerData>
                    <TertiaryTitle>
                        Llena los siguientes datos para hacer la compra:
                    </TertiaryTitle>

                    <Form>
                        <TextField>
                            <Label>Nombre completo</Label>
                            <Input
                                type="text"
                                name="name"
                                placeholder="Escribe tu nombre y apellido"
                                required
                            />
                        </TextField>
                        <TextField>
                            <Label>Correo electronico</Label>
                            <Input
                                type="email"
                                name="email"
                                placeholder="Escribe tu email"
                                required
                            />
                        </TextField>
                        <TextField>
                            <Label>Número de celular</Label>
                            <Input
                                type="phone"
                                name="phone"
                                placeholder="Escribe tu número de celular"
                                required
                            />
                        </TextField>
                        <TextField>
                            <Label>Ciudad y departamento</Label>
                            <Input
                                type="text"
                                name="city"
                                placeholder="Ej: Barranquilla, Atlantico"
                                required
                            />
                        </TextField>
                        <TextField>
                            <Label>Direction de residencia</Label>
                            <Input
                                type="text"
                                name="address"
                                placeholder="Escribe tu direccion y el barrio"
                                required
                            />
                        </TextField>
                        <TertiaryButton type="submit">Pagar</TertiaryButton>
                    </Form>
                </BuyerData>
                <ProductDetails>
                    <FifthTitle>Delles del producto:</FifthTitle>
                    <QuartetTitle>{purchaseDetails.name}</QuartetTitle>
                    <img src={purchaseDetails.image} alt={purchaseDetails.name} />
                    <QuartetTitle>Precio: {purchaseDetails.price}</QuartetTitle>
                </ProductDetails>
            </QuarteryContainer>
        </Section>
    );
}

export default Checkout;
