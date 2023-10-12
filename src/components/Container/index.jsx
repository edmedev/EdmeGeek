import styled from "styled-components";
import { lightGrey, lightBlue } from "../UI/Variables";

export const Section = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 4rem;
    background: ${lightGrey};
    @media (max-width: 767px) {
        padding: 2rem 1rem;
    };
    @media (min-width: 768px) and (max-width: 1023px) {
        padding: 2rem;
    };
`;

export const Container = styled.div`
    width: 100%;
    max-width: 71rem;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`;

export const SecondaryContainer = styled.div`
    width: 100%;
    max-width: 35rem;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
`;

export const TertiaryContainer = styled.div`
    width: 100%;
    max-width: 27rem;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
`;

export const QuarteryContainer = styled.div`
    width: 100%;
    max-width: 71rem;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 2rem;
    @media (max-width: 767px) {
        flex-direction: column;
    };
`;

export const FooterContainer = styled.footer`
    width: 100%;
    display: flex;
    flex-direction: column;
    background: ${lightBlue};
`;

