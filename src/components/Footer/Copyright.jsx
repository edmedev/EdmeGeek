import styled from "styled-components";
import { CopyrightParagraph } from "../UI/Paragraphs";

const CopyrightContainer = styled.div`
    width: 100%;
    max-width: 71rem;
    margin: auto;
`

const Copyright = () => {
    return(
        <CopyrightContainer>
            <CopyrightParagraph>
                Desarrollado por Eduardo Mendez © 2023
            </CopyrightParagraph>
        </CopyrightContainer>
    );
}

export default Copyright;
