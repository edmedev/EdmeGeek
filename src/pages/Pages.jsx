import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import pageData from "../components/Data/pageData";
import Page404 from "./Page404";
import { Section } from "../components/Container";
import { SecondaryTitle } from "../components/UI/Titles";
import { MainParagraph } from "../components/UI/Paragraphs";

export const Container = styled.div`
    width: 100%;
    max-width: 39rem;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`;

const Pages = () => {
    const { id } = useParams();

    // Busca el producto específico en el arreglo arrangement
    let showPages = null;
    pageData.forEach((pages) => {
        const pageContent = pages.page.find((p) => p.id === id);
        if (pageContent) {
            showPages = pageContent;
        }
    });

    if (!showPages) {
        return <Page404 />;
    }

    // Renderiza los detalles del producto aquí
    return(
        <Section>
            <Container>
                <SecondaryTitle>{showPages.name}</SecondaryTitle>
                {showPages.description.map((paragraph, index) => (
                    <MainParagraph key={index}>{paragraph}</MainParagraph>
                ))}
            </Container>
        </Section>
    );
}

export default Pages;
