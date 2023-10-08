import styled from "styled-components";
import { Link } from "react-router-dom";
import { MainParagraph } from "../UI/Paragraphs";

const NavigationLinks = styled.div`
    display: flex;
    width: 11rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
    flex-shrink: 0;
    flex: 1 0 0;
    @media (max-width: 767px) {
        width: 100%;
        align-items: center;
    };
`;

const LinkList = () => {
    return(
        <NavigationLinks>
            <Link to="./#">
                <MainParagraph>
                    Quienes somos
                </MainParagraph>
            </Link>
            <Link to="./#">
                <MainParagraph>
                    Política de privacidad
                </MainParagraph>
            </Link>
            <Link to="./#">
                <MainParagraph>
                    Programa de fidelidad
                </MainParagraph>
            </Link>
            <Link to="./#">
                <MainParagraph>
                    Nuestras Tiendas
                </MainParagraph>
            </Link>
            <Link to="./#">
                <MainParagraph>
                    Quiero ser franquiciado
                </MainParagraph>
            </Link>
            <Link to="./#">
                <MainParagraph>
                    Anúncie aquí
                </MainParagraph>
            </Link>
        </NavigationLinks>
    );
}

export default LinkList;
