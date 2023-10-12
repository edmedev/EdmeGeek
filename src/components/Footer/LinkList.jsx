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
            <Link to="/quienes-somos">
                <MainParagraph>
                    Quienes somos
                </MainParagraph>
            </Link>
            <Link to="/categoria/star-wars">
                <MainParagraph>
                    Categoría de Star Wars
                </MainParagraph>
            </Link>
            <Link to="/categoria/consolas">
                <MainParagraph>
                    Categoría de Consolas
                </MainParagraph>
            </Link>
            <Link to="/categoria/diversos">
                <MainParagraph>
                    Categoría de Diversos
                </MainParagraph>
            </Link>
            <Link to="/politicas-privacidad">
                <MainParagraph>
                    Política de privacidad
                </MainParagraph>
            </Link>
            <Link to="/contactenos">
                <MainParagraph>
                    Contáctenos
                </MainParagraph>
            </Link>
        </NavigationLinks>
    );
}

export default LinkList;
