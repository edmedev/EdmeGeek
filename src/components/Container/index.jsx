import styled from "styled-components";
import { lightGrey, lightBlue } from "../UI/Variables";

export const Section = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 4rem;
    background: ${lightGrey};
`;

export const Container = styled.div`
    width: 100%;
    max-width: 71rem;
    margin: auto;
`

export const FooterContainer = styled.footer`
    width: 100%;
    display: flex;
    flex-direction: column;
    background: ${lightBlue};
`;
